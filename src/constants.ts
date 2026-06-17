import { Service, Services, Testimonial, Project, Projectc } from './types';

export const BUSINESS_INFO = {
  name: 'Green Stone Atlantic',
  location: 'Halifax, Nova Scotia',
  phone: '1902-266-9731',
  email: 'greenstonens1@gmail.com',
  address: 'Halifax, NS, Canada',
};
 

 

 

 

export const SERVICESC: Services[] = [
  {
    id: "exterior-treatment",
    slug: "exterior-treatment",
    title: "Luxury Exterior Treatment",
    shortDescription: "More than a quick wash. This is an extensive decontamination treatment designed to safely lift grit and restore brilliance.",
    description: "Experience premium, scratch-free multi-stage exterior decontamination. We safely lift embedded road salt, surface road film, and stubborn organic soot using dense chemical snow foams, dual-bucket methods, and touchless blow dryers to shield your clear coat.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1ecc6f?auto=format&fit=crop&q=80&w=1200",
    features: [
      "pH-Neutral Premium Snow Foam Pre-Soak",
      "Two-Bucket Grid Guard Hand Scrub Safety",
      "Decontamination of Wheel Barrels & Brake Calipers",
      "Deep Tire Dressing with Non-Fling Wet Gloss",
      "High-Velocity Filtered Air Blow Dry Finish",
    ],
    benefits: [
      "Reclaims deep original showroom depth and gloss",
      "Prevents micro-scratches, wash swirls, and halo marks",
      "Safely removes aggressive and corrosive industrial fallouts",
      "Extends the life of underlying wax or ceramic coatings",
    ],
    process: [
      { step: "Inspection", description: "Evaluating paint finishes, depth levels, and surface grit density." },
      { step: "Snow Foam", description: "Lifting stubborn organic matter without paint friction." },
      { step: "Decontamination", description: "Removing bonded iron particles from brake dust and environment." },
      { step: "Protection", description: "Sealing the coat under a micro-layer glass sealant." },
    ],
    faqs: [
      { question: "How often should my vehicle get an exterior treatment?", answer: "We recommend this comprehensive cleaning every 2 to 4 weeks to maintain paint integrity in coastal climates." },
      { question: "Do you clean the door jambs?", answer: "Yes, all door sill channels and trunk drain paths are wiped clean and protected." },
      { question: "Is your washing method safe for matte wraps?", answer: "Yes, our pH-balanced foaming agents and wash techniques are fully approved for satin or matte finishes." },
      { question: "Do you carry your own water source for this service?", answer: "Yes, our mobile rigs are completely self-contained. We bring demineralized spot-free pure water and silent generator power." },
    ],
  },
  {
    id: "interior-restoration",
    slug: "interior-restoration",
    title: "Aseptic Cabin Restoration",
    shortDescription: "Surgical-grade cabin sanitization and deep restorative conditioning for fine interiors.",
    description: "Complete cabin restoration utilizing high-temperature dry vapor steam. We sanitize deep HVAC ducts, revive dry leather upholstery, and extract heavy carpet stains without harsh chemical perfumes.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Deep HEPA extraction of carpets & headliner",
      "Dry vapor steam cleaning of vents & consoles",
      "pH-safe leather cleansing & conditioning",
      "Enzymatic bacterial stain breakdown",
      "Optical glass clarification",
    ],
    benefits: [
      "Neutralizes 99.9% of cabin allergens and bacteria",
      "Erases odor-causing mold spores and pet dander",
      "Restores leathers to a supple, non-greasy factory feel",
      "Enhances long-term material preservation",
    ],
    process: [
      { step: "Purge", description: "Extracting loose dust and grit from deep tracks and fibers." },
      { step: "Steam Disinfection", description: "Deploying dry steam at 320°F to unlock stubborn grease and kill microbes." },
      { step: "Conditioning", description: "Feeding and shielding premium leather hide undercoating." },
      { step: "Clarification", description: "Polishing screens, instrument clusters, and glass surfaces." },
    ],
    faqs: [
      { question: "Will my seats be wet after the extraction?", answer: "We use professional-grade low-moisture dry steam extractors so seating fabrics are dry in under 45 minutes." },
      { question: "Are your products safe for people with chemical sensitivities?", answer: "Yes. We avoid strong artificial scents and rely on organic plant-derived cleaner bases and pure steam." },
      { question: "Can you get rid of heavy tobacco odors?", answer: "Yes, our intensive steaming and molecular odor-neutralizing procedures permanently bind and drop deep odor components." },
      { question: "Will steam damage delicate dashboard electronics?", answer: "Never. Our specialists are highly trained to control moisture and distance, working carefully around delicate LCD screen seals and gauges." },
    ],
  },
  {
    id: "paint-correction",
    slug: "paint-correction",
    title: "Multi-Stage Paint Correction",
    shortDescription: "Artisanal compound leveling restoring absolute deep reflection and light saturation.",
    description: "Banish up to 90% of spiderweb swirls, buffer trails, and chemical rain marks. We check your clear coat with digital depth indicators before deploying calibrated compound steps to restore absolute optical clarity.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Digital clear-coat depth profiling",
      "Dual-action machine micro-compounding",
      "Fine-cutting paint leveling polish",
      "Jeweler-grade finish refinement",
      "IPA grease-strip prep wipe",
    ],
    benefits: [
      "Creates a mirror-like fluid glossy paint surface",
      "Removes stubborn scratches and clear-coat fogging",
      "Increases asset marketplace valuation significantly",
      "Establishes a perfect base for nano-coatings",
    ],
    process: [
      { step: "Depth Check", description: "Taking non-destructive ultrasonic measurements of clear coat thicknesses." },
      { step: "Correction Cut", description: "Removing micro-scratches using precise compound grits." },
      { step: "Refining Polish", description: "Bringing out maximum light reflectivity and high-gloss depth." },
      { step: "Panel Cleansing", description: "Stripping polishing lubricants for bare clear-coat inspections." },
    ],
    faqs: [
      { question: "How much clear coat is removed?", answer: "We remove absolute micro-layers (typically 2-4 microns), leaving over 95% of your clear coat fully intact." },
      { question: "Does this process scratch or ruin my paint clear coat?", answer: "No. We analyze paint with digital depth readers to map safe work zones, ensuring sufficient coating remains fully protected." },
      { question: "Can you correct deep scratches that go down to the bare metal?", answer: "Scratches that catch your fingernail require custom touch-up painting, but we can round off the edges to make them significantly less visible." },
      { question: "Why is paint correction necessary before ceramic applications?", answer: "Ceramic layers seal paint under a glass shell. Any swirl marks, oxidation, or haziness not corrected will be locked underneath permanently." },
    ],
  },
  {
    id: "ceramic-protection",
    slug: "ceramic-protection",
    title: "9H Nano Ceramic Glass Armor",
    shortDescription: "Ultra-durable, hydrophobic liquid glass shield protecting your vehicle up to 3 years.",
    description: "Anchor ultimate scratch resistance in place. Our premium liquid SiO2 quartz glass formula chemically coordinates and cross-links with your clear coat to protect against sun etching, calcium spots, and road salts.",
    image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Multi-year covalent glass-coat bonding",
      "Astonishing water sheeting and self-cleaning attributes",
      "Resistance to bird acid and harsh road chemicals",
      "Bespoke infrared lamp heat curing",
    ],
    benefits: [
      "Dirt washes off with a simple high-pressure stream",
      "Locks in deep permanent mirror gloss that never washes off",
      "Highly shields original paint from yellowing solar radiation",
      "Saves hours of detailing labor in routine washes",
    ],
    process: [
      { step: "Pre-Preparation", description: "Decontaminating and clarifying paint texture." },
      { step: "Covalent Buffing", description: "Surgical application of liquid SiO2 formulas in horizontal templates." },
      { step: "Flash Leveling", description: "Allowing the coat to crystallize support and wiping high-spots level." },
      { step: "Infrared Bake", description: "Subjecting panels to short-wave infrared heat to seal the crystal grid." },
    ],
    faqs: [
      { question: "How do I care for my vehicle after a ceramic coating?", answer: "Perform simple multi-bucket hand washes. Avoid automatic drive-through car washes with spinning abrasive brushes." },
      { question: "Does a ceramic coat protect from rock chips?", answer: "No, ceramic armor does not defend against high-velocity highway debris. Only Paint Protection Film (PPF) does." },
      { question: "How long must the ceramic coat stay dry after installation?", answer: "We recommend letting the glass shield seal for at least 24 hours under our temperature control." },
      { question: "How long is the active lifespan of the protection?", answer: "Our signature double-layer coat provides continuous paint protection, extreme slickness, and water sheeting for up to 3 years with proper care." },
    ],
  },
  {
    id: "alloy-shield",
    slug: "alloy-shield",
    title: "Alloy Shield & Windshield Armor",
    shortDescription: "Surgical alloy brake dust defense and hydrophobic windshield glass sealing.",
    description: "Extend protection to high-wear contact zones. Wheels face abusive heat and brake dust, while glass requires maximum vision clarity. We seal wheels under premium temp-graded coatings and windshields with water-shedding sealants.",
    image: "https://images.unsplash.com/photo-1611245801311-6677f981ddb5?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Acid-free caliper & barrel iron release spray",
      "Wheel-face hand polishing correction",
      "Extreme-temperature alloy ceramic sealing",
      "Claying and clarifying of windshield panels",
      "Hydrophobic rainwater shield coating",
    ],
    benefits: [
      "Prevents metallic brake dust from pit-corroding alloy surfaces",
      "Dramatically improves heavy storm driver visibility",
      "Drastically decreases wiper blade drag and chatter noise",
      "Allows wheels to be cleaned with basic hose output",
    ],
    process: [
      { step: "Release Wash", description: "Removing thick sintered carbon brake dust from caliper gaps." },
      { step: "Glass Prep", description: "Polishing windshield glass to extract trapped mineral scale." },
      { step: "Nano Coating", description: "Applying a specialized temperature-graded seal onto rim profiles." },
      { step: "Buffing Raincoat", description: "Polishing an ultra-slick rain repelling coating over glass coordinates." },
    ],
    faqs: [
      { question: "How long does the glass repellent benefit last?", answer: "Our professional windshield treatment maintains active water-sheeting for 6 to 9 months." },
      { question: "Will this prevent brake dust build-up entirely?", answer: "While dust will still settle on wheels, it will not chemically bind, letting you wash it off with standard water pressure." },
      { question: "Are these coatings safe for powder-coated rims?", answer: "Yes, our formula is neutral and safe on powder-coat, chrome, satin, and machined finishes." },
      { question: "Does the windshield repelling layer create wiper squeak?", answer: "No, as long as your blades are clean and we have polished the glass to remove old grit patterns, the wipers will slip silently." },
    ],
  },
  {
    id: "fleet-concierge",
    slug: "fleet-concierge",
    title: "Corporate Fleet Concierge",
    shortDescription: "Coordinated luxury fleet maintenance programs keeping your brand immaculate.",
    description: "Streamlined mobility agreements for elite business operations, local high-end dealerships, and real estate agencies. We dispatch fully self-contained treatment vans to maintain your assets directly on your campus.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Priority booking scheduling year-round",
      "Self-powered on-site dynamic mobile units",
      "Comprehensive multi-vehicle fleet pricing advantages",
      "Unified single monthly commercial billing portal",
      "Before/after photo and status validation",
    ],
    benefits: [
      "Maintains excellent first-impression corporate image",
      "Preserves the investment of executive transport inventory",
      "Saves employees valuable trip and scheduling times",
      "No water run-off concerns due to dry-mist technology",
    ],
    process: [
      { step: "Set Agreement", description: "Formulating convenient cycles, vehicle counts, and specific package limits." },
      { step: "On-Site Call", description: "Our custom rig arrives equipped with silent generator power and purified water reserves." },
      { step: "Unified Clean", description: "Simultaneously cleaning and dressing all company vehicles." },
      { step: "Digital Report", description: "We send digital work reports and safe key returns instantly." },
    ],
    faqs: [
      { question: "Is there a minimum count of cars to book a route?", answer: "We require a minimum fleet density of 3 vehicles per on-site visit to unlock custom fleet pricing structures." },
      { question: "Can you work inside local parking parkades?", answer: "Yes, our dry mist vapor tools operate safely in indoor parking bays with zero chemical runoff." },
      { question: "Do you offer Net payment terms?", answer: "Yes, we accommodate Net-15 or Net-30 intervals for established corporate accounts." },
      { question: "How do we handle schedule adjustments during severe weather?", answer: "Our fleet manager matches real-time weather forecasts to keep you informed and reschedule seamlessly with minimal disruption." },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'lawn-mowing',
    slug: 'lawn-mowing',
    title: 'Professional Lawn Mowing',
    shortDescription: 'Precision mowing and edge trimming for a golf-course finish.',
    description: 'Our professional lawn mowing service goes beyond just cutting grass. We ensure your lawn is mowed at the correct height for optimal health, with precision trimming around all obstacles and clean, crisp edges along walkways and flower beds.',
    image: '/images/lawn_garden_premium_1778526611803.png',
    features: [
      'Precision mowing at ideal height',
      'String trimming around all edges',
      'Power blowing of all hard surfaces',
      'Regular weekly or bi-weekly schedules',
      'Professional-grade equipment',
    ],
    benefits: [
      'Increased curb appeal',
      'Healthier, thicker grass growth',
      'Weed suppression through optimal height',
      'More free time for your family',
    ],
    process: [
      { step: 'Assessment', description: 'We evaluate your lawn type and current condition.' },
      { step: 'Precision Cut', description: 'Mowing using sharpened blades for clean cuts.' },
      { step: 'Edging & Trimming', description: 'Defining borders and trimming hard-to-reach areas.' },
      { step: 'Cleanup', description: 'Clearing all clippings from driveways and walkways.' },
    ],
    faqs: [
      { question: 'How often should my lawn be mowed?', answer: 'Typically once a week during the peak growing season in Halifax to maintain optimal health.' },
      { question: 'Do you bag the clippings?', answer: 'We prefer mulching as it returns vital nutrients to your soil, but bagging is available upon request for a small disposal fee.' },
      { question: 'What height do you cut the grass at?', answer: 'We generally keep grass at 3 to 3.5 inches. This height promotes deeper root growth and provides shade to the soil, which helps prevent weed seeds from germinating.' },
      { question: 'Do you offer one-time mows or only contracts?', answer: 'We prioritize our regular weekly and bi-weekly clients, but we do accommodate one-time mows depending on our current schedule availability.' },
    ],
  },
  {
    id: 'garden-checkout',
    slug: 'garden-checkout',
    title: 'Garden Checkout & Cleanup',
    shortDescription: 'Complete seasonal refresh for your flower beds and gardens.',
    description: 'Transform your garden with our comprehensive checkout service. We handle everything from weeding and pruning to fresh mulch installation and edge redefining.',
    image: '/images/garden_transformation_luxury_1778526628352.png',
    features: [
      'Thorough weeding and debris removal',
      'Professional shrub and perennial pruning',
      'Natural stone or spade edging',
      'Premium mulch installation',
      'Seasonal planting additions',
    ],
    benefits: [
      'Reduced weed growth',
      'Improved plant health and vigor',
      'Polished, professional garden appearance',
      'Better moisture retention for plants',
    ],
    process: [
      { step: 'Clearing', description: 'Removing weeds, dead plants, and winter debris.' },
      { step: 'Pruning', description: 'Strategic trimming for growth and aesthetics.' },
      { step: 'Edging', description: 'Deep spade edging for clean garden borders.' },
      { step: 'Mulching', description: 'Installing premium dark mulch for a finished look.' },
    ],
    faqs: [
      { question: 'When is the best time for a garden cleanup?', answer: 'Early spring to prepare for the season, and late fall to protect your plants for winter.' },
      { question: 'What type of mulch do you use?', answer: 'We offer various premium options including dark chocolate bark mulch, black dyed mulch, and natural cedar. We help you choose the best fit for your garden’s aesthetic and soil health.' },
      { question: 'Will you remove the old mulch first?', answer: 'In most cases, we rake through the old mulch and remove any large debris or weeds. We then top it with 2-3 inches of fresh mulch to ensure proper moisture retention and weed suppression.' },
      { question: 'Do you provide the plants for the seasonal additions?', answer: 'Yes, we source high-quality plants from local Halifax nurseries that are specifically chosen for their hardiness in the Nova Scotia climate.' },
    ],
  },
  {
    id: 'lawn-fertilization',
    slug: 'lawn-fertilization',
    title: 'Lawn Fertilization & Care',
    shortDescription: 'Customized nutrient programs for a vibrant, green lawn.',
    description: 'Feed your lawn exactly what it needs. Our fertilization programs are tailored to Halifax soil conditions, ensuring long-lasting color and root strength.',
    image: '/images/lawn_garden_premium_1778526611803.png',
    features: [
      'Slow-release granular fertilizers',
      'Soil pH testing and adjustment',
      'Core aeration services',
      'Over-seeding with premium mixes',
    ],
    benefits: [
      'Deep, vibrant green color',
      'Improved drought resistance',
      'Thicker turf that crowds out weeds',
      'Enhanced root development',
    ],
    process: [
      { step: 'Soil Test', description: 'Analyzing nutrient levels and pH.' },
      { step: 'Application', description: 'Even distribution of high-quality nutrients.' },
      { step: 'Watering Guidance', description: 'Personalized instructions for post-application care.' },
    ],
    faqs: [
      { question: 'Is the fertilizer safe for pets?', answer: 'Yes, we use products that are safe for pets and children once the product has settled or been watered in. We always recommend keeping pets off the lawn for 24 hours after application as a precaution.' },
      { question: 'When will I see results from fertilization?', answer: 'You will typically notice a deeper green color within 7-10 days, with overall turf thickness and health improving steadily over the following weeks.' },
      { question: 'Do I need to be home during the application?', answer: 'No, as long as we have access to the lawn areas, we can complete the service and leave a detailed service report on your door or send it via email.' },
      { question: 'What is "Core Aeration" and do I need it?', answer: 'Aeration involves removing small cores of soil to allow air, water, and nutrients to reach the roots. It is highly recommended in Halifax once a year to combat soil compaction from our heavy clay soil.' },
    ],
  },
  {
    id: 'weed-control',
    slug: 'weed-control',
    title: 'Effective Weed Control',
    shortDescription: 'Targeted solutions to keep your lawn and gardens weed-free.',
    description: 'Stop the invasion of dandelions, clover, and crabgrass. Our targeted weed control strategies keep your property looking pristine all season long.',
    image: '/images/lawn_garden_premium_1778526611803.png',
    features: [
      'Broadleaf weed spot treatments',
      'Pre-emergent crabgrass control',
      'Garden bed weed suppression',
      'Organic options available',
    ],
    benefits: [
      'Clean, uniform lawn appearance',
      'Less competition for your grass',
      'Prevents weed spread to neighboring areas',
    ],
    process: [
      { step: 'Identification', description: 'Locating specific weed species.' },
      { step: 'Targeted Treatment', description: 'Applying site-specific controls.' },
      { step: 'Monitoring', description: 'Follow-up checks to ensure kill-rate effectiveness.' },
    ],
    faqs: [
      { question: 'Will weed control kill my grass?', answer: 'No, we use selective controls that target weeds while leaving your turf grass safe.' },
      { question: 'How long before I can walk on the lawn after a treatment?', answer: 'We recommend waiting until the product has completely dried, which usually takes 1-2 hours depending on humidity and wind.' },
      { question: 'What if it rains right after you spray for weeds?', answer: 'Many of our products are rain-fast within an hour. However, if a heavy downpour occurs shortly after application, we will return to re-treat the area at no additional cost if the results are compromised.' },
      { question: 'Are your weed control methods environmentally friendly?', answer: 'We strictly follow Nova Scotia provincial regulations and prioritize the use of eco-responsible products and targeted spot treatments to minimize overall product usage.' },
    ],
  },
  {
    id: 'paver-patio',
    slug: 'paver-patio',
    title: 'Custom Paver Patios',
    shortDescription: 'Luxury outdoor living spaces built with precision masonry.',
    description: 'Extend your living space outdoors with a custom-designed paver patio. We combine artisanal craftsmanship with structural integrity for a lifetime of enjoyment.',
    image: '/images/paver_patio_luxury_1778526573877.png',
    features: [
      'Wide selection of premium stone sizes and colors',
      'Engineered base construction for durability',
      'Permeable and non-permeable options',
      'Integrated fire pits and seating walls',
    ],
    benefits: [
      'Massive increase in property value',
      'Beautiful space for entertaining',
      'Low maintenance outdoor surface',
      'No more muddy feet in the house',
    ],
    process: [
      { step: 'Design', description: 'Concept drawings and material selection.' },
      { step: 'Excavation', description: 'Removing earth and preparing a solid sub-base.' },
      { step: 'Foundation', description: 'Compacting structural gravel and sand.' },
      { step: 'Installation', description: 'Precise stone laying and polymeric sand finishing.' },
    ],
    faqs: [
      { question: 'Will the pavers shift over time?', answer: 'Not with our engineered base. We dig deep to ensure a stable foundation that withstands Halifax winters and freeze-thaw cycles.' },
      { question: 'How long does a typical patio installation take?', answer: 'Most residential patios take between 3 to 7 days to complete, depending on the size, site access, and complexity of the design.' },
      { question: 'Do I need to seal my new pavers?', answer: 'While not mandatory, sealing protects the pavers from stains and helps maintain the color. We recommend waiting one full season before applying a sealer to allow natural efflorescence to work its way out.' },
      { question: 'Can you build a patio over an existing concrete slab?', answer: 'It is possible in some cases, provided the concrete is structurally sound and has proper drainage. However, we usually recommend a full excavation for the best long-term results.' },
    ],
  },
  {
    id: 'retaining-wall',
    slug: 'retaining-wall',
    title: 'Structural Retaining Walls',
    shortDescription: 'Masterfully built walls that add function and elegance to slopes.',
    description: 'Conquer slopes and create usable space with our engineered retaining walls. Built to last and designed to complement your landscape.',
    image: '/images/retaining_wall_modern_1778526590652.png',
    features: [
      'Structural block and natural stone options',
      'Geogrid reinforcement for height and stability',
      'Integrated drainage systems',
      'Tiered garden wall designs',
    ],
    benefits: [
      'Prevention of soil erosion',
      'Creation of flat, usable yard space',
      'Visual architectural interest',
      'Solid structural boundaries',
    ],
    process: [
      { step: 'Engineering', description: 'Calculating load and drainage requirements.' },
      { step: 'Base Trench', description: 'Deep excavation for structural footing.' },
      { step: 'Stacking', description: 'Leveling and securing stone units with proper setback.' },
      { step: 'Backfilling', description: 'Installing drainage stone and filter fabric.' },
    ],
    faqs: [
      { question: 'Do I need a permit for a retaining wall?', answer: 'In many cases in Halifax, walls over a certain height (usually 1 meter) require permits. We handle all compliance, engineering checks, and permit applications for you.' },
      { question: 'How do you ensure the wall doesn’t lean or collapse?', answer: 'We use structural geogrid reinforcement and a deep, compacted gravel footing. Every wall also includes a built-in drainage system to prevent hydrostatic pressure from building up behind the stone.' },
      { question: 'What materials do you recommend for retaining walls?', answer: 'We work with high-density pre-cast concrete blocks for maximum longevity and natural Nova Scotia granite for a traditional, high-end look. We help you choose based on your budget and structural needs.' },
      { question: 'Can you build wood retaining walls?', answer: 'While we can, we strongly recommend stone or concrete units for Halifax’s damp climate. Wood eventually rots, whereas our stone walls are built to last for decades.' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  
   {
      id: "test-1",
      name: "Matthew Vance",
      role: "Asset Collector",
      rating: 5,
      content: "Greenstone Atlantic exceeded every high bar. They detailed my Ferrari 488 paint to a literal mirror glass finish, removing 100% of the minor transport swirls. The mobile unit arrived on-time, fully self-powered, clean, and extremely professional.",
      location: "Ferrari 488 Spider",
    },
    {
      id: "test-2",
      name: "Elizabeth Sterling",
      role: "Marketing Director",
      rating: 5,
      content: "The interior hot vapor steam treatment completely restored my white leather SUV seats after a severe dark coffee spill active stain. It feels, smells, and touches like a brand-new factory-assembled car. Truly marvelous mobile convenience.",
       location: "Mercedes-Benz GLE 53 Coupe",
    },
    {
      id: "test-3",
      name: "David Kincaid",
      role: "Managing Partner",
      rating: 5,
      content: "Flawless corporate service. They detailed our executive fleet of four black SUVs right on-site at our corporate headquarters. Highly synchronized logistics, completely digital invoicing, and stellar finish on every single vehicle.",
       location: "Fleet Executive Escalades",
    },
    {
      id: "test-4",
      name: "William Harrison",
      role: "Architectural Principal",
      rating: 5,
      content: "Simply extraordinary. My vintage DB11 looks deeper and shinier than the raw showroom pickup day. The level of craft and care around delicate leather piping and aluminum vents is unmatched. Greenstone is now my permanent car detailer.",
       location: "Aston Martin DB11",
    },
];
export const PROJECTSC: Projectc[] = [
  {
    id: 'p1',
    title: 'Car Modification',
    category: 'Modification',
    beforeImage: '/images/modi1.jpg',
    afterImage: '/images/modi2.webp',
    description: 'Transforming normal cars into Beautiful modern modification',
  },
  {
    id: 'p2',
    title: 'Car Detailing',
    category: 'Modification',
    beforeImage: '/images/before.jpg',
    afterImage: '/images/after.webp',
    description: 'Professional Car Detailing for a Spotless Finish',
  },
];


export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'House Makeover',
    category: 'Hardscaping',
    beforeImage: '/vdo1.mp4',
    afterImage: '/vdo2.mp4',
    description: 'Transforming Outdoor Spaces Into Beautiful Living Areas',
  },
  {
    id: 'p2',
    title: 'Sod Installation',
    category: 'Hardscaping',
    beforeImage: '/vdo3.mp4',
    afterImage: '/vdo4.mp4',
    description: 'Fast, Reliable Sod Installation for a Beautiful Lawn',
  },
];

export const STATS = [
  { label: 'Years Experience', value: '12+' },
  { label: 'Satisfied Clients', value: '500+' },
  { label: 'Projects Completed', value: '1.2k' },
  { label: 'Stone Laid (Sq ft)', value: '50k' },
];
