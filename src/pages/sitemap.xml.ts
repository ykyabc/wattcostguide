import { appliances } from "../data/appliances";
import { calculatorCategories } from "../data/categories";
import { guides } from "../data/guides";
import { getApplianceReferences } from "../data/applianceReferences";

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
const defaultLastmod = "2026-06-17";

export function GET() {
  const urls = [
    ...staticPages.map((path) => ({ path, lastmod: defaultLastmod })),
    ...guides.map((guide) => ({ path: `/guides/${guide.slug}/`, lastmod: defaultLastmod })),
    ...calculatorCategories.map((category) => ({
      path: `/calculators/category/${category.slug}/`,
      lastmod: defaultLastmod,
    })),
    ...appliances.map((appliance) => ({
      path: `/calculators/${appliance.slug}/`,
      lastmod: getApplianceReferences(appliance.slug).updated,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ path, lastmod }) => `  <url><loc>${site}${path}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
