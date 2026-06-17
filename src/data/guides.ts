export type Guide = {
  title: string;
  slug: string;
  category: string;
  description: string;
};

export const guides: Guide[] = [
  {
    title: "Watts to kWh",
    slug: "watts-to-kwh",
    category: "Basics",
    description: "Understand the unit used on electricity bills.",
  },
  {
    title: "How to Calculate Electricity Cost",
    slug: "how-to-calculate-electricity-cost",
    category: "Basics",
    description: "Use watts, hours, and price per kWh to estimate running cost.",
  },
  {
    title: "Average Appliance Wattage",
    slug: "average-appliance-wattage",
    category: "Appliance Planning",
    description: "Compare typical wattage ranges for common household appliances.",
  },
  {
    title: "Electricity Rate Cost per kWh",
    slug: "electricity-rate-cost-per-kwh",
    category: "Utility Bills",
    description: "Learn what cost per kWh means and where to find your rate.",
  },
  {
    title: "Appliance Energy Saving Tips",
    slug: "appliance-energy-saving-tips",
    category: "Saving Energy",
    description: "Practical ways to lower appliance running costs at home.",
  },
];
