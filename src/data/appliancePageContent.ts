export type AppliancePageContent = {
  usageProfile: string;
  wattageInput: string;
  runtimeInput: string;
  faq: {
    question: string;
    answer: string;
  };
};

export const appliancePageContent: Record<string, AppliancePageContent> = {
  "space-heater-cost-calculator": {
    usageProfile: "A resistance space heater draws close to its selected wattage whenever the heating element is on. A thermostat may interrupt that draw after the room warms, so a four-hour session does not always mean four full hours of heating.",
    wattageInput: "Use the wattage for the heat setting you actually select. Many two-setting heaters are roughly 750W on low and 1,500W on high; the fan-only mode is much lower and should be estimated separately.",
    runtimeInput: "For a conservative bill estimate, enter the full session length. For a measured estimate, use a plug-in meter to total the energy consumed across a normal cold day and convert that reading to average active hours.",
    faq: {
      question: "Does a space heater use half as much electricity on low?",
      answer: "Its instantaneous draw can be about half on a 750W setting versus 1,500W on high, but total savings depend on how much longer the heater must run to hold the same room temperature.",
    },
  },
  "air-conditioner-cost-calculator": {
    usageProfile: "An air conditioner's compressor is the main load. It may run nearly continuously during hot afternoons and cycle more lightly at night, while the indoor fan can continue after the compressor stops.",
    wattageInput: "Do not enter the cooling-capacity number shown in BTU per hour. Look for rated input power in watts or amps and volts on the data plate; central systems may require combining indoor and outdoor equipment.",
    runtimeInput: "Use compressor-on time when it is available from an energy monitor or smart thermostat. Otherwise, enter the full operating window for an upper estimate and compare it with a shorter cycling scenario.",
    faq: {
      question: "Should I use the AC's BTU rating as watts?",
      answer: "No. BTU per hour describes cooling output, not electrical input. Use the unit's listed watts, or calculate approximate input watts from its electrical rating when the manufacturer provides enough information.",
    },
  },
  "fan-electricity-cost-calculator": {
    usageProfile: "A portable, pedestal, or box fan is a mostly steady motor load. Power changes with speed, and electronic controls or oscillation add little compared with the fan motor itself.",
    wattageInput: "Choose the wattage for the speed you use most often. A plug-in meter is useful because the nameplate may show a maximum rating rather than the lower draw at medium or low speed.",
    runtimeInput: "Count the hours the fan actually spins, including overnight use. Do not count time when it is switched off but remains plugged in unless you are separately measuring standby power.",
    faq: {
      question: "Does fan speed make a meaningful difference to running cost?",
      answer: "Usually yes. Lower speeds generally reduce motor power, although the reduction is model-specific and may not be proportional to the change in airflow. Measure each speed for a precise comparison.",
    },
  },
  "refrigerator-electricity-cost-calculator": {
    usageProfile: "A refrigerator stays connected all day but its compressor cycles. Defrost heaters, door openings, warm food, room temperature, and an ice maker can create short periods of higher consumption.",
    wattageInput: "Nameplate watts describe a running or maximum electrical load, not a 24-hour average. For bill planning, an EnergyGuide annual kWh figure or a multi-day meter reading is more representative than multiplying nameplate watts by 24.",
    runtimeInput: "If using watts in this calculator, enter estimated compressor-equivalent hours rather than 24 hours. Better still, measure at least two normal days so cooling and defrost cycles are included.",
    faq: {
      question: "Why should I not enter 24 hours for a refrigerator?",
      answer: "The appliance is connected for 24 hours, but the compressor is not normally at full power all day. Entering rated watts for 24 hours can substantially overstate energy use unless that wattage is already an average draw.",
    },
  },
  "dehumidifier-cost-calculator": {
    usageProfile: "A dehumidifier combines a compressor and fan. It can run for long stretches in a damp basement, then cycle after the humidity target is reached or stop when its collection bucket fills.",
    wattageInput: "Use input watts from the label, not the pints-per-day moisture-removal rating. Fan-only operation may draw less, while a low-temperature or continuous mode can change the daily total.",
    runtimeInput: "Estimate active compressor hours for the humidity setting and season you care about. A meter reading over several humid days gives a better average than timing one short cycle.",
    faq: {
      question: "Does a higher humidity setting reduce dehumidifier cost?",
      answer: "It often does because the compressor can stop sooner, but the result depends on basement moisture, air leakage, temperature, drainage setup, and whether the fan continues between cycles.",
    },
  },
  "dryer-electricity-cost-calculator": {
    usageProfile: "An electric clothes dryer uses a large heating element plus a drum motor. Heater cycling, load moisture, airflow, fabric selection, and an automatic moisture sensor determine how long the high-power portion lasts.",
    wattageInput: "Use the electric input rating for the whole dryer. Do not use this range for a gas dryer: gas models use fuel for most heat and electricity mainly for the motor, controls, and ignition.",
    runtimeInput: "Estimate minutes per load and multiply by loads per day or week. If the dryer has a cool-down stage, the full cycle duration gives a conservative result because the heater is not on during every minute.",
    faq: {
      question: "Can I use this estimate for a gas clothes dryer?",
      answer: "Not for the full operating cost. A gas dryer has a much smaller electrical load but also consumes natural gas or propane, which must be priced separately.",
    },
  },
  "air-fryer-electricity-cost-calculator": {
    usageProfile: "An air fryer heats at high power for a short cooking session. The element cycles around the set temperature while the circulation fan usually stays on, and preheating may be brief or unnecessary.",
    wattageInput: "Use the input wattage printed on the appliance, not its temperature setting. Dual-basket models may have different draw depending on whether one or both cooking zones are active.",
    runtimeInput: "Add preheat time and cooking time for each batch. If food requires multiple batches, count each one; a 20-minute recipe cooked twice is closer to 40 minutes of use than 20.",
    faq: {
      question: "Is an air fryer always cheaper than an electric oven?",
      answer: "Not always, but it can use less energy for a small portion because it heats a smaller chamber and often cooks for less time. Large or repeated batches can narrow that advantage.",
    },
  },
  "gaming-pc-electricity-cost-calculator": {
    usageProfile: "A gaming PC is a variable electronic load. The graphics card and processor draw much more during demanding games than at the desktop, and the monitor, speakers, networking gear, and accessories are separate loads.",
    wattageInput: "Do not enter the power supply's advertised capacity unless the computer actually draws that amount. Measure wall power during representative games or add a separate estimate for idle and gaming sessions.",
    runtimeInput: "Split a day into gaming, light-use, and idle hours when possible. Sleep time should not be counted as active runtime, though its small standby draw can be measured separately.",
    faq: {
      question: "Does a 750W power supply mean my gaming PC uses 750 watts?",
      answer: "No. That figure is the supply's output capacity. Actual wall draw depends on the installed components, workload, frame rate, efficiency, and peripherals, and is usually lower than the capacity rating.",
    },
  },
  "electric-oven-cost-calculator": {
    usageProfile: "An electric oven draws heavily while preheating, then cycles its elements to maintain temperature. Convection fans, self-cleaning modes, oven size, and opening the door affect the length and frequency of heating cycles.",
    wattageInput: "Use the oven's electrical rating, not the temperature in degrees. A range may list a maximum for all elements together, so avoid using the whole-appliance maximum when estimating the oven cavity alone.",
    runtimeInput: "Include preheat plus baking time. The elements will cycle after reaching temperature, making full-rated watts multiplied by the entire session a useful upper estimate rather than an exact reading.",
    faq: {
      question: "Should oven preheating be included in runtime?",
      answer: "Yes. Preheating is often one of the periods when the elements run most steadily. Include it along with cooking time, while remembering that the elements cycle after the set temperature is reached.",
    },
  },
  "microwave-electricity-cost-calculator": {
    usageProfile: "A microwave is a short-duration load. Its electrical input is higher than the cooking-output wattage advertised on the front, and reduced-power modes often pulse full power rather than drawing a continuously reduced amount.",
    wattageInput: "Use input watts from the rear label or manual. A microwave sold as 1,000W cooking power may require noticeably more than 1,000W from the outlet.",
    runtimeInput: "Add the actual minutes used across reheating and cooking sessions, then convert minutes to decimal hours. Clock and standby consumption are small but separate from cooking runtime.",
    faq: {
      question: "Is the microwave's advertised cooking wattage the right input?",
      answer: "Usually not. Front-panel wattage often describes cooking output. The electrical input on the data label is the appropriate figure for estimating energy drawn from the outlet.",
    },
  },
  "dishwasher-electricity-cost-calculator": {
    usageProfile: "A dishwasher's electrical use is concentrated in water heating and heated drying, with smaller loads from pumps and controls. Eco, sanitize, and high-temperature options can have very different profiles.",
    wattageInput: "A single peak wattage does not represent the whole cycle. Use an EnergyGuide kWh figure or a meter reading per cycle when available; otherwise treat rated watts across full runtime as a high-side estimate.",
    runtimeInput: "Count cycles rather than assuming every minute uses peak power. For this calculator, convert your measured kWh per cycle into equivalent hours at the chosen wattage, or compare normal and heated-dry scenarios.",
    faq: {
      question: "Does turning off heated dry reduce dishwasher electricity use?",
      answer: "It can reduce the dishwasher's direct electrical use because the drying heater is avoided or shortened. Actual savings vary by model and program, and dishes may take longer to air-dry.",
    },
  },
  "washing-machine-electricity-cost-calculator": {
    usageProfile: "A washing machine uses electricity for its motor, pump, and controls, but household water heating can be the larger energy cost for warm or hot washes. That water-heater energy is not always visible in the washer's own wattage.",
    wattageInput: "Use the washer's input rating for machine electricity. If you want the full cost of a hot wash, estimate the separate water-heating energy as well rather than inflating the washer wattage.",
    runtimeInput: "Estimate loads per week and average cycle length. Peak-rated watts for the whole cycle will be conservative because agitation, spinning, filling, and pauses draw different amounts.",
    faq: {
      question: "Does this include the energy used to heat wash water?",
      answer: "Only if the washer heats water internally and that load is included in its measured draw. For machines supplied by a household water heater, the water-heating cost should be calculated separately.",
    },
  },
  "electric-kettle-cost-calculator": {
    usageProfile: "An electric kettle is a high-wattage appliance with a very short duty cycle. It typically draws near rated power until the water boils, then switches off automatically.",
    wattageInput: "Use the kettle's label wattage. Voltage versions differ by country, so a rating from a visually similar model sold in another market may not match your kettle.",
    runtimeInput: "Time one boil with your usual water volume and multiply by boils per day. Overfilling increases runtime because extra water must also be heated.",
    faq: {
      question: "Does boiling only the water I need save electricity?",
      answer: "Yes. Heating less water generally shortens the boil, provided the amount remains above the kettle's minimum fill line. The wattage stays similar, but it runs for fewer minutes.",
    },
  },
  "coffee-maker-electricity-cost-calculator": {
    usageProfile: "A drip coffee maker uses a heater during brewing and may use a lower cycling load to keep the carafe warm. Pod machines can add warm-up, brewing, and idle-ready periods with different draws.",
    wattageInput: "Use the brewer's input rating for the brew phase. If a warming plate stays on, measure it separately or use a meter across the entire morning routine for a blended average.",
    runtimeInput: "Include heat-up and brew time, then add the time the warming plate remains active. An auto-off setting can make the keep-warm period much shorter than the time the machine is plugged in.",
    faq: {
      question: "Does the coffee maker's warming plate use much electricity?",
      answer: "It uses less power than the initial brew heater on many models, but a long keep-warm period can still add meaningful energy. A thermal carafe avoids that continuing heater load.",
    },
  },
  "toaster-oven-electricity-cost-calculator": {
    usageProfile: "A toaster oven cycles one or more heating elements in a compact cavity. Toast, bake, broil, convection, and air-fry settings can engage different elements and fan loads.",
    wattageInput: "Use the input rating for the appliance and treat it as the likely high draw. If your model has independently controlled upper and lower elements, a plug-in meter can show how each mode differs.",
    runtimeInput: "Include any preheat period and the full cooking session. Multiple trays or batches should be counted separately, while residual heat after shutoff consumes no additional electricity.",
    faq: {
      question: "When is a toaster oven likely to use less energy than a full oven?",
      answer: "It often has an advantage for small meals because its cavity preheats faster and the cooking session may be shorter. The result depends on food quantity, temperature, and repeated batches.",
    },
  },
  "instant-pot-electricity-cost-calculator": {
    usageProfile: "An electric pressure cooker heats strongly while coming to pressure, then cycles to maintain pressure. Natural release uses little or no heater power, while keep-warm mode adds a lower continuing load.",
    wattageInput: "Use the input wattage on the cooker label. The selected pressure level does not directly equal watts, and heater cycling means rated power is not sustained through every stage.",
    runtimeInput: "Separate preheat, pressure-cook, release, and keep-warm time. Counting a long natural release as full-power runtime can overstate cost; a wall meter captures the complete recipe most accurately.",
    faq: {
      question: "Does natural pressure release use full power?",
      answer: "Normally no. The active cook program has ended, although keep-warm may switch on unless disabled. That is why total recipe time can be much longer than equivalent full-power heating time.",
    },
  },
  "chest-freezer-electricity-cost-calculator": {
    usageProfile: "A chest freezer cycles its compressor to maintain a colder setpoint than a refrigerator. Room temperature, frost buildup, lid openings, food loading, and seal condition influence the duty cycle.",
    wattageInput: "Rated running watts are useful for checking the compressor load but not for multiplying by 24 hours. Prefer annual kWh from the EnergyGuide label or a meter reading covering several complete cycles.",
    runtimeInput: "Enter estimated compressor-equivalent hours, not simply plugged-in hours. Measure for at least a day, and longer if the freezer has just been loaded or defrosted.",
    faq: {
      question: "Does an empty chest freezer cost more to run?",
      answer: "The effect varies. Stored frozen mass can help stabilize temperature during openings, but efficiency also depends on ambient conditions, frost, seals, setpoint, and how often the lid is opened.",
    },
  },
  "mini-fridge-electricity-cost-calculator": {
    usageProfile: "A mini fridge is a cycling compressor load, and compact models vary widely in insulation and controls. A freezer compartment, warm room, restricted ventilation, or frequent door openings can raise consumption.",
    wattageInput: "Use annual kWh or multi-day measured energy when possible. The compressor's rated watts multiplied by a full day usually exaggerates use because the motor switches off between cooling calls.",
    runtimeInput: "Estimate compressor-on hours or derive an average from a plug-in meter. Give a newly installed fridge time to reach temperature before using its first few hours as a normal baseline.",
    faq: {
      question: "Can a mini fridge use more electricity than a larger efficient refrigerator?",
      answer: "It can on a per-volume basis, and some older compact units consume surprisingly high energy. Compare annual kWh labels rather than assuming physical size determines operating cost.",
    },
  },
  "heat-pump-electricity-cost-calculator": {
    usageProfile: "A heat pump's draw changes with outdoor temperature, thermostat demand, compressor speed, defrost cycles, and auxiliary resistance heat. Heating and cooling seasons therefore need separate assumptions.",
    wattageInput: "Use measured system input or manufacturer performance data at relevant conditions. Avoid treating the unit's heating-capacity rating as electrical watts, and include indoor blower power when it is separate.",
    runtimeInput: "Smart-thermostat equipment runtime can provide a starting point, but note when auxiliary heat operated. A cold day with backup heat should not be used as the average for mild weather.",
    faq: {
      question: "Why can heat pump cost jump during very cold weather?",
      answer: "The system may run longer, lose efficiency as outdoor temperature falls, or engage electric auxiliary heat. Backup resistance heat can add a large electrical load compared with compressor-only operation.",
    },
  },
  "portable-ac-electricity-cost-calculator": {
    usageProfile: "A portable AC combines a compressor, fans, and an exhaust path. Hose layout, window sealing, condensate handling, room size, and single-hose air leakage all influence how long the compressor runs.",
    wattageInput: "Use electrical input watts from the unit label rather than its ASHRAE or DOE cooling-capacity number. A fan-only mode should be estimated separately because it omits the compressor load.",
    runtimeInput: "Count compressor-active time for the best estimate. If only session length is known, calculate both the full session and a lower cycling case to create a realistic range.",
    faq: {
      question: "Why does hose and window sealing affect portable AC cost?",
      answer: "Hot outdoor air leaking into the room and heat radiating from the exhaust hose increase the cooling load. The unit may then keep its compressor on longer to reach the same temperature.",
    },
  },
  "ceiling-fan-electricity-cost-calculator": {
    usageProfile: "A ceiling fan is a steady motor load whose draw depends on speed, motor design, blade size, and controls. An attached light kit is a separate load and can equal or exceed the fan motor on some fixtures.",
    wattageInput: "Use motor watts for the chosen speed, then add bulb watts only if you want a combined fixture estimate. Efficient DC-motor fans can draw much less than older AC-motor models.",
    runtimeInput: "Count hours when the blades are turning. If the fan and light are controlled independently, track their runtimes separately instead of assuming both operate together.",
    faq: {
      question: "Does the ceiling fan wattage include its light?",
      answer: "Only if the specification or measurement covers the whole fixture with the light on. For a clearer estimate, calculate the fan motor and light bulbs separately, then add their daily costs.",
    },
  },
  "electric-blanket-cost-calculator": {
    usageProfile: "An electric blanket uses low-power resistance heating spread across the fabric. Its controller cycles the heat after warm-up, and dual-zone models can energize one or both sides.",
    wattageInput: "Check whether the label rating applies to one controller, one side, or the entire blanket. If two zones are used, include both unless the listed wattage already covers them together.",
    runtimeInput: "Count the timer or sleep period, but remember that thermostat cycling reduces average draw after warm-up. A meter can capture the effect of heat level and automatic shutoff over a full night.",
    faq: {
      question: "Does an electric blanket draw its rated watts all night?",
      answer: "Often not. Many controllers cycle power to maintain the selected warmth and may shut off on a timer. Rated watts across the whole night is therefore usually a conservative estimate.",
    },
  },
  "electric-water-heater-cost-calculator": {
    usageProfile: "A tank water heater uses one or more high-power elements to recover after hot-water use and to replace standby heat loss. The elements are normally thermostatically controlled rather than active all day.",
    wattageInput: "Use the element rating on the data plate. Many tanks have two elements but energize only one at a time; do not automatically add both ratings unless the design permits simultaneous operation.",
    runtimeInput: "Estimate total element-on time, not 24 connected hours. Shower volume, incoming-water temperature, thermostat setting, tank insulation, leaks, and household schedule all affect recovery time.",
    faq: {
      question: "Should I add both element wattages on a two-element water heater?",
      answer: "Usually not for standard non-simultaneous models, where the controls power one element at a time. Check the wiring diagram or manufacturer specification before combining element ratings.",
    },
  },
  "hair-dryer-electricity-cost-calculator": {
    usageProfile: "A hair dryer combines a resistance heater and fan for a short session. Heat level changes draw much more than fan-only or cool-shot operation, while duration often determines the larger share of daily cost.",
    wattageInput: "Use the rating for the selected heat setting when known. The maximum label wattage is appropriate for high heat, but can overstate a routine that mostly uses low heat or cool air.",
    runtimeInput: "Convert minutes per use to hours and multiply by uses per day. For example, ten minutes is about 0.17 hours; do not enter ten as though it represented ten hours.",
    faq: {
      question: "Does the cool setting use the same power as high heat?",
      answer: "No. Cool or fan-only operation avoids the large heating-element load, although the motor still consumes electricity. Exact draw depends on the model and selected fan speed.",
    },
  },
  "clothes-iron-electricity-cost-calculator": {
    usageProfile: "A clothes iron heats strongly from cold and then cycles to maintain the selected soleplate temperature. Steam bursts, fabric setting, pauses, and automatic shutoff change the duty cycle.",
    wattageInput: "Use the iron's rated input for a high-side estimate. Lower temperature settings do not necessarily reduce peak wattage, but they usually shorten heater-on periods after warm-up.",
    runtimeInput: "Count warm-up and active ironing time, excluding long periods after auto shutoff. Grouping garments into one session can avoid repeating the heat-up phase on separate occasions.",
    faq: {
      question: "Does an iron use full power during the entire session?",
      answer: "Typically no. The thermostat switches the element off after the target temperature is reached and turns it back on as needed. Rated watts times session length is a conservative estimate.",
    },
  },
  "vacuum-cleaner-electricity-cost-calculator": {
    usageProfile: "A corded vacuum is a fairly steady motor load during cleaning. Suction setting, powered brush heads, clogged filters, and cordless charging introduce model-specific differences.",
    wattageInput: "For a corded unit, use wall-input watts rather than air-watts, which describe suction performance. For cordless models, charger energy per full or partial recharge is a better basis than motor wattage.",
    runtimeInput: "Add actual cleaning minutes per week and convert to a daily or monthly average. Do not count storage time; for cordless units, measure charging energy after a typical cleaning session.",
    faq: {
      question: "Are vacuum air-watts the same as electrical watts?",
      answer: "No. Air-watts are a suction-performance measure. Electricity cost should be based on input watts from the outlet or on measured charger energy for a cordless vacuum.",
    },
  },
  "tv-electricity-cost-calculator": {
    usageProfile: "TV power varies with screen size, display technology, brightness, picture mode, HDR content, and energy-saving settings. Standby draw is much lower than active viewing but continues for more hours.",
    wattageInput: "An EnergyGuide or measured value in your normal picture mode is better than the maximum nameplate rating. Soundbars, game consoles, streaming boxes, and receivers should be added as separate devices.",
    runtimeInput: "Count screen-on viewing hours. If standby matters, estimate it separately using its lower wattage over the remaining hours instead of counting a full day at active power.",
    faq: {
      question: "Does changing TV brightness affect electricity use?",
      answer: "It often does, especially on displays where higher brightness requires more panel power. The size of the change depends on display technology, picture mode, content, and automatic brightness controls.",
    },
  },
  "laptop-electricity-cost-calculator": {
    usageProfile: "A laptop draws differently while charging, idling, compiling code, gaming, or running on a full battery. Display brightness and attached docks or monitors can be significant beside the computer itself.",
    wattageInput: "The charger rating is its maximum capacity, not a constant draw. Measure representative wall power or choose a lower average than the adapter rating for light office use.",
    runtimeInput: "Separate active plugged-in hours from sleep and battery-only time. If charging happens while the laptop is closed, include that energy through a wall meter rather than adding all battery hours as full-power runtime.",
    faq: {
      question: "Does a 65W laptop charger always use 65 watts?",
      answer: "No. It supplies only what the laptop requests, plus conversion losses. Draw usually falls as the battery fills and may be much lower during light work or sleep.",
    },
  },
  "desktop-computer-electricity-cost-calculator": {
    usageProfile: "A desktop's processor, graphics card, drives, and cooling respond to workload. Office work, rendering, gaming, and idle periods can have sharply different wall-power readings.",
    wattageInput: "Use measured wall power, not the power supply's maximum capacity. Add monitors and external equipment separately so upgrades or sleep settings can be compared without obscuring the computer's own draw.",
    runtimeInput: "Break the day into active and idle periods when practical. Sleep and shutdown consume far less than an awake desktop, so treating every powered-on hour as peak workload inflates the estimate.",
    faq: {
      question: "Should monitor power be included with a desktop computer?",
      answer: "Include it for a complete workstation total, but calculate it separately first. That makes it easier to compare multiple monitors, brightness settings, and computer sleep behavior.",
    },
  },
  "ev-charger-electricity-cost-calculator": {
    usageProfile: "An EV charger's power depends on supply voltage, circuit limit, vehicle onboard charger, battery state, and charging schedule. Energy lost during conversion and battery conditioning means wall energy exceeds energy stored in the battery.",
    wattageInput: "Use actual charging power reported by the car, charger, or utility meter. A charger's maximum rating is only a ceiling; the vehicle may accept less, especially near a full battery or in extreme temperatures.",
    runtimeInput: "Base runtime on miles driven and energy replaced, or use charging-session records. Do not assume the cable delivers full power for every connected hour because charging stops when the target is reached.",
    faq: {
      question: "Why does the wall meter show more energy than the EV battery received?",
      answer: "Charging has conversion losses and may also power battery heating, cooling, or vehicle electronics. For bill estimates, use energy measured at the wall rather than only the battery percentage gained.",
    },
  },
  "pool-pump-electricity-cost-calculator": {
    usageProfile: "Pool-pump consumption is shaped by motor size, speed, plumbing resistance, filter condition, and daily circulation schedule. Variable-speed pumps can use much less power at low speed but may run longer.",
    wattageInput: "Use measured input at the programmed speed. Horsepower alone does not provide exact electrical watts, and a variable-speed pump needs separate readings for high-speed cleaning and routine filtration.",
    runtimeInput: "Record the hours assigned to each speed and season. Add cleaner, heater, salt system, or water-feature loads separately because the pump estimate does not automatically include them.",
    faq: {
      question: "Can running a variable-speed pool pump longer still cost less?",
      answer: "Yes. Pump power can fall substantially at lower speed, so a longer low-speed filtration schedule may use less energy than a short high-speed schedule. Actual savings depend on flow needs and equipment.",
    },
  },
  "sump-pump-electricity-cost-calculator": {
    usageProfile: "A sump pump is an intermittent motor load triggered by water level. Rainfall, groundwater, basin size, discharge height, check-valve condition, and pump capacity determine starts and total runtime.",
    wattageInput: "Use running watts from the pump label or a suitable meter. Starting surge is brief and matters for backup-power sizing, but electricity billing is driven mainly by running energy.",
    runtimeInput: "Time several pumping cycles and count starts during dry and wet periods. A yearly estimate should reflect seasonal rain rather than multiplying one storm day's runtime across every day.",
    faq: {
      question: "Should startup surge be entered as the sump pump wattage?",
      answer: "No for normal energy-cost calculations. Surge lasts only briefly. Use running watts for cost, while considering surge separately when sizing a generator, inverter, or battery backup.",
    },
  },
  "aquarium-heater-electricity-cost-calculator": {
    usageProfile: "An aquarium heater cycles to offset heat lost through the glass, water surface, and room air. Tank volume, room temperature, lid, water movement, setpoint, and heater placement affect its duty cycle.",
    wattageInput: "Use the heater's rated watts; if the tank has two heaters, add their ratings only when both can heat at the same time. Pumps and aquarium lights are separate continuous or scheduled loads.",
    runtimeInput: "Estimate heater-on hours rather than 24 connected hours. Observe the indicator light or use a meter across several day-and-night cycles, including the colder room conditions you want to budget for.",
    faq: {
      question: "Does a 100W aquarium heater use 100 watts all day?",
      answer: "Normally no. Its thermostat switches the element on and off. A cold room or uncovered tank increases on-time, while a lid and stable ambient temperature can reduce it.",
    },
  },
};

export function getAppliancePageContent(slug: string): AppliancePageContent {
  const content = appliancePageContent[slug];
  if (!content) throw new Error(`Missing appliance page content for ${slug}`);
  return content;
}
