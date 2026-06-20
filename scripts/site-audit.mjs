import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const siteOrigin = "https://wattcostguide.com";
const errors = [];
const warnings = [];

const fail = (file, message) => errors.push(`${file}: ${message}`);
const warn = (file, message) => warnings.push(`${file}: ${message}`);
const displayPath = (file) => relative(root, file).split(sep).join("/");

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const fullPath = join(directory, name);
    return statSync(fullPath).isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([:\w-]+)\s*=\s*["']([^"']*)["']/g)].map((match) => [match[1].toLowerCase(), match[2]]),
  );
}

function tags(html, tagName) {
  return [...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, "gi"))].map((match) => attributes(match[0]));
}

function metaContent(html, key) {
  const meta = tags(html, "meta").find((item) => item.name === key || item.property === key);
  return meta?.content ?? "";
}

function firstText(html, tagName) {
  const match = html.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)</${tagName}>`, "i"));
  return match?.[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() ?? "";
}

function routeTarget(href) {
  let url;
  try {
    url = new URL(href, siteOrigin);
  } catch {
    return null;
  }

  if (url.origin !== siteOrigin) return null;
  const pathname = decodeURIComponent(url.pathname);
  if (pathname === "/404/" || pathname === "/404.html") return join(dist, "404.html");
  if (pathname.endsWith("/")) return join(dist, pathname.slice(1), "index.html");
  if (extname(pathname)) return join(dist, pathname.slice(1));
  return join(dist, pathname.slice(1), "index.html");
}

if (!existsSync(dist)) {
  console.error("Site audit failed: dist/ does not exist. Run the build first.");
  process.exit(1);
}

const files = walk(dist);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const indexablePages = [];
const seenTitles = new Map();
const seenDescriptions = new Map();
let internalLinkCount = 0;
let externalLinkCount = 0;

for (const file of htmlFiles) {
  const label = displayPath(file);
  const html = readFileSync(file, "utf8");
  const title = firstText(html, "title");
  const description = metaContent(html, "description");
  const robots = metaContent(html, "robots");
  const canonical = tags(html, "link").find((item) => item.rel === "canonical")?.href ?? "";
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const is404 = file === join(dist, "404.html");
  const isIndexable = !robots.toLowerCase().includes("noindex") && !is404;

  if (!title) fail(label, "missing title");
  if (!description) fail(label, "missing meta description");
  if (!canonical.startsWith(`${siteOrigin}/`)) fail(label, "missing or non-canonical URL");
  if (h1Count !== 1) fail(label, `expected one h1, found ${h1Count}`);
  if (!metaContent(html, "og:title")) fail(label, "missing og:title");
  if (!metaContent(html, "og:description")) fail(label, "missing og:description");
  if (metaContent(html, "og:url") !== canonical) fail(label, "og:url does not match canonical");
  if (!metaContent(html, "og:image").startsWith(`${siteOrigin}/`)) fail(label, "missing absolute og:image");
  if (metaContent(html, "og:image:width") !== "1200" || metaContent(html, "og:image:height") !== "630") {
    fail(label, "OG image dimensions must be 1200x630");
  }
  if (metaContent(html, "twitter:card") !== "summary_large_image") fail(label, "missing large Twitter card");
  if (!metaContent(html, "twitter:image")) fail(label, "missing twitter:image");
  if (is404 && !robots.toLowerCase().includes("noindex")) fail(label, "404 page must be noindex");
  if (/initial WattCostGuide launch|\$0\.17(?:\/kWh| per kWh)/i.test(html)) fail(label, "contains stale launch or rate copy");

  if (title.length > 65) warn(label, `title is ${title.length} characters`);
  if (description.length > 165) warn(label, `description is ${description.length} characters`);

  if (isIndexable) {
    indexablePages.push({ label, canonical });
    if (seenTitles.has(title)) warn(label, `duplicates title from ${seenTitles.get(title)}`);
    else seenTitles.set(title, label);
    if (seenDescriptions.has(description)) warn(label, `duplicates description from ${seenDescriptions.get(description)}`);
    else seenDescriptions.set(description, label);
  }

  if (/dist\/calculators\/[^/]+-cost-calculator\/index\.html$/.test(label)) {
    if (!html.includes("Sources and methodology")) fail(label, "missing sources section");
    if (!html.includes("Last updated:")) fail(label, "missing independent update date");
    if (!html.includes('"dateModified":') || !html.includes('"citation":[')) {
      fail(label, "missing dateModified or citation schema data");
    }
  }

  for (const anchor of tags(html, "a")) {
    const href = anchor.href;
    if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    const target = routeTarget(href);
    if (target) {
      internalLinkCount += 1;
      if (!existsSync(target)) fail(label, `broken internal link: ${href}`);
    } else {
      externalLinkCount += 1;
    }
  }

  for (const image of tags(html, "img")) {
    const src = image.src;
    if (!src || /^https?:/i.test(src) || src.startsWith("data:")) continue;
    const target = routeTarget(src);
    if (!target || !existsSync(target)) fail(label, `missing local image: ${src}`);
    if (!image.alt) warn(label, `image has empty alt text: ${src}`);
  }
}

const ogImage = join(dist, "og-wattcostguide.jpg");
if (!existsSync(ogImage) || statSync(ogImage).size < 10_000) fail("dist/", "OG image is missing or unexpectedly small");

const robotsFile = join(dist, "robots.txt");
if (!existsSync(robotsFile)) fail("dist/", "robots.txt is missing");
else if (!readFileSync(robotsFile, "utf8").includes(`${siteOrigin}/sitemap.xml`)) fail("dist/robots.txt", "sitemap URL is missing");

const sitemapFile = join(dist, "sitemap.xml");
if (!existsSync(sitemapFile)) {
  fail("dist/", "sitemap.xml is missing");
} else {
  const sitemap = readFileSync(sitemapFile, "utf8");
  const locations = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
  const lastmods = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1]);
  for (const page of indexablePages) {
    if (!locations.has(page.canonical)) fail("dist/sitemap.xml", `missing ${page.canonical}`);
  }
  if (locations.size !== indexablePages.length) {
    fail("dist/sitemap.xml", `contains ${locations.size} URLs for ${indexablePages.length} indexable pages`);
  }
  if (lastmods.some((date) => !/^\d{4}-\d{2}-\d{2}$/.test(date))) fail("dist/sitemap.xml", "contains invalid lastmod date");
}

console.log(`\nWattCostGuide site audit`);
console.log(`Pages: ${htmlFiles.length} (${indexablePages.length} indexable)`);
console.log(`Links: ${internalLinkCount} internal, ${externalLinkCount} external`);
console.log(`Warnings: ${warnings.length}`);
for (const message of warnings) console.log(`  WARN  ${message}`);
console.log(`Errors: ${errors.length}`);
for (const message of errors) console.error(`  ERROR ${message}`);

if (errors.length) process.exit(1);
console.log("Audit passed.");
