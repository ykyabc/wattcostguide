export type Guide = {
  title: string;
  slug: string;
  category: string;
  description: string;
  updated: string;
  pillar?: boolean;
};

export const guides: Guide[] = [
  {
    title: "How to Measure Appliance Electricity Use",
    slug: "how-to-measure-appliance-electricity-use",
    category: "Measurement",
    description: "Choose between a nameplate, energy monitor, EnergyGuide label, and utility data.",
    updated: "2026-06-21",
    pillar: true,
  },
  {
    title: "Appliance Duty Cycle and Running Time",
    slug: "appliance-duty-cycle-electricity-cost",
    category: "Measurement",
    description: "Estimate cycling loads such as refrigerators, air conditioners, heaters, and pumps.",
    updated: "2026-06-21",
    pillar: true,
  },
  {
    title: "Standby Power Cost Guide",
    slug: "standby-power-cost",
    category: "Electronics",
    description: "Calculate the yearly cost of devices that continue drawing power while idle or off.",
    updated: "2026-06-21",
    pillar: true,
  },
  {
    title: "Watts to kWh",
    slug: "watts-to-kwh",
    category: "Basics",
    description: "Understand the unit used on electricity bills.",
    updated: "2026-06-17",
  },
  {
    title: "How to Calculate Electricity Cost",
    slug: "how-to-calculate-electricity-cost",
    category: "Basics",
    description: "Use watts, hours, and price per kWh to estimate running cost.",
    updated: "2026-06-17",
  },
  {
    title: "Average Appliance Wattage",
    slug: "average-appliance-wattage",
    category: "Appliance Planning",
    description: "Compare typical wattage ranges for common household appliances.",
    updated: "2026-06-17",
  },
  {
    title: "Electricity Rate Cost per kWh",
    slug: "electricity-rate-cost-per-kwh",
    category: "Utility Bills",
    description: "Learn what cost per kWh means and where to find your rate.",
    updated: "2026-06-17",
  },
  {
    title: "Appliance Energy Saving Tips",
    slug: "appliance-energy-saving-tips",
    category: "Saving Energy",
    description: "Practical ways to lower appliance running costs at home.",
    updated: "2026-06-17",
  },
];
