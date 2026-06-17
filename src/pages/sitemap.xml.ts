import { appliances } from "../data/appliances";
import { calculatorCategories } from "../data/categories";
import { guides } from "../data/guides";

const site = "https://wattcostguide.com";
const staticPages = [
  "/",
  "/calculators/",
  "/calculators/categories/",
  "/guides/",
  "/about/",
  "/references/",
  "/contact/",
  "/privacy-policy/",
  "/terms/",
];
const lastmod = "2026-06-17";

export function GET() {
  const urls = [
    ...staticPages,
    ...guides.map((guide) => `/guides/${guide.slug}/`),
    ...calculatorCategories.map((category) => `/calculators/category/${category.slug}/`),
    ...appliances.map((appliance) => `/calculators/${appliance.slug}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${site}${path}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
