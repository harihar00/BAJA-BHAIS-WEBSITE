/**
 * TEAM BAJA BHAIS — Master Data Repository
 * PSG College of Technology, Coimbatore
 */

const BAJA_DATA = {
  team: {
    name: "TEAM BAJA BHAIS",
    institution: "PSG College of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    tagline: "DESIGN. BUILD. TEST. RACE.",
    subtagline: "Student-Built. Engineer-Driven. Race-Proven.",
    established: 2018,
    disciplines: ["Automobile Engineering", "Mechanical Engineering", "Production Engineering"],
    carNumber: "42",
    season: "2025 - 2026 Season",
    socials: {
      instagram: "https://instagram.com/teambajabhais",
      linkedin: "https://linkedin.com/company/team-baja-bhais",
      youtube: "https://youtube.com/@teambajabhais",
      github: "https://shripalyedunutula-art.github.io/team-baja-bhais/"
    },
    contact: {
      email: "bajabhais@psgtech.ac.in",
      sponsorshipEmail: "sponsor.bajabhais@psgtech.edu",
      phone: "+91 98765 43210",
      address: "PSG College of Technology, Avinashi Rd, Peelamedu, Coimbatore, Tamil Nadu 641004"
    }
  },

  vehicle: {
    model: "BB-26 DOMINATOR AWD",
    type: "Single-Seater All-Terrain Baja SAE Prototype",
    drivetrain: "Custom Intelligent All-Wheel Drive (AWD)",
    topSpeed: "50 km/h",
    powerOutput: "9.6 kW (12.78 HP)",
    torque: "28.5 Nm @ 2800 RPM",
    curbWeight: "172 kg (Optimized Lightened Spaceframe)",
    groundClearance: "310 mm (12.2 inches)",
    wheelbase: "1720 mm",
    trackWidth: "1350 mm (Front) / 1410 mm (Rear)",
    suspensionTravel: "250 mm Front / 230 mm Rear",

    subsystems: {
      powertrain: {
        id: "powertrain",
        title: "Powertrain System & CVT",
        tag: "PROPULSION & POWER",
        badge: "SAE CERTIFIED",
        image: "assets/hero_buggy.jpg",
        description: "High-torque Honda GX430 / Briggs & Stratton single-cylinder OHV engine paired with a custom-tuned continuously variable transmission (CVT) for maximum low-end tractive torque and uninterrupted power transfer.",
        specs: [
          { label: "Engine Model", value: "HONDA GX430 OHV" },
          { label: "Power Output", value: "9.6 kW @ 3600 RPM" },
          { label: "Transmission", value: "Custom 10-Inch JIT CVT" },
          { label: "Ratio Spread", value: "3.85:1 Low to 0.88:1 High" },
          { label: "Cooling", value: "Forced Air Cooling" }
        ],
        highlights: [
          "Custom tuned intake manifold and high-flow stainless steel exhaust header",
          "Centrifugal flyweight engagement calibrated for aggressive uphill throttle snap",
          "Baffled endurance fuel cell preventing starvation under violent terrain oscillations"
        ]
      },

      vehicledynamics: {
        id: "vehicledynamics",
        title: "Vehicle Dynamics & Suspension",
        tag: "HANDLING & GEOMETRY",
        badge: "250mm ULTRA TRAVEL",
        image: "assets/race_action.jpg",
        description: "Front Unequal Length Double Wishbone (A-Arm) and Rear Multi-Link geometry with custom nitrogen-charged adjustable coilovers, engineered for zero bump-steer and superior terrain compliance.",
        specs: [
          { label: "Front Geometry", value: "Unequal Length Double Wishbone" },
          { label: "Rear Geometry", value: "Multi-Link Trailing Arm" },
          { label: "Wheel Travel", value: "250 mm Front / 230 mm Rear" },
          { label: "Dampers", value: "Nitrogen Charged Adjustable Coilovers" },
          { label: "Uprights", value: "CNC Machined 6061-T6 Aluminum" }
        ],
        highlights: [
          "Optimized roll-center migration and anti-dive kinematics under heavy braking",
          "High articulation steering tie-rod linkage with zero bump steer across full travel",
          "Aggressive 23-inch all-terrain tires mounted on lightweight aluminum beadlock rims"
        ]
      },

      brakes: {
        id: "brakes",
        title: "Braking System & Hydraulics",
        tag: "STOPPING POWER",
        badge: "4-WHEEL INSTANT LOCKUP",
        image: "assets/cad_wireframe.jpg",
        description: "Independent split front-rear dual hydraulic master cylinder architecture with cockpit balance bar, slotted ventilated stainless steel rotors, and multi-piston calipers passing SAE lockup tests.",
        specs: [
          { label: "Master Cylinders", value: "Dual Tandem Wilwood 0.625\"" },
          { label: "Rotors", value: "180 mm Laser-Cut Slotted AISI 420" },
          { label: "Brake Lines", value: "PTFE Teflon Braided Stainless Steel" },
          { label: "Brake Bias", value: "Cockpit Adjustable Balance Bar" },
          { label: "Stopping Performance", value: "Instantaneous 4-Wheel Lockup" }
        ],
        highlights: [
          "True dual-circuit split hydraulics ensuring fail-safe redundancy on the track",
          "Thermal ventilation slots engineered for rapid heat dissipation in endurance heats",
          "Ergonomic forged aluminum pedal assembly with high mechanical advantage ratio"
        ]
      },

      rollcage: {
        id: "rollcage",
        title: "Rollcage & Chromoly Spaceframe",
        tag: "STRUCTURAL SAFETY",
        badge: "FEA RIGIDITY CERTIFIED",
        image: "assets/workshop_weld.jpg",
        description: "FIA/SAE compliant spaceframe constructed from seamless AISI 4130 Chromoly steel tubing, precision notched and 100% argon-purged TIG welded for maximum driver protection and torsional stiffness.",
        specs: [
          { label: "Material", value: "Seamless AISI 4130 Chromoly Alloy" },
          { label: "Primary Hoop OD", value: "31.8 mm x 2.4 mm Wall" },
          { label: "Secondary Members", value: "25.4 mm x 1.6 mm Wall" },
          { label: "Safety Cell Factor", value: "3.2x Frontal / 2.8x Roll Impact" },
          { label: "Welding Process", value: "100% Argon-Shielded TIG" }
        ],
        highlights: [
          "Multi-directional Ansys FEA simulated for high-speed rollover energy dissipation",
          "Ergonomic driver safety cell with integrated 5-point harness & quick-exit architecture",
          "Ultra-lightweight structural triangulation maximizing torsional rigidity-to-weight ratio"
        ]
      }
    }
  },

  timelineCars: [
    {
      code: "BB-19",
      number: 19,
      name: "BB-19 DOMINATOR AWD",
      season: "2025 - 2026",
      era: "awd",
      eraLabel: "Intelligent AWD Era",
      image: "assets/cars/bb19.jpg",
      fallbackImage: "assets/hero_buggy.jpg",
      highlight: "Custom In-House 7075-T6 AWD Transfer Case & CAN-Bus Telemetry",
      badge: "CURRENT FLAGSHIP",
      specs: {
        drivetrain: "Intelligent All-Wheel Drive (AWD)",
        engine: "Honda GX430 OHV (9.6 kW / 12.8 HP)",
        weight: "172 kg (Ultra-Lightened)",
        transmission: "Custom JIT 10\" Tuned CVT",
        suspension: "Double A-Arm 250mm Travel",
        topSpeed: "50 km/h"
      },
      story: "The pinnacle of Team Baja Bhais engineering. Equipped with an intelligent 40/60 torque-splitting transfer case, live pit-wall RF telemetry, and race-proven 4-wheel lockup braking."
    },
    {
      code: "BB-18",
      number: 18,
      name: "BB-18 APEX 4WD",
      season: "2024 - 2025",
      era: "awd",
      eraLabel: "Intelligent AWD Era",
      image: "assets/cars/bb18.jpg",
      fallbackImage: "assets/cad_wireframe.jpg",
      highlight: "First Generation Full-Time 4WD Prototype with Torsen Differential",
      badge: "PODIUM CONTENDER",
      specs: {
        drivetrain: "Full-Time 4WD Limited Slip",
        engine: "Honda GX430 OHV",
        weight: "178 kg",
        transmission: "JIT CVT 10\" Center Dist.",
        suspension: "Long-Travel Fox Coilovers",
        topSpeed: "49 km/h"
      },
      story: "Breakthrough platform introducing 4-wheel drive packaging into our spaceframe. Successfully conquered the national 4-hour endurance challenge with zero driveline failures."
    },
    {
      code: "BB-17",
      number: 17,
      name: "BB-17 LIGHTNING RWD",
      season: "2023 - 2024",
      era: "awd",
      eraLabel: "Intelligent AWD Era",
      image: "assets/cars/bb17.jpg",
      fallbackImage: "assets/race_action.jpg",
      highlight: "Ultra-Compact 31kg Spaceframe & Lotus Shark Camber Kinematics",
      badge: "SPEED CHAMPION",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD Spool)",
        engine: "Briggs & Stratton / Honda Spec",
        weight: "165 kg (Featherweight)",
        transmission: "Custom Centrifugal CVT",
        suspension: "Unequal Length Double Wishbone",
        topSpeed: "52 km/h"
      },
      story: "Optimized for raw acceleration and dynamic maneuverability. Set the fastest PSG Tech 100m dirt sprint record thanks to its extreme weight reduction."
    },
    {
      code: "BB-16",
      number: 16,
      name: "BB-16 TITAN X",
      season: "2022 - 2023",
      era: "awd",
      eraLabel: "Intelligent AWD Era",
      image: "assets/cars/bb16.jpg",
      fallbackImage: "assets/workshop_weld.jpg",
      highlight: "Dual-Circuit Hydraulic Wilwood Balance Bar & Carbon-Kevlar Belly Pan",
      badge: "ENDURANCE VETERAN",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs Model 19 Single Cylinder",
        weight: "174 kg",
        transmission: "Gaged Engineering / JIT CVT",
        suspension: "Independent Multi-Link Rear",
        topSpeed: "48 km/h"
      },
      story: "Engineered specifically to withstand brutal rock crawler stages with zero chassis deflection and maximum driver cockpit ergonomics."
    },
    {
      code: "BB-15",
      number: 15,
      name: "BB-15 PHOENIX",
      season: "2021 - 2022",
      era: "awd",
      eraLabel: "Intelligent AWD Era",
      image: "assets/cars/bb15.jpg",
      fallbackImage: "assets/hero_buggy.jpg",
      highlight: "Aerodynamic Side Pods & Baffled Anti-Starvation Fuel Cell",
      badge: "DESIGN EXCELLENCE",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "10 HP SAE Baja Spec Engine",
        weight: "179 kg",
        transmission: "CVT with 36° Progressive Cam",
        suspension: "Double A-Arm Nitrogen Dampers",
        topSpeed: "48 km/h"
      },
      story: "First vehicle to feature carbon-fiber reinforced polymer side cooling ducts that reduced CVT belt temperature by over 22°C during high-heat endurance stints."
    },
    {
      code: "BB-14",
      number: 14,
      name: "BB-14 MONOCOQUE HYBRID",
      season: "2020 - 2021",
      era: "cvt",
      eraLabel: "CVT & Dynamics Era",
      image: "assets/cars/bb14.jpg",
      fallbackImage: "assets/cad_wireframe.jpg",
      highlight: "CNC 6061-T6 Billet Uprights & Ansys FEA High-Torsion Bulkhead",
      badge: "CAD INNOVATION",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs 305cc OHV Engine",
        weight: "182 kg",
        transmission: "Precision JIT 10\" CVT",
        suspension: "Custom Double Wishbone",
        topSpeed: "47 km/h"
      },
      story: "Pioneered CNC billet aluminum suspension uprights, shaving 4.5kg of unsprung rotational mass while doubling bearing load capacity."
    },
    {
      code: "BB-13",
      number: 13,
      name: "BB-13 TORQUE MATRIX",
      season: "2019 - 2020",
      era: "cvt",
      eraLabel: "CVT & Dynamics Era",
      image: "assets/cars/bb13.jpg",
      fallbackImage: "assets/race_action.jpg",
      highlight: "Custom Progressive Spring Weights with 3.85:1 Low-End Ratio",
      badge: "SLED PULL WINNER",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs & Stratton Vanguard 10HP",
        weight: "185 kg",
        transmission: "JIT Industrial CVT System",
        suspension: "Dual Rate Coilovers",
        topSpeed: "46 km/h"
      },
      story: "Engineered specifically for steep hill-climb and sled-pull dynamic events, featuring explosive low-end continuous torque multiplication."
    },
    {
      code: "BB-12",
      number: 12,
      name: "BB-12 DIRT VIPER",
      season: "2018 - 2019",
      era: "cvt",
      eraLabel: "CVT & Dynamics Era",
      image: "assets/cars/bb12.jpg",
      fallbackImage: "assets/workshop_weld.jpg",
      highlight: "Ventilated Slotted Laser Discs & 4-Wheel Simultaneous Lockup",
      badge: "SAFETY EXCELLENCE",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs 10HP Single Cylinder",
        weight: "188 kg",
        transmission: "CVT Primary/Secondary Tuned",
        suspension: "Long Travel Front Double A-Arm",
        topSpeed: "46 km/h"
      },
      story: "Passed mandatory dynamic brake scrutineering on the very first attempt with a class-leading 4.1m stopping distance on wet silt."
    },
    {
      code: "BB-11",
      number: 11,
      name: "BB-11 KINETIC STORM",
      season: "2017 - 2018",
      era: "cvt",
      eraLabel: "CVT & Dynamics Era",
      image: "assets/cars/bb11.jpg",
      fallbackImage: "assets/hero_buggy.jpg",
      highlight: "Zero Bump-Steer Steering Kinematics & Aircraft-Grade Ball Joints",
      badge: "MANEUVERABILITY KING",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs & Stratton OHV 305cc",
        weight: "192 kg",
        transmission: "Continuously Variable Transmission",
        suspension: "Unequal Wishbone Kinematics",
        topSpeed: "45 km/h"
      },
      story: "Dominated the technical obstacle slalom and rock-crawl maneuverability course with a record turning radius of just 2.4 meters."
    },
    {
      code: "BB-10",
      number: 10,
      name: "BB-10 DECADE EDITION",
      season: "2016 - 2017",
      era: "cvt",
      eraLabel: "CVT & Dynamics Era",
      image: "assets/cars/bb10.jpg",
      fallbackImage: "assets/cad_wireframe.jpg",
      highlight: "10th Anniversary Buggy with Integrated Quick-Disconnect Anti-Roll Bar",
      badge: "MILESTONE BUILD",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs 10HP Engine",
        weight: "195 kg",
        transmission: "Custom Belt Drive CVT",
        suspension: "Dual A-Arm Front / Trailing Rear",
        topSpeed: "45 km/h"
      },
      story: "Celebrated 10 years of PSG Tech Baja heritage by finishing top 10 overall in national endurance racing."
    },
    {
      code: "BB-09",
      number: 9,
      name: "BB-09 TRAIL HAWK",
      season: "2015 - 2016",
      era: "cvt",
      eraLabel: "CVT & Dynamics Era",
      image: "assets/cars/bb09.jpg",
      fallbackImage: "assets/race_action.jpg",
      highlight: "In-House Aluminum Steering Rack & Center-Steer Geometry",
      badge: "AGILITY PROTO",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs & Stratton 305cc",
        weight: "198 kg",
        transmission: "CVT with Custom Secondary Spring",
        suspension: "Double Wishbone Suspension",
        topSpeed: "44 km/h"
      },
      story: "Introduced our first custom machined rack-and-pinion steering gearbox, reducing driver arm fatigue by 40% over 4 hours."
    },
    {
      code: "BB-08",
      number: 8,
      name: "BB-08 ENDURO BEAST",
      season: "2014 - 2015",
      era: "cvt",
      eraLabel: "CVT & Dynamics Era",
      image: "assets/cars/bb08.jpg",
      fallbackImage: "assets/workshop_weld.jpg",
      highlight: "Hardened EN24 Axle Shafts & Zero DNF Endurance Record",
      badge: "ENDURANCE RELIABILITY",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs 10HP OHV",
        weight: "204 kg",
        transmission: "Custom Tuned CVT",
        suspension: "Long Travel Suspension",
        topSpeed: "44 km/h"
      },
      story: "Survived severe torrential track conditions without a single pitstop failure, proving the durability of our heat-treated drivetrain."
    },
    {
      code: "BB-07",
      number: 7,
      name: "BB-07 CHROMOLY ZERO",
      season: "2013 - 2014",
      era: "genesis",
      eraLabel: "Foundation Era",
      image: "assets/cars/bb07.jpg",
      fallbackImage: "assets/hero_buggy.jpg",
      highlight: "Historic Transition to Full AISI 4130 Seamless Alloy Spaceframe",
      badge: "METALLURGY LEAP",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs & Stratton 10HP",
        weight: "208 kg (Down from 230kg)",
        transmission: "CVT Transmission",
        suspension: "Double A-Arm Suspension",
        topSpeed: "43 km/h"
      },
      story: "The revolutionary shift from structural mild steel to high-strength AISI 4130 chromoly tubing, instantly cutting 22kg from the chassis frame."
    },
    {
      code: "BB-06",
      number: 6,
      name: "BB-06 SPEED PROTO",
      season: "2012 - 2013",
      era: "genesis",
      eraLabel: "Foundation Era",
      image: "assets/cars/bb06.jpg",
      fallbackImage: "assets/cad_wireframe.jpg",
      highlight: "Custom Lightweight Aluminum Pedal Box & Wilwood Master Cylinders",
      badge: "BRAKING MILESTONE",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs 10HP",
        weight: "218 kg",
        transmission: "Continuously Variable Transmission",
        suspension: "A-Arm Front / Semi-Trailing Rear",
        topSpeed: "42 km/h"
      },
      story: "Optimized driver cockpit ergonomics with adjustable seat mounting and quick-release lightweight pedals."
    },
    {
      code: "BB-05",
      number: 5,
      name: "BB-05 MUD SLINGER",
      season: "2011 - 2012",
      era: "genesis",
      eraLabel: "Foundation Era",
      image: "assets/cars/bb05.jpg",
      fallbackImage: "assets/race_action.jpg",
      highlight: "320mm High Ground Clearance & 23\" Maxxis Knobby Off-Road Tires",
      badge: "MUD TERRAIN SPEC",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs & Stratton 10HP",
        weight: "224 kg",
        transmission: "Custom CVT Setup",
        suspension: "High-Clearance A-Arms",
        topSpeed: "42 km/h"
      },
      story: "Built to conquer the notorious deep mud water-troughs at Baja SAE India, effortlessly powering through 2-foot mud trenches."
    },
    {
      code: "BB-04",
      number: 4,
      name: "BB-04 TRAILING ARM",
      season: "2010 - 2011",
      era: "genesis",
      eraLabel: "Foundation Era",
      image: "assets/cars/bb04.jpg",
      fallbackImage: "assets/workshop_weld.jpg",
      highlight: "First Multi-Link Independent Rear Trailing-Arm Architecture",
      badge: "SUSPENSION BREAKTHROUGH",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs 10HP Single Cylinder",
        weight: "230 kg",
        transmission: "Centrifugal Belt Drive",
        suspension: "Independent Trailing Arm Rear",
        topSpeed: "40 km/h"
      },
      story: "Replaced the solid live rear axle with our first fully independent trailing-arm rear suspension, drastically improving high-speed corner stability."
    },
    {
      code: "BB-03",
      number: 3,
      name: "BB-03 REDUCTION X",
      season: "2009 - 2010",
      era: "genesis",
      eraLabel: "Foundation Era",
      image: "assets/cars/bb03.jpg",
      fallbackImage: "assets/hero_buggy.jpg",
      highlight: "In-House Precision Spur Gearbox Two-Stage Reduction Box",
      badge: "POWERTRAIN ROOTS",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs 10HP",
        weight: "238 kg",
        transmission: "Custom Two-Stage Reduction Gearbox",
        suspension: "Dual Wishbone Front",
        topSpeed: "40 km/h"
      },
      story: "PSG Tech production engineers designed and cut custom spur gear reduction sets in the campus workshop, proving mechanical manufacturing depth."
    },
    {
      code: "BB-02",
      number: 2,
      name: "BB-02 NATIONAL ROOKIE",
      season: "2008 - 2009",
      era: "genesis",
      eraLabel: "Foundation Era",
      image: "assets/cars/bb02.jpg",
      fallbackImage: "assets/cad_wireframe.jpg",
      highlight: "First Official Paddock Appearance & Full Scrutineering Clearance",
      badge: "COMPETITION DEBUT",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs & Stratton 10HP Spec",
        weight: "246 kg",
        transmission: "Manual Clutch / Reduction Chain",
        suspension: "Early Double Wishbone",
        topSpeed: "38 km/h"
      },
      story: "The first PSG Tech machine to clear all technical scrutineering inspection gates and compete wheel-to-wheel on the national race track."
    },
    {
      code: "BB-01",
      number: 1,
      name: "BB-01 THE GENESIS BUGGY",
      season: "2007 - 2008",
      era: "genesis",
      eraLabel: "Foundation Era",
      image: "assets/cars/bb01.jpg",
      fallbackImage: "assets/workshop_weld.jpg",
      highlight: "The Legendary Prototype That Started the PSG Tech Motorsport Dynasty",
      badge: "THE FOUNDATION",
      specs: {
        drivetrain: "Rear Wheel Drive (RWD)",
        engine: "Briggs & Stratton 10HP Engine",
        weight: "258 kg (Pioneer Frame)",
        transmission: "Direct Chain Drive & Centrifugal Clutch",
        suspension: "Pioneer Double A-Arm",
        topSpeed: "36 km/h"
      },
      story: "Where it all began. Built with raw passion and relentless engineering grit by founding PSG Tech students, igniting 19 generations of off-road supremacy."
    }
  ],

  liveGarage: {
    progress: 88,
    season: "2025-2026 Vehicle Development",
    milestones: [
      { name: "Chassis Concept & 3D CAD Finalization", done: true, date: "Completed" },
      { name: "Ansys FEA Impact & Torsional Rigidity Validation", done: true, date: "Completed" },
      { name: "AISI 4130 Tube Notching & Jig Fixturing", done: true, date: "Completed" },
      { name: "Chassis Precision TIG Welding & Stress Relief", done: true, date: "Completed" },
      { name: "Custom 7075-T6 AWD Transfer Case Machining", done: true, date: "Completed" },
      { name: "JIT CVT Centrifugal Weights & Spring Tuning", done: true, date: "Completed" },
      { name: "Suspension Uprights & Double Wishbone Assembly", done: true, date: "Completed" },
      { name: "DAQ Telemetry Harness & CAN-Bus Sensor Setup", done: true, date: "In Progress" },
      { name: "Final Shakedown & High-G Endurance Torture Run", done: false, date: "Upcoming" }
    ]
  },

  teamMembers: [
    {
      name: "Maniaatheessh",
      role: "Team Captain",
      dept: "leadership",
      discipline: "Automobile Engineering, PSG Tech",
      quote: "Leading Team Baja Bhais to push the boundaries of off-road endurance and engineering supremacy.",
      image: "assets/workshop_weld.jpg"
    },
    {
      name: "Yashwanth GP",
      role: "Vice Captain",
      dept: "leadership",
      discipline: "Mechanical Engineering, PSG Tech",
      quote: "Strategic execution and meticulous preparation transform student prototypes into championship contenders.",
      image: "assets/cad_wireframe.jpg"
    },
    {
      name: "Hariharan S",
      role: "Powertrain Lead",
      dept: "powertrain",
      discipline: "Automobile Engineering, PSG Tech",
      quote: "Extracting maximum low-end torque and seamless CVT continuous power delivery for brutal incline climbs.",
      image: "assets/hero_buggy.jpg"
    },
    {
      name: "Sujeet VS",
      role: "Vehicle Dynamics Lead",
      dept: "dynamics",
      discipline: "Mechanical Engineering, PSG Tech",
      quote: "Mastering 250mm wheel travel and dynamic camber curves to glide over boulders and berms.",
      image: "assets/race_action.jpg"
    },
    {
      name: "Manimaaran",
      role: "Brakes Lead",
      dept: "brakes",
      discipline: "Mechanical Engineering, PSG Tech",
      quote: "Precision hydraulic dual-circuit master cylinder setup ensuring instant 4-wheel lockup on dirt.",
      image: "assets/cad_wireframe.jpg"
    },
    {
      name: "Vishnu Vardhan",
      role: "Rollcage Lead",
      dept: "rollcage",
      discipline: "Production Engineering, PSG Tech",
      quote: "AISI 4130 seamless Chromoly spaceframe welded with zero-defect TIG precision and 3.2x safety factor.",
      image: "assets/workshop_weld.jpg"
    },
    {
      name: "Jaishwin Raj",
      role: "Team Manager",
      dept: "operations",
      discipline: "Production Engineering, PSG Tech",
      quote: "Synchronizing operations, logistics, sponsorships, and technical delivery from garage to grid.",
      image: "assets/team_real.jpg"
    }
  ],

  currentSponsors: [
    {
      name: "Bull Machines Pvt Ltd",
      logo: "assets/sponsor_bull.png",
      category: "Heavy Industrial & Machinery Partner",
      description: "Pioneers in robust industrial and earth-moving machinery, powering heavy-duty engineering solutions.",
      website: "#"
    },
    {
      name: "Sree Tulsi TVS",
      logo: "assets/sponsor_tvstulsi.png",
      category: "Automotive & Mobility Partner",
      description: "Premier two-wheeler and automotive sales, service, and high-performance mobility partner.",
      website: "#"
    },
    {
      name: "Salem Mines",
      logo: "assets/sponsor_salemmines.png",
      category: "Mining & Resource Partner",
      description: "Leading mineral excavation, crushing, and raw materials infrastructure specialist.",
      website: "#"
    },
    {
      name: "KK Constructions",
      logo: "assets/sponsor_kkc.png",
      category: "Infrastructure & Power Partner",
      description: "Specialized in high-voltage electrical substation and heavy power infrastructure development.",
      website: "#"
    }
  ],

  sponsorshipTiers: [
    {
      name: "TITLE PARTNER",
      tier: "tier-title",
      badge: "MAXIMUM EXPOSURE",
      amount: "₹3,00,000+",
      benefits: [
        "Exclusive Car Livery Prime Branding (Hood & Side Panels)",
        "Team Title Integration: 'Team Baja Bhais powered by [Your Brand]'",
        "Prominent Driver Racing Suit & Crew Uniform Logo Placement",
        "Exclusive Paddock Hospitality & VIP Pit Access at National Competitions",
        "Direct Recruitment Access to Top 1% PSG Tech Engineers (Priority Resume Book)",
        "Dedicated Multi-Platform Social Media & Video PR Campaign (50k+ Reach)"
      ],
      ctaText: "Become Title Partner"
    },
    {
      name: "PLATINUM PARTNER",
      tier: "tier-platinum",
      badge: "HIGH VISIBILITY",
      amount: "₹1,50,000+",
      benefits: [
        "Major Buggy Lateral Body Panel Branding",
        "Team T-Shirts & Workshop Pit Banner Placement",
        "Recruitment Access & Direct Campus Student Interaction",
        "Featured Spotlight on Official Website & Social Media Channels",
        "Official Certificate of Partnership & Season Commemorative Trophy",
        "Brand Placement on Technical Posters & Engineering Presentations"
      ],
      ctaText: "Join as Platinum Partner"
    },
    {
      name: "GOLD PARTNER",
      tier: "tier-gold",
      badge: "COMMUNITY ALLIANCE",
      amount: "₹75,000+",
      benefits: [
        "Suspension A-Arm & Rollcage Branding",
        "Website Sponsor Grid with Direct Link to Your Company",
        "Campus Exhibition & Auto-Expo Showcase Visibility",
        "Student Resume Database Access for Automotive Roles",
        "Social Media Endorsements & Race Day Shoutouts"
      ],
      ctaText: "Join as Gold Partner"
    },
    {
      name: "TECHNICAL PARTNER",
      tier: "tier-technical",
      badge: "PARTS & HARDWARE",
      amount: "In-Kind / Material",
      benefits: [
        "Component Specific Branding (e.g. 'Drivetrain Engineered with [Brand]')",
        "Joint Technical Whitepaper & Case Study Documentation",
        "Website Technical Showcase Spotlight",
        "Real-World Stress Testing & Torture Trial Feedback Reports",
        "Official Engineering Collaboration Credit"
      ],
      ctaText: "Provide Technical Support"
    }
  ],

  mediaGallery: [
    {
      title: "Team Baja Bhais Real Buggy Flagship",
      category: "vehicle",
      image: "assets/hero_buggy.jpg",
      tag: "REAL VEHICLE BUILD"
    },
    {
      title: "Team Engineers with Race Buggy",
      category: "team",
      image: "assets/team_real.jpg",
      tag: "PSG TECH MOTORSPORT CREW"
    },
    {
      title: "Full Buggy Profile & Suspension",
      category: "vehicle",
      image: "assets/hero_car_real.jpg",
      tag: "TRACK READY"
    },
    {
      title: "Suspension Geometry & Front Angle",
      category: "engineering",
      image: "assets/cad_wireframe.jpg",
      tag: "DOUBLE WISHBONE"
    },
    {
      title: "Chassis Fabrication in Campus Workshop",
      category: "workshop",
      image: "assets/workshop_weld.jpg",
      tag: "PSG TECH WORKSHOP"
    },
    {
      title: "Assembly & Component Integration",
      category: "workshop",
      image: "assets/workshop_real2.jpg",
      tag: "PRECISION ASSEMBLY"
    }
  ]
};

// Expose globally
window.BAJA_DATA = BAJA_DATA;
