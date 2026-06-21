import { appliances } from "../data/appliances";
import { calculatorCategories } from "../data/categories";
import { guides } from "../data/guides";
import { getApplianceReferences } from "../data/applianceReferences";

const site = "https://wattcostguide.com";
const staticPages = [
  { path: "/", lastmod: "2026-06-20" },
  { path: "/calculators/", lastmod: "2026-06-17" },
  { path: "/calculators/categories/", lastmod: "2026-06-17" },
  { path: "/guides/", lastmod: "2026-06-21" },
  { path: "/about/", lastmod: "2026-06-21" },
  { path: "/references/", lastmod: "2026-06-20" },
  { path: "/editorial-policy/", lastmod: "2026-06-21" },
  { path: "/corrections/", lastmod: "2026-06-21" },
  { path: "/contact/", lastmod: "2026-06-17" },
  { path: "/privacy-policy/", lastmod: "2026-06-21" },
  { path: "/terms/", lastmod: "2026-06-17" },
];
const defaultLastmod = "2026-06-17";

export function GET() {
  const urls = [
    ...staticPages,
    ...guides.map((guide) => ({ path: `/guides/${guide.slug}/`, lastmod: guide.updated })),
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
