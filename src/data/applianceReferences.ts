export type ApplianceSource = {
  title: string;
  publisher: string;
  url: string;
  note: string;
};

const sourceCatalog = {
  eiaRates: {
    title: "Electricity Data Browser",
    publisher: "U.S. Energy Information Administration",
    url: "https://www.eia.gov/electricity/data/browser/",
    note: "Used to benchmark the rounded default residential electricity rate. Your utility bill remains the best source for your own rate.",
  },
  doeEstimating: {
    title: "Estimating Appliance and Home Electronic Energy Use",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/energysaver/estimating-appliance-and-home-electronic-energy-use",
    note: "Supports the watts-to-kWh calculation method and the recommendation to check the appliance nameplate or use a power meter.",
  },
  doeSpaceHeaters: {
    title: "Small Space Heaters",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/energysaver/small-space-heaters",
    note: "Provides operating and efficiency context for electric resistance space heaters.",
  },
  doeAirConditioning: {
    title: "Air Conditioning",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/energysaver/air-conditioning",
    note: "Provides efficiency, sizing, maintenance, and operating context for air-conditioning systems.",
  },
  doeFans: {
    title: "Fans for Cooling",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/energysaver/fans-cooling",
    note: "Explains how portable and ceiling fans provide comfort and how their use differs from air conditioning.",
  },
  doeHeatPumps: {
    title: "Heat Pump Systems",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/energysaver/heat-pump-systems",
    note: "Provides operating and efficiency context for residential heat-pump systems.",
  },
  doeWaterHeating: {
    title: "Water Heating",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/energysaver/water-heating",
    note: "Provides energy-use and efficiency context for residential water-heating equipment.",
  },
  doePoolPumps: {
    title: "Choosing, Installing, and Operating an Efficient Swimming Pool Pump",
    publisher: "U.S. Department of Energy",
    url: "https://www.energy.gov/energysaver/choosing-installing-and-operating-efficient-swimming-pool-pump",
    note: "Explains pool-pump sizing, runtime, controls, and energy-efficiency considerations.",
  },
  afdcEvCharging: {
    title: "Charging Electric Vehicles at Home",
    publisher: "U.S. Department of Energy Alternative Fuels Data Center",
    url: "https://afdc.energy.gov/fuels/electricity-charging-home",
    note: "Provides charging-level and home-charging power context for electric vehicles.",
  },
  energyStarRefrigerators: {
    title: "Refrigerators",
    publisher: "ENERGY STAR",
    url: "https://www.energystar.gov/products/refrigerators",
    note: "Provides efficiency and annual energy-use context for full-size and compact refrigerators.",
  },
  energyStarFreezers: {
    title: "Freezers",
    publisher: "ENERGY STAR",
    url: "https://www.energystar.gov/products/freezers",
    note: "Provides efficiency and annual energy-use context for residential freezers.",
  },
  energyStarDehumidifiers: {
    title: "Dehumidifiers",
    publisher: "ENERGY STAR",
    url: "https://www.energystar.gov/products/dehumidifiers",
    note: "Provides capacity and energy-efficiency context for portable dehumidifiers.",
  },
  energyStarWashers: {
    title: "Clothes Washers",
    publisher: "ENERGY STAR",
    url: "https://www.energystar.gov/products/clothes_washers",
    note: "Provides efficiency and energy-use context for residential clothes washers.",
  },
  energyStarDryers: {
    title: "Clothes Dryers",
    publisher: "ENERGY STAR",
    url: "https://www.energystar.gov/products/clothes_dryers",
    note: "Provides efficiency, cycle, and operating context for residential clothes dryers.",
  },
  energyStarDishwashers: {
    title: "Dishwashers",
    publisher: "ENERGY STAR",
    url: "https://www.energystar.gov/products/dishwashers",
    note: "Provides efficiency and cycle-energy context for residential dishwashers.",
  },
  energyStarComputers: {
    title: "Computers",
    publisher: "ENERGY STAR",
    url: "https://www.energystar.gov/products/computers",
    note: "Provides power-management and energy-efficiency context for desktop, gaming, and laptop computers.",
  },
  energyStarRoomAc: {
    title: "Room Air Conditioners",
    publisher: "ENERGY STAR",
    url: "https://www.energystar.gov/products/room_air_conditioners",
    note: "Provides sizing and efficiency context for window and room air conditioners.",
  },
} satisfies Record<string, ApplianceSource>;

type SourceKey = keyof typeof sourceCatalog;
type ApplianceReferenceMetadata = { updated: string; sourceKeys: SourceKey[] };

const commonSourceKeys: SourceKey[] = ["eiaRates", "doeEstimating"];

const referenceMetadata: Record<string, ApplianceReferenceMetadata> = {
  "space-heater-cost-calculator": { updated: "2026-06-20", sourceKeys: ["doeSpaceHeaters"] },
  "air-conditioner-cost-calculator": { updated: "2026-06-20", sourceKeys: ["doeAirConditioning", "energyStarRoomAc"] },
  "fan-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["doeFans"] },
  "refrigerator-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarRefrigerators"] },
  "dehumidifier-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarDehumidifiers"] },
  "dryer-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarDryers"] },
  "air-fryer-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "gaming-pc-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarComputers"] },
  "electric-oven-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "microwave-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "dishwasher-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarDishwashers"] },
  "washing-machine-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarWashers"] },
  "electric-kettle-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "coffee-maker-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "toaster-oven-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "instant-pot-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "chest-freezer-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarFreezers"] },
  "mini-fridge-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarRefrigerators"] },
  "heat-pump-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["doeHeatPumps"] },
  "portable-ac-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["doeAirConditioning", "energyStarRoomAc"] },
  "ceiling-fan-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["doeFans"] },
  "electric-blanket-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "electric-water-heater-cost-calculator": { updated: "2026-06-20", sourceKeys: ["doeWaterHeating"] },
  "hair-dryer-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "clothes-iron-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "vacuum-cleaner-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "tv-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "laptop-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarComputers"] },
  "desktop-computer-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["energyStarComputers"] },
  "ev-charger-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["afdcEvCharging"] },
  "pool-pump-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: ["doePoolPumps"] },
  "sump-pump-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
  "aquarium-heater-electricity-cost-calculator": { updated: "2026-06-20", sourceKeys: [] },
};

const calculatorContentRevision = "2026-06-21";

export function getApplianceReferences(slug: string) {
  const metadata = referenceMetadata[slug];
  if (!metadata) throw new Error(`Missing reference metadata for appliance: ${slug}`);

  return {
    updated: metadata.updated > calculatorContentRevision ? metadata.updated : calculatorContentRevision,
    sources: [...commonSourceKeys, ...metadata.sourceKeys].map((key) => sourceCatalog[key]),
  };
}
