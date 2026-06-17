import { appliances } from "./appliances";

export const categorySlug = (category: string) =>
  category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const calculatorCategories = [...new Set(appliances.map((appliance) => appliance.category))].map((name) => ({
  name,
  slug: categorySlug(name),
  appliances: appliances.filter((appliance) => appliance.category === name),
}));
