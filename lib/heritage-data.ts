export interface ContinuityProfile {
  knowledgeHoldersCount: number; // e.g. 14 documented knowledge holders
  youngPractitionersCount: number; // e.g. 4 young learners
  communitiesCount: number; // e.g. 3 villages
  lastDocumented: string; // e.g. "March 2026"
  learningAvailable: boolean; // Yes / No
  knowledgeTransferStatus: 'Active Mentorship' | 'Fragmented Transmission' | 'Critical Interruption';
  riskFactors: string[];
  preservationActionNeeded: string;
}

export interface LearningStep {
  stepNumber: number;
  title: string;
  duration: string;
  description: string;
  traditionalMethod: string;
}

export interface HeritageEntry {
  id: string;
  slug: string;
  name: string;
  category: 'farming' | 'crafts' | 'arts' | 'folklore' | 'food' | 'indigenous' | 'festivals' | 'village';
  categoryLabel: string;
  state: string;
  district: string;
  village: string;
  shortDescription: string;
  fullDescription: string;
  history: string;
  traditionalPractice: string;
  materialsUsed: string[];
  culturalSignificance: string;
  associatedCommunities: string;
  currentChallenges: string;
  preservationStatus: 'thriving' | 'declining' | 'at_risk' | 'endangered';
  statusLabel: string;
  latitude: number;
  longitude: number;
  image: string;
  contributor: string;
  verificationStatus: 'Pending Review' | 'Under Review' | 'Community Verified' | 'Prototype / Demo Entry';
  knowledgeJourney: {
    knowledgeHolder: string;
    documentation: string;
    verification: string;
    learningModule: string;
    youngLearner: string;
    futurePractitioner: string;
  };
  continuityProfile: ContinuityProfile;
  thenNowComparison: {
    then: string[];
    today: string[];
    preservationOpportunity: string[];
  };
  learningCurriculum?: {
    moduleTitle: string;
    totalSteps: number;
    steps: LearningStep[];
  };
  whyPreserve: string;
  relatedTraditions: string[];
}

export interface KnowledgeKeeper {
  id: string;
  name: string;
  location: string;
  state: string;
  tradition: string;
  skill: string;
  yearsOfExperience: number;
  canTeachOthers: boolean;
  activeLearnersCount: number;
  story: string;
  image: string;
  isDemoProfile: boolean;
}

export interface OralStory {
  id: string;
  title: string;
  contributor: string;
  contributorRole: string;
  location: string;
  state: string;
  category: string;
  duration: string;
  description: string;
  recordedDate: string;
  image: string;
  audioSampleName: string;
  transcript: string;
}

export interface ContributionSubmission {
  id: string;
  contributorName: string;
  email: string;
  state: string;
  district: string;
  village: string;
  contributionType: string;
  heritageName: string;
  whoPractices: string;
  isActivelyPracticed: 'Yes' | 'Partially' | 'No / Barely';
  areYouthLearning: 'Yes' | 'Few' | 'None';
  canTeach: 'Yes' | 'Possibly' | 'No';
  description: string;
  traditionalPractice: string;
  culturalSignificance: string;
  preservationStatus: 'thriving' | 'declining' | 'at_risk' | 'endangered';
  audioVideoLink?: string;
  additionalInfo?: string;
  permissionGranted: boolean;
  status: 'Pending Review' | 'Under Review' | 'Community Verified' | 'Published';
  submittedAt: string;
}

export interface HeritageCategory {
  id: string;
  label: string;
  iconName: string;
  count: string;
  description: string;
}

export const HERITAGE_CATEGORIES: HeritageCategory[] = [
  {
    id: 'farming',
    label: 'Traditional Farming',
    iconName: 'Sprout',
    count: '24 Practices',
    description: 'Indigenous seed preservation, dryland mixed cropping, organic pest repellents, and climate-resilient water harvesting.',
  },
  {
    id: 'crafts',
    label: 'Local Crafts',
    iconName: 'Scissors',
    count: '38 Crafts',
    description: 'Master handloom weaving, terracotta clay vessels, natural fiber ropes, and indigenous metal casting.',
  },
  {
    id: 'arts',
    label: 'Folk Arts & Performance',
    iconName: 'Palette',
    count: '29 Arts',
    description: 'Village storytelling performances, folk music rhythms, ritual wall murals, and theatrical dance epics.',
  },
  {
    id: 'folklore',
    label: 'Folklore & Oral History',
    iconName: 'BookOpen',
    count: '31 Archives',
    description: 'Elder memory chronicles, ecological monsoon folk wisdom, community ballads, and village origin tales.',
  },
  {
    id: 'food',
    label: 'Traditional Food Systems',
    iconName: 'Utensils',
    count: '22 Systems',
    description: 'Sun-dried fermentation, indigenous wild edible greens, seasonal restorative recipes, and clay-pot slow cooking.',
  },
  {
    id: 'indigenous',
    label: 'Indigenous Knowledge',
    iconName: 'Leaf',
    count: '19 Systems',
    description: 'Ethnobotanical medicinal preparations, bamboo hydraulic aqueducts, and weather forecasting from bird flight.',
  },
  {
    id: 'festivals',
    label: 'Festivals & Rituals',
    iconName: 'Sparkles',
    count: '17 Gatherings',
    description: 'Equinox agrarian celebrations, seed exchange gatherings, sacred grove rituals, and river cleanings.',
  },
  {
    id: 'village',
    label: 'Village Architecture',
    iconName: 'Home',
    count: '15 Techniques',
    description: 'Thermally regulating mud-plastered walls, lime-mortar cisterns, timber-frame joinery, and natural ventilation courtyards.',
  },
];

export interface LearningModule {
  id: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  introduction: string;
  keyFacts: string[];
  traditionalProcess: string[];
  culturalSignificance: string;
}

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: 'mod-millet',
    category: 'Traditional Farming',
    readTime: '7 min study',
    title: 'The Navadhanya Mixed Cropping System: Resilience Without Chemicals',
    description: 'How Deccan Plateau farming communities grow nine complementary crops on rainfed red soil without groundwater borewells.',
    introduction: 'In the semi-arid belts of the Deccan plateau, where annual rainfall is uncertain, traditional agrarian communities developed the Navadhanya (Nine Seeds) method. Rather than relying on a vulnerable monoculture of hybrid cash crops, a single dryland acre is partitioned with nine complementary millets, pulses, and oilseeds that shield each other against pest infestations and drought.',
    keyFacts: [
      'Zero synthetic nitrogen required — pulses naturally fix atmospheric nitrogen into the root zone.',
      'Water requirement is 70% lower than wetland hybrid rice or cash sugarcane crops.',
      'Deep root systems of sorghum break hard subsoil pan, aiding rainwater recharge.',
      'Diverse flowering cycles ensure continuous nectar supply for native honeybees.',
    ],
    traditionalProcess: [
      '1. Summer Tilth & Organic Manure: Soil is ploughed following pre-monsoon showers and enriched with sheep penning manure.',
      '2. Seed Germination Blessing: Elder women test seed viability in wet cotton cloths before solar sowing dates.',
      '3. Furrow Sowing: Pearl millet and sorghum are sown along high contours, with pigeon pea along internal furrows and sesame at borders.',
      '4. Weed Guild Stewardship: Wild greens (punarnava, purslane) are harvested as nutritious food rather than killed with herbicides.',
      '5. Communal Thrashing & Seed Granary Storage: Cleaned grains are mixed with dried neem leaves and stored in cow-dung sealed bamboo bins.',
    ],
    culturalSignificance: 'The Navadhanya system represents food sovereignty. In folk traditions, seeds are treated not as commercial commodities or patented property, but as sacred ancestral heritage passed through maternal lineages.',
  },
  {
    id: 'mod-kalamkari',
    category: 'Living Crafts',
    readTime: '9 min study',
    title: 'Natural Pigments & Swarnamukhi Chemistry in Srikalahasti Kalamkari',
    description: 'The organic bio-chemistry of bamboo quill drawing, fermented iron gall, and running river washing.',
    introduction: 'Traditional Kalamkari from Andhra Pradesh is among the oldest textile traditions in the world. Unlike modern synthetic vat prints, authentic Kalamkari relies on pure cotton, buffalo milk mordanting, bamboo pens, and botanical mineral dyes that mature in luster as the fabric ages.',
    keyFacts: [
      'Myrobalan (karakkaya) tannin acts as a natural mordant, preparing the cotton fibers to bond permanently with iron.',
      'The black outline is drawn with kasim—fermented rusted iron nails and jaggery water brewed for 21 days.',
      'The distinctive deep red dye is extracted from madder root (rubia cordifolia) and manjistha bark.',
      'Running river water with natural calcium carbonate is essential to cleanse unbonded tannin without dulling colors.',
    ],
    traditionalProcess: [
      '1. Bleaching & Milk Soak: Raw cotton is treated with cow dung bleaching and immersed in buffalo milk to prevent dye bleeding.',
      '2. Bamboo Pen Crafting: Artisans slice wild river reeds into angled nibs wrapped with raw wool thread reservoirs.',
      '3. Outline Tracing: Master artisans draw freehand mythological and nature scenes using Kasim black mordant.',
      '4. Madder Root Boiling: Fabric is immersed in copper vats with crushed madder roots over tamarind wood embers.',
      '5. River Flow Wash: The finished lengths are floated in the cool shallows of the Swarnamukhi river for three hours.',
    ],
    culturalSignificance: 'Kalamkari was originally an itinerant temple storyteller art. Temple bards rolled out huge painted narrative scrolls under village banyan trees to illustrate sacred songs of ecological balance.',
  },
  {
    id: 'mod-water',
    category: 'Indigenous Engineering',
    readTime: '6 min study',
    title: 'Ahar-Pyne & Baoli: Ancient Gravity Water Architecture',
    description: 'Subterranean stepwells and traditional canal engineering that sustained civilizations through severe droughts.',
    introduction: 'Across Rajasthan, Gujarat, and Bihar, indigenous engineers constructed decentralized gravity networks that harvested every drop of erratic rainfall. From the tiered Baolis (stepwells) of the Thar Desert to the communal Ahar-Pyne flood inundation systems of Bihar, these structures cooled urban microclimates and recharged shallow aquifers.',
    keyFacts: [
      'Thermal insulation: Underground subterranean galleries remain 8°C cooler than scorching surface temperatures.',
      'Ahar-Pyne systems utilize natural terrain contours to divert monsoon torrents into retention reservoirs without electricity.',
      'Lining stone walls with jaggery-lime mortar allows the masonry to breathe while preventing hydraulic leaks.',
      'Community stewardship: Maintenance was traditionally governed by village water councils (Pani Panchayats).',
    ],
    traditionalProcess: [
      '1. Hydrological Surveying: Siting based on subterranean seepage lines, banyan root depths, and indigenous vegetation indicators.',
      '2. Tiered Shaft Excavation: Stepped staircases carved to provide water access regardless of seasonal water table depth.',
      '3. Porous Silt Trapping: Siltation settling ponds allow sediment to drop before clean water fills the primary well.',
      '4. Desi Mortar Application: Slaked lime mixed with ground urad dal, fenugreek, and molasses applied to seal masonry seams.',
    ],
    culturalSignificance: 'Water bodies in traditional India were consecrated as shared maternal commons. Polluting a shared well was considered a grave societal offense, ensuring water conservation across social lines.',
  },
  {
    id: 'mod-rogan',
    category: 'Craft Chemistry',
    readTime: '7 min study',
    title: 'Rogan Art: The Science of Castor Oil Polymeric Gel',
    description: 'An ancient Kutch technique where castor oil is simmered for 48 hours to create an elastic resin trailed without touching cloth.',
    introduction: 'In Nirona village, Kutch, Rogan art represents a centuries-old convergence of organic chemistry and delicate hand drafting. Master artisans boil pure castor oil in outdoor clay hearths until it transforms into a sticky, elastic paste called rogan. Worked in the palm with natural mineral earth pigments, it forms malleable strings that are trailed through the air with a blunt metal stylus onto fabric.',
    keyFacts: [
      'Boiling threshold: The castor oil must be heated for 48 hours until volatile components evaporate, yielding a flexible elastomeric polymer.',
      'Freehand air drafting: The artisan never touches the metal stylus to the fabric; the paint thread is guided aerially with hand agility.',
      'Symmetry transfer: Wet designs are folded over half the cloth to mirror the motif with mathematical precision.',
      'Critically endangered: Only a single surviving master family in Nirona holds the complete compound formulation and technique.',
    ],
    traditionalProcess: [
      '1. Extraction & Boiling: Cold-pressed castor seed oil is simmered outdoors for 48 hours in iron cauldrons over wild scrub embers.',
      '2. Water Quenching: The reduced golden jelly is quenched in cold water to stabilize its gummy resinous viscosity.',
      '3. Color Compounding: Natural earth ochres, indigo, and chalk are hand-ground into palm-sized lumps of rogan.',
      '4. Aerial Penning: A 6-inch blunt brass stylus spins the paste into continuous 0.2mm threads laid onto tussar silk.',
    ],
    culturalSignificance: 'Originally used to adorn wedding skirts, bridal veils (odhnis), and animal trappings for desert pastoralist communities like the Maldharis.',
  },
  {
    id: 'mod-pokkali',
    category: 'Indigenous Agriculture',
    readTime: '5 min study',
    title: 'Pokkali Saline Rice: Agro-Ecological Tidal Rotation',
    description: '2.5-meter tall ancestral saltwater rice cultivated in Kerala backwaters without chemical fertilizers.',
    introduction: 'Pokkali is an ancient organic rice cultivation practice endemic to the saline coastal backwaters of Kerala. During the monsoon (June-October), heavy rains flush saltwater out of the lagoons, allowing farmers to sow flood-tolerant rice seedlings. When salinity rises again after harvest, the fields are turned into organic tiger prawn and fish cultivation.',
    keyFacts: [
      'High salinity tolerance: Genetic traits enable Pokkali stalks to thrive in brackish tidal conditions where standard rice withers.',
      'Zero fertilizer, zero pesticide: Tidal flushing deposits marine silt, and prawn excreta nourishes the subsequent paddy cycle.',
      'GI-Tagged heritage variety with antioxidant-rich red bran and high dietary fiber.',
      'Threatened by climate change, erratic tidal surges, and youth outmigration to urban service sectors.',
    ],
    traditionalProcess: [
      '1. Mound Preparation: Saline mud is scooped into pyramid mounds (pothies) before the monsoon so salts leach out with early rains.',
      '2. Sprouted Broadcast Sowing: Pre-germinated seeds are sown on the tops of mounds, sending roots deep into the mud.',
      '3. Mound Flattening: As the water deepens, mounds are flattened into continuous submerged terraces.',
      '4. Tidal Prawn Inflow: Following panicle harvest in October, sluice gates (madu) are opened for post-larval prawn farming.',
    ],
    culturalSignificance: 'Embodies the cyclical understanding that agricultural food production can regenerate coastal wetlands rather than pollute them.',
  },
  {
    id: 'mod-majuli',
    category: 'Folk Theatre & Sculpture',
    readTime: '8 min study',
    title: 'Majuli Mask Craft: River Silt & Bamboo Armatures',
    description: 'Lightweight sculptural masks made of river bamboo, cow dung clay, and natural pigments for monastic Bhaona theatre.',
    introduction: 'At the Natun Samaguri Satra in Majuli—the world\'s largest river island on the Brahmaputra—monks (Bhakats) have sustained a unique mask-making tradition since the 15th-century Saint Srimanta Sankardeva. Depicting characters from the Ramayana and Bhagavata, these masks range from face-masks (Mukha) to giant 12-foot articulated effigies (Cho Mukha) with moving jaws and eyes.',
    keyFacts: [
      'Sub-kilogram weight: A life-sized demon mask weighs less than 800 grams due to the hollow woven bamboo skeleton.',
      'Antiseptic clay lining: Alluvial Brahmaputra silt blended with cow dung and jute fibers provides structural cohesion and pest resistance.',
      'Articulated mechanical joints: Bamboo hinges operated by hidden strings allow actors to move facial expressions during dance.',
      'Satra monastery apprenticeship: Monks undergo 7 years of monastic discipline to master woodcraft, dance, and liturgical singing.',
    ],
    traditionalProcess: [
      '1. Bamboo Splitting: Jaati bamboo is split into razor-thin strips and woven into a three-dimensional anatomical skeleton.',
      '2. Muslin & Clay Coating: Muslin dipped in fine Brahmaputra river silt mixed with aged cow dung is layered over the armature.',
      '3. Facial Modeling: Delicate noses, fangs, and ears are sculpted from clay paste and sun-dried.',
      '4. Natural Pigment Application: Hingul (vermilion), Harital (yellow arsenic stone), and indigo mixed with tree resin adhesive are applied.',
    ],
    culturalSignificance: 'Transformed complex Vaishnavite philosophical epics into visceral, accessible visual theatre for indigenous agrarian audiences.',
  },
];

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'In traditional Kalamkari textile art, what natural ingredient is used to prevent organic ink from bleeding into the cotton weave?',
    options: [
      'Refined kerosene wax',
      'Fresh buffalo milk and myrobalan nut tannin',
      'Synthetic acrylic primer',
      'Sodium bicarbonate solution',
    ],
    correctAnswer: 1,
    explanation: 'Buffalo milk contains natural fats and proteins that coat the cellulose cotton fibers, preventing the iron-based kasim ink from spreading or feathering beyond the bamboo pen strokes.',
  },
  {
    id: 'q2',
    question: 'Why does the traditional Navadhanya farming system plant nine complementary crops together in a single field?',
    options: [
      'To sell each variety at different metropolitan markets on consecutive days',
      'To create ecological synergy: drought defense, natural nitrogen fixing, and continuous pollinator food',
      'Because colonial agricultural edicts required diverse export parcels',
      'To make mechanized industrial combine harvesters work faster',
    ],
    correctAnswer: 1,
    explanation: 'Navadhanya is an ancient dryland resilience design. Legumes nourish the soil with nitrogen, tall millets block harsh desert winds, and diverse root depths optimize water capture without chemical irrigation.',
  },
  {
    id: 'q3',
    question: 'What is the primary material used by Kondapalli toy artisans that gives the figures their distinctive lightweight and durable quality?',
    options: [
      'Imported industrial polymer foam',
      'Tella Poniki (white sandalwood softwood) and tamarind seed paste',
      'Unfired terracotta river silt',
      'Compressed sugarcane bagasse plastic',
    ],
    correctAnswer: 1,
    explanation: 'Kondapalli toys are carved from Tella Poniki (Givotia rottleriformis), a very light wild softwood found in the Krishna district hills, assembled using boiled tamarind seed paste (makku) and painted with vegetable dyes.',
  },
  {
    id: 'q4',
    question: 'How did ancient Indian stepwell builders (Raj-Mistris) make their stone cisterns waterproof for centuries without cement?',
    options: [
      'By coating walls with bitumen petroleum asphalt',
      'Using a traditional mortar of slaked lime, boiled jaggery (gud), fenugreek (methi), and marble dust',
      'By lining the bedrock with molten lead sheets',
      'Using synthetic epoxy sealants imported via sea routes',
    ],
    correctAnswer: 1,
    explanation: 'Traditional lime mortar slaked over several months and ground with boiled jaggery, fenugreek paste, and wood ash forms a crystalline calcite structure that actually strengthens over decades in contact with water.',
  },
  {
    id: 'q5',
    question: 'In the critically endangered Rogan art of Kutch, how is the drawing stylus used by the master artisan?',
    options: [
      'Pressed firmly against the silk to carve deep grooves into the cloth',
      'Held floating in the air without touching the cloth, guiding a fine thread of boiled castor oil paste',
      'Dipped into commercial acrylic thinners and sprayed through a brass stenciling nozzle',
      'Used as an electric thermal branding iron on cured leather',
    ],
    correctAnswer: 1,
    explanation: 'The Rogan master artisan never touches the blunt stylus to the fabric. The sticky boiled castor paste is drawn out into thin threads in the air and laid gently onto the surface before being mirrored by folding.',
  },
  {
    id: 'q6',
    question: 'How does the Pokkali rice farming system of coastal Kerala sustain zero-fertilizer organic agriculture?',
    options: [
      'By importing chemical fertilizers during high tide',
      'By alternating monsoon rice with dry-season tidal prawn farming whose residues nourish the soil',
      'By burning peat bogs along the backwaters',
      'By planting genetically modified hybrid rice seeds every 3 months',
    ],
    correctAnswer: 1,
    explanation: 'Pokkali relies on a harmonious natural rotation: monsoon rains leach salinity for the tall rice crop, and post-harvest tidal prawn aquaculture deposits rich marine nutrients that fertilize the next cycle without chemicals.',
  },
  {
    id: 'q7',
    question: 'What allows a 12-foot traditional Majuli island theatre mask (Cho Mukha) to remain wearable by an actor?',
    options: [
      'Lightweight fiberglass casting from Kolkata molders',
      'A hollow woven framework of split indigenous bamboo covered with river silt and cow dung',
      'Compressed polystyrene foam carved with heated wire cutters',
      'Hollow cast-aluminum sheeting',
    ],
    correctAnswer: 1,
    explanation: 'Majuli masks are built on a hollow armature of split Jaati bamboo, lined with thin muslin and alluvial Brahmaputra clay-cow dung mix, producing immense sculptural forms weighing less than a kilogram.',
  },
  {
    id: 'q8',
    question: 'What is distinctive about the geometric Pukhoor embroidery practiced by the indigenous Toda community of the Nilgiris?',
    options: [
      'It is done exclusively on synthetic nylon with metallic lurex threads',
      'It is woven from memory without printed stencils, using counted-thread red and black wool on coarse unbleached cotton',
      'It uses computer-programmed sewing machines distributed to tribal collectives',
      'It can only be embroidered during lunar eclipses on raw silk',
    ],
    correctAnswer: 1,
    explanation: 'Toda women create Pukhoor shawls (poothkuly) by counting threads purely from memory without drawn templates, using sacred red and black wool to produce intricate geometric motifs reflecting buffalo horns and stars.',
  },
];

export const HERITAGE_HEALTH_METRICS = {
  documentedTraditions: 154,
  traditionsAtRisk: 42,
  criticallyAtRisk: 16,
  knowledgeKeepers: 94,
  youngLearners: 286,
  learningModules: 56,
  communitiesRepresented: 84,
  preservationStatusBreakdown: [
    { label: 'Thriving', count: 58, percentage: 38, color: '#2e6945', dot: '🟢' },
    { label: 'Declining', count: 54, percentage: 35, color: '#9c711a', dot: '🟡' },
    { label: 'At Risk', count: 26, percentage: 17, color: '#b85b28', dot: '🟠' },
    { label: 'Critically At Risk', count: 16, percentage: 10, color: '#992626', dot: '🔴' },
  ],
};

export const KNOWLEDGE_KEEPERS: KnowledgeKeeper[] = [
  {
    id: 'keeper-1',
    name: 'Lakshmi Devi',
    location: 'Pastapur, Medak District',
    state: 'Telangana',
    tradition: 'Navadhanya Dryland Seed Preservation',
    skill: 'Heirloom Seed Banking & Mother-Earhead Selection',
    yearsOfExperience: 54,
    canTeachOthers: true,
    activeLearnersCount: 16,
    story: 'Has preserved 42 rare indigenous drought-hardy millet and pulse strains without chemical treatment in hand-plastered bamboo granaries.',
    image: '/images/elder_oral_storyteller.jpg',
    isDemoProfile: true,
  },
  {
    id: 'keeper-2',
    name: 'Koteswara Rao',
    location: 'Srikalahasti, Tirupati District',
    state: 'Andhra Pradesh',
    tradition: 'Natural Dye Kalamkari Painting',
    skill: 'Bamboo Kalam Quill Carving & Botanical Mordanting',
    yearsOfExperience: 48,
    canTeachOthers: true,
    activeLearnersCount: 8,
    story: 'Master artisan executing 17-step river water washings, compounding natural vegetable dyes from madder roots, myrobalan nuts, and fermented iron.',
    image: '/images/kalamkari_textile_art.jpg',
    isDemoProfile: true,
  },
  {
    id: 'keeper-3',
    name: 'Babu Lal Meena',
    location: 'Thanagazi, Alwar District',
    state: 'Rajasthan',
    tradition: 'Johad Rainwater Earth Dams',
    skill: 'Desert Catchment Surveying & Dry Earthen Berm Compacting',
    yearsOfExperience: 50,
    canTeachOthers: true,
    activeLearnersCount: 12,
    story: 'Led community shramdaan labor to build crescent earthen dams that revived dried underground aquifers and perennial streams in five villages.',
    image: '/images/indigenous_millet_farm.jpg',
    isDemoProfile: true,
  },
  {
    id: 'keeper-4',
    name: 'Chennamma',
    location: 'Zaheerabad, Sangareddy',
    state: 'Telangana',
    tradition: 'Oral Agricultural Ballads (Panta Patalu)',
    skill: 'Mnemonic Sowing Meters & Seed Calendar Chants',
    yearsOfExperience: 42,
    canTeachOthers: true,
    activeLearnersCount: 14,
    story: 'Chants traditional musical verses that teach farmers the exact row ratios and monsoon weather cues required for companion cropping.',
    image: '/images/elder_oral_storyteller.jpg',
    isDemoProfile: true,
  },
  {
    id: 'keeper-5',
    name: 'Khatri Abdul Gafur',
    location: 'Nirona Village, Kutch District',
    state: 'Gujarat',
    tradition: 'Rogan Castor Gel Painting',
    skill: '48-Hour Castor Reduction & Aerial Brass Stylus Penning',
    yearsOfExperience: 52,
    canTeachOthers: true,
    activeLearnersCount: 6,
    story: 'Eighth-generation master keeping India\'s sole surviving family lineage of boiling castor oil paint alive, training young women from surrounding desert villages.',
    image: '/images/kalamkari_textile_art.jpg',
    isDemoProfile: true,
  },
  {
    id: 'keeper-6',
    name: 'Hemchandra Goswami',
    location: 'Natun Samaguri Satra, Majuli Island',
    state: 'Assam',
    tradition: 'Majuli Vaishnavite Bamboo Masks',
    skill: 'Split Bamboo Structural Weaving & Brahmaputra Clay Sculpting',
    yearsOfExperience: 46,
    canTeachOthers: true,
    activeLearnersCount: 18,
    story: 'Satra monk preserving 500-year-old dynamic devotional mask craft, building articulated effigies that breathe life into classical Assamese Bhaona theatre.',
    image: '/images/kondapalli_wooden_toys.jpg',
    isDemoProfile: true,
  },
  {
    id: 'keeper-7',
    name: 'Ustad Ghulam Hassan',
    location: 'Old City, Srinagar',
    state: 'Jammu & Kashmir',
    tradition: 'Pashmina & Sozni Needlecraft',
    skill: 'Hand-Carved Wooden Loom Weaving & 0.5mm Silk Needle Darning',
    yearsOfExperience: 58,
    canTeachOthers: true,
    activeLearnersCount: 5,
    story: 'Spins fine Changthangi mountain goat fleece onto hand-hewn willow spindles, guiding apprentices through 1,200 hours of single-shawl floral needle embroidery.',
    image: '/images/elder_oral_storyteller.jpg',
    isDemoProfile: true,
  },
  {
    id: 'keeper-8',
    name: 'K. Sivaraman',
    location: 'Kadamakkudy, Ernakulam District',
    state: 'Kerala',
    tradition: 'Pokkali Saline Tidal Agriculture',
    skill: 'Monsoon Sluice Gate Tuning & Brackish Prawn-Paddy Rotation',
    yearsOfExperience: 44,
    canTeachOthers: true,
    activeLearnersCount: 9,
    story: 'Sustains century-old saline wetland stewardship, training young agrarian biology graduates in flood-resistant ancestral seed selection and zero-chemical pest control.',
    image: '/images/indigenous_millet_farm.jpg',
    isDemoProfile: true,
  },
];

export const INITIAL_HERITAGE_ENTRIES: HeritageEntry[] = [
  {
    id: '1',
    slug: 'traditional-millet-dryland-farming',
    name: 'Navadhanya Dryland Millet Farming',
    category: 'farming',
    categoryLabel: 'Traditional Farming',
    state: 'Telangana',
    district: 'Medak & Sangareddy',
    village: 'Pastapur & Zaheerabad',
    shortDescription: 'Nine-seed intercropping system resilient to severe droughts, cultivated organically without groundwater irrigation or synthetic chemicals.',
    fullDescription: 'Navadhanya is an indigenous agricultural system where nine complementary crops—millets, pulses, oilseeds, and vegetables—are sown together in single arid rain-fed fields. The crops mature at different times, replenishing soil nitrogen while guaranteeing food security even in drought years.',
    history: 'Rooted in Deccan plateau farming wisdom developed over 2,000 years to survive unpredictable monsoons. Elder women farmers maintain seed banks passed down as living family heirlooms through matrilineal knowledge lines.',
    traditionalPractice: 'Seeds of Sorghum, Pearl Millet, Foxtail, Finger Millet, red gram, and cowpea are mixed with wood ash and neem powder before sowing with bullock wooden plows upon the first Mrigasira monsoon shower.',
    materialsUsed: ['Heritage desi seeds (non-hybrid)', 'Bullock-drawn wooden plow', 'Neem seed powder & cow dung cake ash', 'Jeevamrutha fermented microbial brew'],
    culturalSignificance: 'Connected to the festival of Bonalu and Sankranti, where the first harvest sheaves are thanked, blessed, and shared equally with field laborers and birds.',
    associatedCommunities: 'Deccan Dalit women farmers networks and indigenous dryland pastoral communities.',
    currentChallenges: 'Market subsidies favoring water-guzzling hybrid rice/cotton and loss of native seed purity due to cross-pollination.',
    preservationStatus: 'at_risk',
    statusLabel: 'At Risk',
    latitude: 17.6805,
    longitude: 77.6148,
    image: '/images/indigenous_millet_farm.jpg',
    contributor: 'Deccan Dryland Seed Keepers (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 28,
      youngPractitionersCount: 9,
      communitiesCount: 6,
      lastDocumented: 'March 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Fragmented Transmission',
      riskFactors: [
        'Elder seed keepers aging without younger full-time apprentices',
        'Hybrid monoculture cash crop market subsidies',
        'Loss of native seed genetic diversity to commercial pest-resistant seeds',
      ],
      preservationActionNeeded: 'Establish youth village seed banks, document maternal selection metrics, and sponsor school farm practicums.',
    },
    thenNowComparison: {
      then: [
        'Every rural home held 9 seed varieties in earthen pots',
        'Sowing guided by collective community field singing',
        'Zero groundwater pumping needed for full harvest yield',
      ],
      today: [
        'Fewer than 15% of village youth recognize heirloom millets',
        'Subsidized borewells drying out the water table',
        'Oral seed chants forgotten in favor of commercial fertilizer schedules',
      ],
      preservationOpportunity: [
        'Record oral selection criteria into mobile digital modules',
        'Connect university agriculture students with village seed mothers',
        'Create farm-to-school decentralized grain purchase circles',
      ],
    },
    learningCurriculum: {
      moduleTitle: 'Indigenous Millet Soil & Seed Stewardship',
      totalSteps: 5,
      steps: [
        {
          stepNumber: 1,
          title: 'Identifying Heirloom Desi Seeds',
          duration: '15 min read',
          description: 'Examining seed hull thickness, natural pest resistance, and drought viability.',
          traditionalMethod: 'Water flotation test and inspecting mother earhead symmetry.',
        },
        {
          stepNumber: 2,
          title: 'Preparing Natural Microbial Dressing',
          duration: '20 min read',
          description: 'Coating seeds with wood ash, cow dung bio-culture, and neem extract.',
          traditionalMethod: 'Hand-rubbing seeds in neem-leaf decanted water before sunrise.',
        },
        {
          stepNumber: 3,
          title: 'Contour Furrowing and 9-Seed Sowing',
          duration: '25 min read',
          description: 'Calculating row distances for deep-taproot pulses vs surface-root millets.',
          traditionalMethod: 'Alternate 3:1 row furrowing following natural water runoff paths.',
        },
        {
          stepNumber: 4,
          title: 'Pest Deterrence via Bio-Fencing',
          duration: '15 min read',
          description: 'Planting perimeter marigold and castor to divert stem-borers.',
          traditionalMethod: 'Yellow border flowers trap pests away from core grain stalks.',
        },
        {
          stepNumber: 5,
          title: 'Seed Storage in Plastered Granaries',
          duration: '20 min read',
          description: 'Long-term storage without synthetic fumigation tablets.',
          traditionalMethod: 'Bamboo woven containers sealed with cow-dung and neem-oil smoke.',
        },
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Elder Women Seed Mothers in Zaheerabad villages',
      documentation: 'Audio-visual recording of maternal seed selection rules',
      verification: 'Peer verified by local community seed cooperative & agronomists',
      learningModule: 'Step-by-step interactive millet cultivation curriculum',
      youngLearner: 'Agricultural apprentice or rural student completes practical module',
      futurePractitioner: 'Active farmer sowing self-saved seeds in dryland village plots',
    },
    whyPreserve: 'Dryland millets consume 70% less water than flooded rice and withstand 45°C heatwaves. Preserving this seed stock is crucial for climate change adaptation.',
    relatedTraditions: ['Zabo Water Harvesting', 'Johad Water Check Dams', 'Baranaja Multi-Cropping'],
  },
  {
    id: '2',
    slug: 'burrakatha-folk-storytelling',
    name: 'Burrakatha Oral Ballad Tradition',
    category: 'folklore',
    categoryLabel: 'Folklore & Stories',
    state: 'Andhra Pradesh & Telangana',
    district: 'Guntur & Warangal',
    village: 'Pedakakani & Kazipet',
    shortDescription: 'Dynamic three-person musical storytelling performance featuring the tambura, brass andharalu bells, and gummeta clay percussion.',
    fullDescription: 'Burrakatha is a traditional narrative theatre from the Telugu-speaking regions. A troupe consists of three performers: the main storyteller flanked by two co-performers who crack witty socio-political jokes, ask philosophical questions, and beat the clay gummeta drum.',
    history: 'Evolved from the older medieval Jangam Katha devotional ballads. In the 20th century, it was used by village freedom fighters to broadcast anti-colonial messages and literacy campaigns.',
    traditionalPractice: 'Performances run for 3 to 4 hours in the village square after sundown, blending high classical verse, folk comedy, village slang, and improvised call-and-response.',
    materialsUsed: ['Tambura string instrument', 'Gummeta clay drum', 'Andharalu brass bells', 'Gajjalu ankle brass bells'],
    culturalSignificance: 'Served as the oral village newspaper, historical archive, and ethical conscience of rural Telugu society.',
    associatedCommunities: 'Jangam and folk minstrel families.',
    currentChallenges: 'Lack of performance stipends and smartphone distraction have forced traditional troupes to take up manual day labor.',
    preservationStatus: 'endangered',
    statusLabel: 'Critically At Risk',
    latitude: 16.3067,
    longitude: 80.4365,
    image: '/images/elder_oral_storyteller.jpg',
    contributor: 'Telugu Folk Art Preservation Society (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 11,
      youngPractitionersCount: 3,
      communitiesCount: 4,
      lastDocumented: 'February 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Critical Interruption',
      riskFactors: [
        'Only 11 elderly troupes remain active across two states',
        'No formal state pension or dedicated school teaching residencies',
        'Oral couplets dying with masters without sound-stage recordings',
      ],
      preservationActionNeeded: 'Establish digital audio voicebanks, provide artist fellowships, and sponsor youth theater workshops.',
    },
    thenNowComparison: {
      then: [
        'Every village festival concluded with all-night Burrakatha',
        'Bards memorized 10,000+ couplets through oral rhyme schemas',
        'Villagers rewarded troupes with grain, cloth, and honor',
      ],
      today: [
        'Fewer than 40 active performers across 2 states',
        'Youth migrate to city service jobs due to lack of livelihoods',
        'Epic narrative verses replaced by short social media video clips',
      ],
      preservationOpportunity: [
        'Capture complete dialect recitations with interactive transcripts',
        'Create open audio modules for drama students and folk bards',
        'Facilitate community-sponsored weekend village residency circles',
      ],
    },
    learningCurriculum: {
      moduleTitle: 'The Triadic Harmony of Burrakatha',
      totalSteps: 4,
      steps: [
        {
          stepNumber: 1,
          title: 'The Three Voices (Kathakudu, Hasya, Rajakiya)',
          duration: '15 min read',
          description: 'Understanding the dynamic between lead singer, comic, and political commentator.',
          traditionalMethod: 'Mastering eye contact and call-and-response with village listeners.',
        },
        {
          stepNumber: 2,
          title: 'Tuning the Tambura and Clay Gummeta',
          duration: '20 min read',
          description: 'Acoustics of baked earthen pitcher percussion and drone tuning.',
          traditionalMethod: 'Applying wet clay paste to drum face to alter resonance pitch.',
        },
        {
          stepNumber: 3,
          title: 'Mnemonic Rhyming and Couplet Cadence',
          duration: '25 min read',
          description: 'Committing multi-hour epic stories to rhythmic oral memory.',
          traditionalMethod: 'Chanting along to internal foot-bell metronomes without text.',
        },
        {
          stepNumber: 4,
          title: 'Audience Engagement & Social Satire',
          duration: '20 min read',
          description: 'Adapting ancient epics to modern village dilemmas and environmental issues.',
          traditionalMethod: 'Improvising humor and ethical queries mid-performance.',
        },
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Master Kathakudu bards in Guntur & Warangal districts',
      documentation: 'High-fidelity audio-video recordings with phonetic transcripts',
      verification: 'Reviewed by oral history scholars and traditional bards council',
      learningModule: 'Vocal projection, cadence, and percussion learning series',
      youngLearner: 'Folk drama student apprenticing under master bard',
      futurePractitioner: 'New generation performing in village festivals and cultural stages',
    },
    whyPreserve: 'Burrakatha holds unwritten centuries of regional social history, ethical parables, and participatory democratic debate that written books omit.',
    relatedTraditions: ['Pandavani Ballads', 'Villu Pattu', 'Baul Songs of Bengal'],
  },
  {
    id: '3',
    slug: 'kalamkari-hand-painted-textiles',
    name: 'Kalamkari Hand-Painted Textiles',
    category: 'crafts',
    categoryLabel: 'Local Crafts',
    state: 'Andhra Pradesh',
    district: 'Tirupati & Krishna',
    village: 'Srikalahasti & Machilipatnam',
    shortDescription: 'Ancient textile art hand-drawn using a sharpened bamboo pen and natural organic dyes derived from plants, roots, and minerals.',
    fullDescription: 'Kalamkari is a centuries-old craft of hand-painting or block-printing cotton fabrics with natural plant dyes. The Srikalahasti style involves using a bamboo "kalam" (pen) dipped in fermented jaggery and iron mordants, depicting epics, nature motifs, and village flora on handspun cloth.',
    history: 'Dating back over 3,000 years, Kalamkari motifs have been discovered in ancient trade relics across Southeast Asia and the Coromandel coast.',
    traditionalPractice: 'The cotton fabric is first treated with raw cow milk and myrobalan seed extract to prevent dyes from smudging. The artisan draws intricate lines freehand with a carved bamboo pen, applying indigo, madder root, pomegranate rind, and alum in up to 17 sequential washing and boiling steps in running river water.',
    materialsUsed: ['Handspun organic cotton', 'Carved bamboo reed kalam', 'Madder root (Manjistha)', 'Indigo leaves', 'Fermented iron rust & jaggery', 'Pomegranate peel', 'Raw cow milk'],
    culturalSignificance: 'Kalamkari was historically used as cloth narrative panels for wandering minstrels, village bards, and temple backdrops, conveying collective wisdom, ecological reverence, and moral tales.',
    associatedCommunities: 'Practiced primarily by traditional artisan families and weaver clusters in Srikalahasti and Pedana in Andhra Pradesh.',
    currentChallenges: 'Competition from cheap screen-printed synthetic copies, loss of river water access essential for natural rinsing, and dwindling youth apprenticeships.',
    preservationStatus: 'declining',
    statusLabel: 'Declining',
    latitude: 13.7498,
    longitude: 79.6984,
    image: '/images/kalamkari_textile_art.jpg',
    contributor: 'Andhra Crafts Guild Archive (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 42,
      youngPractitionersCount: 14,
      communitiesCount: 5,
      lastDocumented: 'January 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Fragmented Transmission',
      riskFactors: [
        'Proliferation of chemical screen-printed counterfeit fabrics sold as handmade',
        'Severe seasonal drying and pollution of the Swarnamukhi river necessary for natural washing',
        'High labor intensity leading young artisans to seek urban factory work',
      ],
      preservationActionNeeded: 'Enforce GI verification labels, protect river washing grounds, and provide artisan fair wages.',
    },
    thenNowComparison: {
      then: [
        'Zero chemical dyes used; 100% compostable and non-toxic to river fish',
        'Artisan families worked together on veranda workshops for months',
        'Cloth purchased directly by patrons and temples at fair value',
      ],
      today: [
        'Synthetic petroleum dyes mimic patterns in 5 minutes via industrial screen printing',
        'Young apprentices dropping out due to low middleman payouts',
        'Riverbanks dammed or polluted with chemical effluents',
      ],
      preservationOpportunity: [
        'Digitally document dye formulations and bamboo kalam carving methods',
        'Create structured apprenticeship matching for design students',
        'Fair-trade direct consumer channels that eliminate exploitative middlemen',
      ],
    },
    learningCurriculum: {
      moduleTitle: 'Botanical Alchemy: 17 Steps of Kalamkari',
      totalSteps: 5,
      steps: [
        {
          stepNumber: 1,
          title: 'Myrobalan & Milk Pre-Treatment',
          duration: '15 min read',
          description: 'Treating handloom cotton with buffalo milk and gallnut extract to prevent capillary bleed.',
          traditionalMethod: 'Soaking and sun-drying cloth on sandbanks for three cycles.',
        },
        {
          stepNumber: 2,
          title: 'Carving and Feeding the Bamboo Kalam',
          duration: '20 min read',
          description: 'Hollowing river reeds and inserting wool felt to hold fermented iron ink.',
          traditionalMethod: 'Beveling reed tip with an oil stone at a 30-degree stroke angle.',
        },
        {
          stepNumber: 3,
          title: 'Fermenting Kasim Iron Black Ink',
          duration: '15 min read',
          description: 'Fermenting rusted iron scraps with palm jaggery and water for 21 days.',
          traditionalMethod: 'Bubbling anaerobic fermentation in earthenware jars buried in sand.',
        },
        {
          stepNumber: 4,
          title: 'Madder Root (Manjistha) Red Boiling',
          duration: '25 min read',
          description: 'Boiling alum-mordanted fabric in copper cauldrons with crushed root bark.',
          traditionalMethod: 'River water boiling over wood fire until rich brick red is achieved.',
        },
        {
          stepNumber: 5,
          title: 'Running River Water Washing',
          duration: '20 min read',
          description: 'Clearing excess dye in fresh river currents without chemical detergents.',
          traditionalMethod: 'Floating cloth against gentle morning river currents.',
        },
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Master Kalamkari artisans in Srikalahasti',
      documentation: 'Formulation ratios, reed tools, and step-by-step video archives',
      verification: 'Verified by Crafts Council and traditional artisan guilds',
      learningModule: 'Comprehensive botanical dye chemistry masterclass',
      youngLearner: 'Textile design apprentice completing hands-on workshop',
      futurePractitioner: 'Independent sustainable craftsperson producing verified handloom art',
    },
    whyPreserve: 'Kalamkari is living botanical chemistry and closed-loop textile production. Losing it means erasing thousands of years of non-polluting herbal science.',
    relatedTraditions: ['Pochampally Ikat', 'Rogan Art of Kutch', 'Ajrakh Block Printing'],
  },
  {
    id: '4',
    slug: 'kondapalli-softwood-craft',
    name: 'Kondapalli Softwood Carving',
    category: 'crafts',
    categoryLabel: 'Local Crafts',
    state: 'Andhra Pradesh',
    district: 'NTR District',
    village: 'Kondapalli',
    shortDescription: 'Handcrafted village toys and divine figurines chiseled from lightweight Tella Poniki wood and finished with organic vegetable paste dyes.',
    fullDescription: 'Kondapalli Bommalu are 400-year-old traditional toys made in the village of Kondapalli near Vijayawada. Artisans carve soft local timber known as Tella Poniki into lifelike figurines of village artisans, bullock carts, harvest dancers, and rural occupations.',
    history: 'Artisans trace their ancestry to Muktharishi, a mythical sage endowed by Lord Shiva with the gift of idol craftsmanship. Historical records show royal patronage from the 16th-century Reddy and Vijayanagara dynasties.',
    traditionalPractice: 'Each limb is carved separately with small chisels and assembled using a sticky paste made from tamarind seeds and sawdust ("Lappam"). The completed figures are lime-washed and hand-painted with fine natural pigments and lacquer finishes.',
    materialsUsed: ['Tella Poniki (Givotia rottleriformis wood)', 'Crushed tamarind seed paste', 'Lime chalk base', 'Vegetable pigments & natural lac'],
    culturalSignificance: 'Integral to the annual Navratri "Bommala Koluvu" (doll display) tradition where grandparents arrange toys to recount folklore and rural heritage to youngsters.',
    associatedCommunities: 'The Arya Kshatriya artisan community residing in the foothills of Kondapalli reserve forest.',
    currentChallenges: 'Acute depletion of Tella Poniki trees due to deforestation and competition from plastic mass-market imported toys.',
    preservationStatus: 'at_risk',
    statusLabel: 'At Risk',
    latitude: 16.6186,
    longitude: 80.5367,
    image: '/images/kondapalli_wooden_toys.jpg',
    contributor: 'Krishna Valley Heritage Trust (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 31,
      youngPractitionersCount: 7,
      communitiesCount: 2,
      lastDocumented: 'March 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Fragmented Transmission',
      riskFactors: [
        'Depletion of protected Tella Poniki soft timber trees in surrounding hills',
        'Flooding of Indian markets with cheap injected-plastic toy imports',
        'Average artisan age is over 58 years with few youth successors',
      ],
      preservationActionNeeded: 'State forestry afforestation reserves for Tella Poniki trees and school toy craft mentorships.',
    },
    thenNowComparison: {
      then: [
        'Over 200 artisan families carved toys in every village lane',
        'Children played with biodegradable non-toxic wooden toys',
        'Toys documented every rural occupation and agricultural tool',
      ],
      today: [
        'Only 35 active households continue full-time carving',
        'Plastic toys dominate urban and rural households',
        'Artisans struggle to source sustainably harvested raw wood',
      ],
      preservationOpportunity: [
        'Establish community softwood nursery plantations',
        'Create interactive woodworking digital modules for vocational centers',
        'Form direct artisan-to-school educational toy collectives',
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Elder Arya Kshatriya woodcarvers in Kondapalli',
      documentation: 'Chisel angles, tamarind paste recipes, and posture anatomy records',
      verification: 'Verified by Crafts Council of Andhra Pradesh',
      learningModule: 'Softwood relief carving and natural lacquer polishing module',
      youngLearner: 'Woodcraft student completing apprenticeship assignments',
      futurePractitioner: 'Craftsperson preserving indigenous sustainable toy-making traditions',
    },
    whyPreserve: 'Kondapalli toys form a sociological physical archive of pre-industrial Indian rural occupations, crafts, and ecology crafted with zero plastic.',
    relatedTraditions: ['Kinhal Wooden Toys', 'Channapatna Lacquer Craft', 'Nirmal Painting'],
  },
  {
    id: '5',
    slug: 'rajasthan-johad-water-harvesting',
    name: 'Johad Traditional Rainwater Earth Dams',
    category: 'indigenous',
    categoryLabel: 'Indigenous Knowledge',
    state: 'Rajasthan',
    district: 'Alwar & Dausa',
    village: 'Bhikampura & Thanagazi',
    shortDescription: 'Crescent-shaped community earthen check dams designed to catch seasonal runoff and recharge subterranean desert aquifers.',
    fullDescription: 'A Johad is a traditional crescent-shaped earthen water storage structure built across natural contours of seasonal desert rivulets. Unlike modern concrete dams that promote surface evaporation, Johads gently slow down monsoon torrents so water can percolate deep into dry underground aquifers, reviving dried village wells and seasonal rivers.',
    history: 'Practiced for centuries across the arid Aravalli mountain ranges; dramatically revived by community collectives in the late 1980s, bringing 5 dead rivers back to perennial flow.',
    traditionalPractice: 'Villagers survey terrain during the first rains using ancient line-of-sight elevation markers. Silt and stones are compacted into crescent berms using ox-drawn wooden drags, topped with indigenous Khejri tree plantings.',
    materialsUsed: ['Local clay & decomposed granite earth', 'River gravel & stone rip-rap', 'Vetiver grass & Khejri tree saplings'],
    culturalSignificance: 'Regulated by village water committees ("Gram Sabha") where every family contributes shramdaan labor to desilt the basin before summer.',
    associatedCommunities: 'Gurjar, Meena, and Aravalli pastoral farming communities.',
    currentChallenges: 'Illegal marble quarrying in recharge zones and encroachment on catchment pathways.',
    preservationStatus: 'thriving',
    statusLabel: 'Thriving',
    latitude: 27.553,
    longitude: 76.6346,
    image: '/images/heritage_village_hero.jpg',
    contributor: 'Aravalli Water Commons (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 65,
      youngPractitionersCount: 42,
      communitiesCount: 18,
      lastDocumented: 'February 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Active Mentorship',
      riskFactors: [
        'Mining and commercial quarrying encroaching on subterranean recharge corridors',
        'Tendency of government contractors to replace earthen ponds with concrete tanks that prevent percolation',
      ],
      preservationActionNeeded: 'Legal recognition of community water commons and watershed engineering documentation.',
    },
    thenNowComparison: {
      then: [
        'Community assemblies collectively planned and maintained contour berms',
        'Perennial drinking water available in wells without electricity',
      ],
      today: [
        'Commercial borewells deplete aquifers faster than monsoons recharge',
        'Concrete lining in tanks prevents water from reaching the water table',
      ],
      preservationOpportunity: [
        'Train civil engineering students in traditional earthen water physics',
        'Publish open GIS-mapped catchment guidelines for rural gram sabhas',
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Village water elders and pastoral watershed builders',
      documentation: 'Topographical elevation readings and earthen compaction standards',
      verification: 'Verified by local Gram Panchayats and hydrologists',
      learningModule: 'Decentralized rainwater percolation engineering',
      youngLearner: 'Rural youth volunteer learning soil contour surveying',
      futurePractitioner: 'Community water steward building localized check dams',
    },
    whyPreserve: 'Johads have revived five dried river systems at less than 5% of the cost of destructive concrete mega-dams.',
    relatedTraditions: ['Zabo Water Systems', 'Bawdi Stepwells', 'Ahar Pyne'],
  },
  {
    id: '6',
    slug: 'kannur-theyyam-folk-ritual',
    name: 'Theyyam Sacred Ritual Performance',
    category: 'arts',
    categoryLabel: 'Folk Arts',
    state: 'Kerala',
    district: 'Kannur & Kasaragod',
    village: 'Payyanur & Nileshwaram',
    shortDescription: 'Ancient ritual dance theatre honoring ancestral spirits and forest deities with towering headdresses, intricate face painting, and fire rites.',
    fullDescription: 'Theyyam is a sacred ritual performance widespread in the Malabar region of North Kerala. During the annual kavu (sacred grove) festivals, village performers undergo severe austerity before entering an ecstatic trance where they embody local protectors, serpent gods, and maternal forest deities.',
    history: 'Pre-dating temple Hinduism, Theyyam traces back to Neolithic spirit worship and egalitarian village assemblies where agrarian labor castes were revered as living oracles.',
    traditionalPractice: 'Artists spend up to 10 hours having natural pigments applied to their bodies in geometric heraldry. Enormous headdresses (Mudi) woven from fresh palm leaves and red flowers are balanced while dancing over red-hot charcoal embers.',
    materialsUsed: ['Fresh areca palm leaves & coconut fronds', 'Crushed rice paste & turmeric pigment', 'Manayola mineral red & yellow', 'Ixora flower garlands'],
    culturalSignificance: 'Provides a sacred platform where marginalized communities traditionally held court, publicly arbitrating village disputes and blessing all inhabitants.',
    associatedCommunities: 'Vannan, Malayan, Velan, and Mavilan ancestral ritual practitioners.',
    currentChallenges: 'Commercialization for quick tourism photo-ops, weakening the sacred multi-day community context.',
    preservationStatus: 'declining',
    statusLabel: 'Declining',
    latitude: 12.0991,
    longitude: 75.2014,
    image: '/images/kalamkari_textile_art.jpg',
    contributor: 'Malabar Sacred Grove Archive (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 52,
      youngPractitionersCount: 19,
      communitiesCount: 14,
      lastDocumented: 'February 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Fragmented Transmission',
      riskFactors: [
        'Commercial tourist commodification cutting short sacred grove rituals',
        'Destruction of private sacred groves (kavus) for real estate construction',
      ],
      preservationActionNeeded: 'Protect sacred biodiversity groves and support ancestral performer healthcare pensions.',
    },
    thenNowComparison: {
      then: [
        'Performed in sacred untouched village groves as community arbitration',
        'Performers revered by all community members as living justice oracles',
      ],
      today: [
        'Reduced by some travel agencies to 20-minute stage photo-ops',
        'Sacred forest groves logged for residential plots',
      ],
      preservationOpportunity: [
        'Legally register sacred groves as community-managed biocultural commons',
        'Teach cultural respectful observation guidelines to youth and visitors',
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Master Theyyam performers and sacred grove custodians',
      documentation: 'Thottam pattu ancestral chants and natural palm weaving techniques',
      verification: 'Verified by Malabar cultural elders forum',
      learningModule: 'Indigenous sacred grove ecology and folk theatre heritage',
      youngLearner: 'Community youth practicing Kalaripayattu and rhythm meters',
      futurePractitioner: 'Initiated performer carrying forth sacred grove traditions',
    },
    whyPreserve: 'Theyyam protects ancient tropical rain-forest groves, oral songs of indigenous resistance, and customary communal harmony.',
    relatedTraditions: ['Padayani Folk Dance', 'Bhoota Kola', 'Yakshagana'],
  },
  {
    id: '7',
    slug: 'rogan-art-kutch-castor-painting',
    name: 'Rogan Castor Gel Painting',
    category: 'crafts',
    categoryLabel: 'Traditional Crafts',
    state: 'Gujarat',
    district: 'Kutch',
    village: 'Nirona',
    shortDescription: 'Freehand aerial painting using 48-hour boiled castor oil gel guided with a blunt brass rod floating above silk fabric.',
    fullDescription: 'Rogan painting is an ancient textile art originating over 400 years ago in Persia and nurtured in the arid Rann of Kutch. Pure castor oil is heated outdoors for over 48 hours until it transforms into a sticky, viscous paste called rogan. Worked in the palm with natural mineral earth pigments, it forms malleable strings that are trailed through the air with a blunt metal stylus onto fabric without ever touching the cloth.',
    history: 'Carried through generations of the Khatri Muslim artisan community in Nirona village. Traditionally, bridal skirts (ghaghras) and head coverings (odhnis) for desert pastoralist brides of the Maldhari and Ghadvi communities were ornamented with luminous Rogan floral motifs.',
    traditionalPractice: 'Artisans sit cross-legged on the floor, kneading a walnut-sized ball of colored rogan paste in their left palm with body warmth. Using a 6-inch blunt brass stylus held in the right hand, they pull a thread of paste and guide it aerially across the cloth, creating Tree of Life and floral patterns with mathematical symmetry.',
    materialsUsed: ['Cold-pressed desi castor oil', 'Natural mineral earth oxides (ochre, chalk, indigo)', '6-inch blunt brass stylus', 'Wild scrub firewood', 'Pure tussar and raw silk fabric'],
    culturalSignificance: 'Embodies deep ancestral knowledge of organic thermal polymerization and non-contact geometric freehand drafting celebrated in Kutch desert folklore.',
    associatedCommunities: 'Khatri artisan family lineage of Nirona village and Maldhari pastoralist nomadic groups.',
    currentChallenges: 'Only a single surviving family holds the authentic formulation; high physical strain on the master artisan’s hands and competition from cheap stencil screen prints.',
    preservationStatus: 'endangered',
    statusLabel: 'Critically At Risk',
    latitude: 23.4077,
    longitude: 69.5884,
    image: '/images/kalamkari_textile_art.jpg',
    contributor: 'Kutch Artisans Collective & Elder Knowledge Guild',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 4,
      youngPractitionersCount: 6,
      communitiesCount: 1,
      lastDocumented: 'February 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Critical Interruption',
      riskFactors: [
        'Confined to only one master family lineage in a single village',
        'Intense physical labor of 48-hour castor boiling with respiratory risks',
        'Proliferation of commercial synthetic enamel copies sold to unsuspecting tourists',
      ],
      preservationActionNeeded: 'Sponsor structured master-apprentice stipends for young village women, document thermal safety standards, and establish provenance verification.',
    },
    thenNowComparison: {
      then: [
        'Practiced across dozens of desert villages across Sindh and Kutch',
        'Customary attire for every desert pastoralist wedding ceremony',
        'Castor seeds harvested locally and pressed by village oil mongers (telis)',
      ],
      today: [
        'Practiced by only one extended family in Nirona village',
        'Nearly all youth migrated to industrial port and chemical factory jobs in Mundra',
        'Fabric often framed as wall art rather than worn in living community life',
      ],
      preservationOpportunity: [
        'Open a residential apprenticeship school in Nirona village',
        'Connect master artisans with ethical handloom designers',
        'Issue digital blockchain certificates of origin verifying authentic hand-trailed oil gel',
      ],
    },
    learningCurriculum: {
      moduleTitle: 'Foundations of Rogan Castor Gel Chemistry & Aerial Drafting',
      totalSteps: 5,
      steps: [
        {
          stepNumber: 1,
          title: 'Castor Seed Boiling & Resin Formulation',
          duration: '3 hours theoretical + safety observation',
          description: 'Understanding the 48-hour slow reduction of cold-pressed castor seed oil to reach viscous gel point.',
          traditionalMethod: 'Clay hearth observation using wild acacia charcoal embers until stringy amber consistency.',
        },
        {
          stepNumber: 2,
          title: 'Mineral Pigment Grinding in the Palm',
          duration: '45 mins practical',
          description: 'Mashing dried mineral chalk, yellow ochre, and indigo with warm oil paste in the palm using body heat.',
          traditionalMethod: 'Continuous rhythmic circular palm rubbing with a smooth river pebble until elastic dough forms.',
        },
        {
          stepNumber: 3,
          title: 'The Brass Stylus Aerial Pull Technique',
          duration: '90 mins practical',
          description: 'Learning to spin a 0.2mm continuous thread of paste in mid-air without breaking the tension.',
          traditionalMethod: 'Wrist rotation keeping the brass tip 3 millimeters above test cloth.',
        },
        {
          stepNumber: 4,
          title: 'Tree of Life Motif Construction',
          duration: '2 hours practical',
          description: 'Drafting the central stem, curvilinear branches, and peacock feather leaves.',
          traditionalMethod: 'Freehand geometric memory counts without drawn pencil guidelines.',
        },
        {
          stepNumber: 5,
          title: 'Symmetry Mirroring & Curing',
          duration: '30 mins practical',
          description: 'Carefully folding the fabric in half while wet to imprint an exact mirror-image copy.',
          traditionalMethod: 'Even palm pressing over muslin cloth followed by two weeks of shade drying.',
        },
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Eighth-generation Rogan master Khatri Abdul Gafur',
      documentation: 'High-definition video documentation of castor boiling and stylus tension',
      verification: 'Verified by Kutch Artisans Guild and community elders',
      learningModule: 'Rogan Art: The Science of Castor Oil Polymeric Gel',
      youngLearner: 'Eight village girls enrolled in daily apprentice practicum',
      futurePractitioner: 'Certified independent master running rural craft studio',
    },
    whyPreserve: 'Rogan art is one of humanity’s rarest non-contact chemical painting techniques, balancing organic green chemistry with exquisite geometric imagination.',
    relatedTraditions: ['Ajrakh Block Printing', 'Bandhani Tie & Dye', 'Kutch Mud Mirror Lippan Kaam'],
  },
  {
    id: '8',
    slug: 'majuli-island-bamboo-theatre-masks',
    name: 'Majuli Vaishnavite Bamboo Mask Craft',
    category: 'arts',
    categoryLabel: 'Folk Arts',
    state: 'Assam',
    district: 'Majuli River Island',
    village: 'Natun Samaguri Satra',
    shortDescription: 'Sub-kilogram theatrical masks sculpted from split river bamboo, cow dung, and Brahmaputra silt for sacred Bhaona performances.',
    fullDescription: 'On Majuli—the world\'s largest inhabited river island on the Brahmaputra—monks of the Natun Samaguri Satra have preserved a 500-year-old tradition of devotional mask craft initiated by saint-reformer Srimanta Sankardeva. Ranging from expressive head-masks (Mukha) to giant 12-foot mobile effigies (Cho Mukha) with articulated jaws and eyes, these masks bring mythological epics alive during harvest celebrations.',
    history: 'In the 15th century, Sankardeva established monastic retreats (Satras) that integrated visual drama, dance, and literature to transcend caste barriers. Mask making was developed as a spiritual discipline practiced by celibate monks (Bhakats).',
    traditionalPractice: 'Artisans weave an inner anatomical frame using flexible Jaati bamboo ribbons. They paste muslin strips soaked in aged cow dung and alluvial Brahmaputra clay over the bamboo, mold facial contours by hand, sun-dry the mask, and apply organic mineral and vegetable paints.',
    materialsUsed: ['Aged Jaati and Bhaluka bamboo', 'Brahmaputra alluvial silt', 'Fresh and composted indigenous cow dung', 'Mulberry cotton muslin cloth', 'Hingul (vermilion), Harital (yellow arsenic stone), Indigo pigments'],
    culturalSignificance: 'Sacred vehicles of communal devotion and moral instruction, masks are treated as living spiritual beings and blessed in the monastery prayer hall before every performance.',
    associatedCommunities: 'Bhakats (resident monastic brothers) of Natun Samaguri Satra and Majuli island agrarian communities.',
    currentChallenges: 'Severe river erosion shrinking Majuli Island landmass, youth pursuing distant urban wage jobs, and high cost of traditional raw materials.',
    preservationStatus: 'at_risk',
    statusLabel: 'At Risk',
    latitude: 26.9667,
    longitude: 94.2167,
    image: '/images/kondapalli_wooden_toys.jpg',
    contributor: 'Majuli Monastic Heritage Forum (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 16,
      youngPractitionersCount: 18,
      communitiesCount: 4,
      lastDocumented: 'January 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Active Mentorship',
      riskFactors: [
        'Annual monsoon river floods destroying monastery craft storehouses',
        'Shrinking availability of mature native Jaati bamboo groves due to island bank erosion',
        'Encroachment of mass-manufactured plastic theatrical props in rural festivals',
      ],
      preservationActionNeeded: 'Construct flood-resilient community craft archival storehouses and integrate mask apprenticeships with island secondary schools.',
    },
    thenNowComparison: {
      then: [
        'Every village actor made their own mask under monastery master guidance',
        'Masks used exclusively in seasonal 3-night open-air community Bhaona theatre',
        'Bamboo harvested strictly during autumn waning moon to prevent wood-borer beetles',
      ],
      today: [
        'Only two Satras maintain full active mask-making workshops on the island',
        'Young monks frequently leave monastic discipline for mainland university degrees',
        'Masks increasingly made as decorative souvenirs rather than performative ritual objects',
      ],
      preservationOpportunity: [
        'Establish residential youth summer schools for island school students',
        'Create digital interactive archive of Bhaona drama scripts and mask movement guides',
        'Sponsor international cultural exchanges for master monastic carvers',
      ],
    },
    learningCurriculum: {
      moduleTitle: 'Split Bamboo Weaving & Alluvial Clay Mask Sculpture',
      totalSteps: 5,
      steps: [
        {
          stepNumber: 1,
          title: 'Jaati Bamboo Selection & Rib Splitting',
          duration: '60 mins',
          description: 'Selecting straight-grained 3-year-old bamboo and splitting it into paper-thin, pliant ribbons.',
          traditionalMethod: 'Using the traditional curved Assamese dao knife while soaking splits in river water.',
        },
        {
          stepNumber: 2,
          title: 'Three-Dimensional Cranial Armature Weaving',
          duration: '2 hours',
          description: 'Weaving the open-lattice dome that fits snugly over the actor\'s skull with eyehole apertures.',
          traditionalMethod: 'Hexagonal open-weave basketry technique adapted to anatomical skull measurements.',
        },
        {
          stepNumber: 3,
          title: 'River Clay & Cow Dung Plastering',
          duration: '90 mins',
          description: 'Layering muslin soaked in filtered alluvial river mud and aged cow dung to form skin texture.',
          traditionalMethod: 'Three thin coatings with 24 hours of shade-drying between applications.',
        },
        {
          stepNumber: 4,
          title: 'Facial Contouring & Articulated Jaw Rigging',
          duration: '2 hours',
          description: 'Sculpting exaggerated noses, brows, and fangs, and installing bamboo pivot pins for moving jaws.',
          traditionalMethod: 'Hidden cotton cord linkage operated by the actor\'s chin movement.',
        },
        {
          stepNumber: 5,
          title: 'Natural Tempera Pigment Painting',
          duration: '2 hours',
          description: 'Compounding mineral colors with wood gum adhesive to paint fierce demon or serene deity expressions.',
          traditionalMethod: 'Brushes crafted from pigeon feather quills and goat hair tips.',
        },
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Master monk and sculpturor Hemchandra Goswami',
      documentation: 'Complete documentation of 40 traditional character facial patterns',
      verification: 'Verified by Majuli Cultural Council & Assam Satra Mahasabha',
      learningModule: 'Majuli Mask Craft: River Silt & Bamboo Armatures',
      youngLearner: 'Eighteen young monks practicing evening armature weaving',
      futurePractitioner: 'Senior master monk leading regional Bhaona troupes',
    },
    whyPreserve: 'Majuli masks are a rare synthesis of ecological materials, monastic spiritual discipline, and dynamic kinetic theatre seen nowhere else on earth.',
    relatedTraditions: ['Sattriya Classical Dance', 'Burra Katha', 'Chhau Mask Dance'],
  },
  {
    id: '9',
    slug: 'kashmir-pashmina-sozni-needlecraft',
    name: 'Kashmir Pashmina & Sozni Needlecraft',
    category: 'crafts',
    categoryLabel: 'Traditional Crafts',
    state: 'Jammu & Kashmir',
    district: 'Srinagar & Ganderbal',
    village: 'Old Srinagar & Lar',
    shortDescription: 'Hand-carded Changthangi goat underdown woven on pit looms and embroidered with 0.5mm silver needles.',
    fullDescription: 'Authentic Kashmiri Pashmina is harvested from the high-altitude Changthangi goat at 14,000 feet in Ladakh, spun on ancient wooden yinder spinning wheels by elder women, hand-woven on foot-treadle pit looms, and embellished with Sozni needlework. Sozni is an extraordinarily delicate counted-stitch embroidery executed with fine silk threads, often requiring two full years to finish a single Jamawar shawl.',
    history: 'Introduced in the 14th century by the Sufi saint Mir Sayyid Ali Hamadani, who brought 700 craftsmen from Persia and Central Asia to Srinagar, sparking centuries of royal patronage under Mughal and Kashmiri rulers.',
    traditionalPractice: 'Fleece is sorted hair-by-hair to separate guard hairs from 12-micron underdown. The yarn is sized with pounded boiled rice paste, warped across hand-carved walnut reeds, and embroidered freehand with floral paisley (badam) and chinarr leaf motifs.',
    materialsUsed: ['Raw Changthangi pashm fiber (12–15 microns)', 'Boiled broken rice water (aam) for natural sizing', 'Wooden yinder drop spindles & pit-loom', '0.5mm fine steel needles', 'Vegetable-dyed mulberry silk floss'],
    culturalSignificance: 'A cornerstone of Kashmiri domestic culture, heritage identity, and winter household economic independence, where needlework verses are passed from grandmother to granddaughter.',
    associatedCommunities: 'Wangar spinning women of Srinagar, master loom weavers (Vosta), and Sozni needle artisans (Rafugars).',
    currentChallenges: 'Mechanized powerlooms spinning synthetic nylon blends labeled as fake cashmere, predatory middleman pricing, and youth turning away from eye-straining micro-needlework.',
    preservationStatus: 'endangered',
    statusLabel: 'Critically At Risk',
    latitude: 34.0837,
    longitude: 74.7973,
    image: '/images/elder_oral_storyteller.jpg',
    contributor: 'Srinagar Craft Lineage Archives (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 22,
      youngPractitionersCount: 5,
      communitiesCount: 3,
      lastDocumented: 'March 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Critical Interruption',
      riskFactors: [
        'Machine-made chemical-finished counterfeit shawls flooding retail markets',
        'Severe eyesight strain and lack of ergonomic workspace support for aging artisans',
        'Drop in spinning women from over 40,000 thirty years ago to under 4,000 today',
      ],
      preservationActionNeeded: 'Enforce strict GI testing micro-laboratories, provide optical healthcare support, and guarantee fair direct-to-artisan purchase prices.',
    },
    thenNowComparison: {
      then: [
        'Spinning wheels hummed on nearly every household balcony in old Srinagar',
        'Shawl weavers commanded guild wages rivaling master architects',
        'Pashmina was preserved as multi-generational family bridal wealth',
      ],
      today: [
        'Over 80% of cheap retail pashmina contains synthetic viscose or machine yarn',
        'Artisans earn less than daily unskilled agricultural laborers',
        'Few young boys or girls willing to spend 8 hours daily over an embroidery frame',
      ],
      preservationOpportunity: [
        'Establish direct youth apprenticeship stipends tied to certified hand-spinning',
        'Provide high-magnification LED optical working lights and eye care clinics',
        'Open digital direct-sales commons connecting weavers directly with conscious buyers',
      ],
    },
    learningCurriculum: {
      moduleTitle: 'Pashmina Fiber Science & Sozni Micro-Stitch Mastery',
      totalSteps: 5,
      steps: [
        {
          stepNumber: 1,
          title: 'Pashm Grading & Manual Hair Dehairing',
          duration: '60 mins',
          description: 'Distinguishing 12-micron Changthangi underdown from coarse outer guard hairs by touch.',
          traditionalMethod: 'Manual hand-combing through clay-weighted willow teeth combs.',
        },
        {
          stepNumber: 2,
          title: 'Yinder Wheel Hand-Spinning Technique',
          duration: '90 mins',
          description: 'Operating the wooden Kashmiri spinning wheel to produce uniform 100-count delicate single ply yarn.',
          traditionalMethod: 'Gentle finger drafting without snapping the ultra-fine fiber bundle.',
        },
        {
          stepNumber: 3,
          title: 'Organic Rice Water Warp Sizing',
          duration: '45 mins',
          description: 'Strengthening brittle single-ply pashmina yarn with natural fermented rice starch slurry.',
          traditionalMethod: 'Drying yarn hanks stretched between outdoor wooden poles in autumn mountain air.',
        },
        {
          stepNumber: 4,
          title: 'Sozni Needlework: Counted-Thread Satin Stitch',
          duration: '3 hours',
          description: 'Executing microscopic stitches where the needle barely catches two warp threads without piercing through.',
          traditionalMethod: 'Working with pure vegetable-dyed silk thread under natural diffused daylight.',
        },
        {
          stepNumber: 5,
          title: 'Purzagar Finishing & Gentle River Washing',
          duration: '45 mins',
          description: 'Removing stray knots with brass tweezers and washing in mountain spring water.',
          traditionalMethod: 'Fulling the fabric with gentle rhythmic hand-kneading in mild soapnut wash.',
        },
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Master Weaver Ustad Ghulam Hassan and spinning elder Fatima Begum',
      documentation: 'Filmed record of 18 historical Sozni border stitches and yinder spindle speeds',
      verification: 'Verified by Craft Development Institute Srinagar & artisan council',
      learningModule: 'Pashmina Fiber Science & Sozni Micro-Stitch Mastery',
      youngLearner: 'Five young apprentices in heritage craft cluster',
      futurePractitioner: 'Master craftsperson earning dignified liveable income from handloom',
    },
    whyPreserve: 'Kashmir Pashmina represents the pinnacle of tactile softness, thermal efficiency, and micro-embroidery known to human textile history.',
    relatedTraditions: ['Kani Loom Weaving', 'Walnut Wood Carving', 'Papier Mâché Painting'],
  },
  {
    id: '10',
    slug: 'pokkali-saline-tidal-paddy-cultivation',
    name: 'Pokkali Saline Tidal Rice Farming',
    category: 'farming',
    categoryLabel: 'Traditional Farming',
    state: 'Kerala',
    district: 'Ernakulam & Alappuzha',
    village: 'Kadamakkudy & Kumbalangi',
    shortDescription: 'Submerged 2.5-meter tall saline-resilient rice rotating seasonally with tidal prawn culture with zero chemical fertilizers.',
    fullDescription: 'Pokkali is an ancient, agro-ecological rice cultivation technique practiced in the low-lying brackish coastal backwaters of Kerala. During the monsoon months, surging freshwater pushes saline sea water into the Arabian Sea, allowing farmers to sow heritage Pokkali paddy. After the October harvest, the paddy stubble decomposes in the fields, creating a rich organic feeding ground for migratory prawns and fish during the saline dry season.',
    history: 'Cultivated for over 3,000 years along Kerala\'s Malabar coast, mentioned in ancient Sangam literature as a resilient coastal survival crop that stood firm against floods, ocean surges, and seawater inundation.',
    traditionalPractice: 'Before the monsoon, farmers heap saline mud into conical mounds (pothies). Early rains wash away surface salts. Pre-germinated seeds are sown on the mound crests. When the seedlings grow tall, the mounds are leveled, and the stalks float like aquatic reeds up to 2.5 meters tall.',
    materialsUsed: ['Ancestral Pokkali red-rice seed stock', 'Traditional wooden sluice gates (Madu)', 'Flat-bottom country canoes (Vallam)', 'Bamboo fish traps', 'Zero chemical fertilizers or synthetic pesticides'],
    culturalSignificance: 'Celebrated through coastal fishing and harvest songs; the first sheaf of Pokkali paddy is tied to the central ridge of village tharavadu ancestral homes as a symbol of maritime bounty.',
    associatedCommunities: 'Coastal Kudumbi and Pulaya agricultural communities and artisanal backwater fishermen.',
    currentChallenges: 'Urban real estate reclamation of coastal marshes, labor shortages due to heavy manual wading in waist-deep mud, and higher short-term profits from intensive commercial shrimp farming.',
    preservationStatus: 'declining',
    statusLabel: 'Declining',
    latitude: 10.0467,
    longitude: 76.2422,
    image: '/images/indigenous_millet_farm.jpg',
    contributor: 'Pokkali Coastal Heritage Consortium (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 38,
      youngPractitionersCount: 9,
      communitiesCount: 7,
      lastDocumented: 'February 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Fragmented Transmission',
      riskFactors: [
        'Urban landfill expansion encroaching onto coastal mangrove polders',
        'Intensive chemical shrimp aquaculture poisoning soil for subsequent rice rotations',
        'Lack of modern mechanized harvesting tools suited for deep mud terrain',
      ],
      preservationActionNeeded: 'Provide ecological wetland stewardship subsidies to farmers and develop lightweight amphibious harvesting equipment.',
    },
    thenNowComparison: {
      then: [
        'Over 25,000 hectares of lush Pokkali fields fringed the Cochin backwaters',
        'Self-sustaining ecosystem provided both rich staple grain and daily fresh seafood',
        'Tidal flood barriers built and repaired collectively by entire villages',
      ],
      today: [
        'Cultivation shrunken to less than 5,000 hectares',
        'Many fields lie fallow or permanently flooded for commercial monoculture shrimp ponds',
        'Youth view wading in deep marsh mud as socially degrading hard labor',
      ],
      preservationOpportunity: [
        'Brand Pokkali rice as an international premium superfood due to high antioxidants and low glycemic index',
        'Support young agro-tourism cooperatives combining guided wetland kayak tours with farming',
        'Reward farmers with blue carbon credits for maintaining coastal wetland ecosystems',
      ],
    },
    learningCurriculum: {
      moduleTitle: 'Agro-Ecological Tidal Wetland Management',
      totalSteps: 5,
      steps: [
        {
          stepNumber: 1,
          title: 'Tidal Sluice Gate (Madu) Operation',
          duration: '60 mins',
          description: 'Controlling wooden flap gates that admit nutrient-rich sea water while blocking storm surges.',
          traditionalMethod: 'Monitoring lunar tide cycles and water salinity using natural taste and clay markers.',
        },
        {
          stepNumber: 2,
          title: 'Pyramidal Mound (Pothie) Construction',
          duration: '2 hours',
          description: 'Sculpting high mud cones in brackish shallows so early monsoon rains leach salts downward.',
          traditionalMethod: 'Using wide wooden shovels to carve riverbed clay into 1-meter high mounds.',
        },
        {
          stepNumber: 3,
          title: 'Salt-Tolerant Seed Sprouting & Broadcasting',
          duration: '45 mins',
          description: 'Soaking ancestral seeds in freshwater and wrapping in banana leaves until vibrant green sprouts emerge.',
          traditionalMethod: 'Broadcasting sprouted seeds directly onto the washed crowns of the mounds.',
        },
        {
          stepNumber: 4,
          title: 'Mound Leveling & Water Level Tracking',
          duration: '90 mins',
          description: 'Spreading the mounds into flat underwater beds as monsoon rainwater fills the wetlands.',
          traditionalMethod: 'Navigating through fields on slender wooden canoes to guide floating rice stalks.',
        },
        {
          stepNumber: 5,
          title: 'Prawn Integration & Ecological Symbiosis',
          duration: '60 mins',
          description: 'Opening tidal gates post-harvest to welcome juvenile tiger prawns that feed on decomposing rice stubble.',
          traditionalMethod: 'Nighttime lantern trapping with woven bamboo reed filters.',
        },
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Elder farmer K. Sivaraman and backwater fishing elders',
      documentation: 'Tidal salinity charts, seed selection archives, and water quality protocols',
      verification: 'Verified by Kerala Agricultural University & Coastal Biodiversity Board',
      learningModule: 'Pokkali Saline Rice: Agro-Ecological Tidal Rotation',
      youngLearner: 'Nine agriculture and marine biology student interns',
      futurePractitioner: 'Next-generation ecological farmer managing organic wetland aquaculture',
    },
    whyPreserve: 'Pokkali is a global climate adaptation model demonstrating how food crops can withstand rising sea levels and saline water intrusion without chemical fertilizers.',
    relatedTraditions: ['Navadhanya Farming', 'Kuttanad Below Sea-Level Farming', 'Kaipad Saline Rice'],
  },
  {
    id: '11',
    slug: 'toda-indigenous-buffalo-lore-pukhoor',
    name: 'Toda Indigenous Buffalo Lore & Pukhoor Needlecraft',
    category: 'indigenous',
    categoryLabel: 'Indigenous Knowledge',
    state: 'Tamil Nadu',
    district: 'Nilgiris',
    village: 'Muthunad Mund & Kandal Mund',
    shortDescription: 'Sacred dairy temple rituals, oral pastoral chants, and geometric black-and-red count-thread wool embroidery on coarse unbleached cotton.',
    fullDescription: 'The Toda are a small indigenous pastoralist community residing on the high rolling grasslands of the Nilgiri Hills for thousands of years. Their entire societal, spiritual, and ecological life revolves around their sacred endemic Asiatic water buffaloes. While ordained dairyman-priests carry forward oral rituals in conical thatch temples (Tirofi), Toda women create Pukhoor—an exquisite counted-thread geometric embroidery executed entirely from memory without written drafts.',
    history: 'The Toda culture is one of the oldest surviving indigenous societies of South Asia, possessing a distinct Dravidian language with archaic phonetic structures and unique barrel-vaulted bamboo dwellings.',
    traditionalPractice: 'Pukhoor shawls (poothkuly) are embroidered on hand-spun unbleached cotton fabric using black and red wool strands. Women count warp and weft threads meticulously with the tip of their fingers, creating symmetrical triangles, diamond eyes, and sacred buffalo horn symbols.',
    materialsUsed: ['Hand-spun unbleached thick cotton cloth', 'Natural wool yarn in red and dark black', 'Single pointed steel needle', 'Sacred buffalo butter and milk offering vessels', 'Wild bamboo and reed thatch'],
    culturalSignificance: 'The finished Poothkuly shawl is worn during sacred seasonal ceremonies, community disputes arbitration councils (Noym), and serves as the sacred funeral shroud that escorts the soul to the ancestral realm.',
    associatedCommunities: 'Toda indigenous clans of the Upper Nilgiri Plateau (pop. approx. 1,400 individuals).',
    currentChallenges: 'Replacement of native shola grasslands by invasive eucalyptus and commercial tea estates, severe shrinkage of sacred buffalo grazing territory, and youth losing the unwritten Toda language.',
    preservationStatus: 'endangered',
    statusLabel: 'Critically At Risk',
    latitude: 11.4102,
    longitude: 76.6950,
    image: '/images/elder_oral_storyteller.jpg',
    contributor: 'Nilgiri Indigenous Heritage Archives (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 14,
      youngPractitionersCount: 7,
      communitiesCount: 5,
      lastDocumented: 'March 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Critical Interruption',
      riskFactors: [
        'Total Toda population fewer than 1,500 people worldwide',
        'Loss of high-altitude shola montane grasslands to monoculture tea plantations',
        'Sacred dairy temple priesthood lineages leaving for commercial plain towns',
      ],
      preservationActionNeeded: 'Protect remaining Shola grassland grazing corridors and establish community language immersion nests for Toda children.',
    },
    thenNowComparison: {
      then: [
        'Vast rolling high-altitude grasslands allowed large sacred buffalo herds to graze freely',
        'Every Toda girl mastered thread-counting and oral epic songs by age twelve',
        'Dairy temple rituals conducted exclusively according to solar and moon movements',
      ],
      today: [
        'Sacred herds reduced dramatically due to lack of open shola pastures',
        'Young people speak English and Tamil with dwindling fluency in archaic Toda',
        'Mass-manufactured machine prints imitate sacred Toda geometric motifs on cheap polyester',
      ],
      preservationOpportunity: [
        'Restore indigenous shola grassland reserves around sacred temple munds',
        'Register communal GI intellectual property protections for authentic hand-embroidered poothkuly',
        'Publish bilingual audio-books documenting sacred buffalo song lineages',
      ],
    },
    learningCurriculum: {
      moduleTitle: 'Pukhoor Geometric Needlework & Shola Grassland Botany',
      totalSteps: 5,
      steps: [
        {
          stepNumber: 1,
          title: 'Unbleached Cotton Fabric Preparation & Thread Sizing',
          duration: '45 mins',
          description: 'Examining the balanced weave of coarse cotton cloth to count warp threads accurately.',
          traditionalMethod: 'Inspecting natural fabric density against morning Nilgiri sunlight.',
        },
        {
          stepNumber: 2,
          title: 'Memory Geometry & Sacred Buffalo Horn Motifs',
          duration: '90 mins',
          description: 'Learning the sacred symbolic motifs: buffalo horns (Modir), butterfly (Karthoy), and stars (Kesh).',
          traditionalMethod: 'Oral mnemonic verse chanting while demonstrating finger thread spacing.',
        },
        {
          stepNumber: 3,
          title: 'Reversible Red & Black Wool Darning Stitch',
          duration: '2 hours',
          description: 'Executing the counted-thread running stitch that appears embossed on both sides of the cloth.',
          traditionalMethod: 'Counting threads in blocks of three without pencil stencils or tracing paper.',
        },
        {
          stepNumber: 4,
          title: 'Border Band Alignment & Tension Balancing',
          duration: '90 mins',
          description: 'Working the broad red bands across the hem without puckering the heavy cotton base.',
          traditionalMethod: 'Hand-held frame-free tension control between thumb and forefinger.',
        },
        {
          stepNumber: 5,
          title: 'Ceremonial Draping & Clan Protocol',
          duration: '45 mins',
          description: 'Understanding how the poothkuly shawl is draped across the left shoulder during sacred assemblies.',
          traditionalMethod: 'Instruction by elder clan grandmothers in clan customs and respect etiquette.',
        },
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Elder artisan Pilchin Kuttan and temple custodian elders',
      documentation: 'Audio recordings of 60 buffalo songs and high-resolution motif charts',
      verification: 'Verified by Toda Nalvazhvu Sangam & Nilgiri tribal elders council',
      learningModule: 'Pukhoor Geometric Needlework & Shola Grassland Botany',
      youngLearner: 'Seven young Toda women enrolled in weekend craft guild sessions',
      futurePractitioner: 'Certified master artisan preserving living tribal needlework traditions',
    },
    whyPreserve: 'The Toda culture is an irreplaceable link to prehistoric human pastoralism, sacred animal relationships, and intuitive mathematical textile geometry.',
    relatedTraditions: ['Theyyam Sacred Groves', 'Warli Art', 'Johad Water Conservation'],
  },
  {
    id: '12',
    slug: 'warli-indigenous-wall-painting-tarpa',
    name: 'Warli Indigenous Wall Painting & Tarpa Lore',
    category: 'folklore',
    categoryLabel: 'Folklore & Storytelling',
    state: 'Maharashtra',
    district: 'Palghar & Thane',
    village: 'Dahanu & Jawhar',
    shortDescription: 'Rudimentary geometric wall painting using rice flour paste on cow dung wash depicting the circle of life and sacred wind instruments.',
    fullDescription: 'Warli painting is one of the world\'s oldest continuous folk art traditions, practiced by the indigenous Warli tribe of the Sahyadri mountain foothills. Utilizing simple geometric shapes—circles representing the sun and moon, triangles denoting mountains and trees, and squares representing consecrated human land—Warli murals do not depict mythic gods of urban temples, but celebrate nature, harvest, the mother goddess Palaghata, and the hypnotic spiral dance around the long gourd Tarpa trumpet.',
    history: 'Dating back in style to prehistoric rock shelters (c. 2,500 BCE - 3,000 BCE), Warli was historically painted exclusively by married women (Suhasinis) during weddings and agrarian sowing festivals on the mud walls of family huts.',
    traditionalPractice: 'The hut wall is first plastered with fresh cow dung and red clay (geru). A paste of ground white rice flour and natural gum adhesive is prepared. Artists use a small chewed bamboo stick as a brush to spontaneously draw intricate human figures, birds, deer, and winding village paths without sketching.',
    materialsUsed: ['Fine ground rice flour paste (Pith)', 'Red earth (Geru) and cow dung wall plaster', 'Chewed green bamboo twig brushes (Bahini)', 'Tree gum binder (Babul gond)', 'Tarpa gourd wind instruments'],
    culturalSignificance: 'Warli is not merely decorative painting; it is an unwritten ecological encyclopedia recording sustainable village life, seasonal weather cues, and the non-hierarchical unity between humans, animals, and trees.',
    associatedCommunities: 'Warli, Konkana, and Malhar Koli indigenous communities of the northern Western Ghats.',
    currentChallenges: 'Commercialization reducing sacred mural rituals into cheap acrylic souvenir coasters, urban sprawl replacing mud houses with brick and cement, and elder Tarpa makers dying without apprentices.',
    preservationStatus: 'declining',
    statusLabel: 'Declining',
    latitude: 19.9703,
    longitude: 72.7300,
    image: '/images/heritage_village_hero.jpg',
    contributor: 'Sahyadri Tribal Heritage Collective (Demo Collection)',
    verificationStatus: 'Community Verified',
    continuityProfile: {
      knowledgeHoldersCount: 42,
      youngPractitionersCount: 24,
      communitiesCount: 11,
      lastDocumented: 'February 2026',
      learningAvailable: true,
      knowledgeTransferStatus: 'Active Mentorship',
      riskFactors: [
        'Urban real estate replacing traditional mud houses with concrete walls',
        'Loss of sacred Tarpa instrument makers who know how to carve long dried gourds',
        'Industrial factory jobs pulling young generation away from agricultural rhythms',
      ],
      preservationActionNeeded: 'Support village wall mural workshops in primary schools and sponsor master Tarpa instrument crafting residencies.',
    },
    thenNowComparison: {
      then: [
        'Painted communally by village women before every wedding and harvest feast',
        'Murals were ephemeral, renewed with every seasonal monsoon plastered wall',
        'Tarpa dances lasted through the night with hundreds of villagers joined in spiral rings',
      ],
      today: [
        'Commercial canvas paintings sold to art galleries, disconnected from mud rituals',
        'Fewer than a dozen master Tarpa gourd carvers remain in the entire district',
        'Young villagers listen to amplified electronic pop music instead of acoustic wind pipes',
      ],
      preservationOpportunity: [
        'Commission youth to paint authentic living murals on rural schools and gram panchayat halls',
        'Document the acoustic crafting and breathing techniques of Tarpa instruments',
        'Establish annual village storytelling and wall art gatherings led by elder women',
      ],
    },
    learningCurriculum: {
      moduleTitle: 'Indigenous Warli Geometry & Natural Pigment Muraling',
      totalSteps: 5,
      steps: [
        {
          stepNumber: 1,
          title: 'Mud & Cow Dung Base Wall Plastering',
          duration: '60 mins',
          description: 'Preparing the rustic canvas by applying a smooth mixture of cow dung and red earth (geru).',
          traditionalMethod: 'Applying with circular hand strokes across dried mud-and-reed walls.',
        },
        {
          stepNumber: 2,
          title: 'Chewed Bamboo Brush Crafting',
          duration: '30 mins',
          description: 'Selecting green bamboo twigs and chewing the tip into soft, absorbent fiber bristles.',
          traditionalMethod: 'Using teeth to soften the wood fibers without splitting the main stem.',
        },
        {
          stepNumber: 3,
          title: 'Rice Flour (Pith) Binding & Consistency',
          duration: '30 mins',
          description: 'Grinding raw rice with water and a drop of acacia gum to prevent cracking when dry.',
          traditionalMethod: 'Hand-grinding on granite stone mortar into creamy liquid ink.',
        },
        {
          stepNumber: 4,
          title: 'Elemental Geometric Figures: Humans & Trees',
          duration: '2 hours',
          description: 'Drawing the human figure with two opposing triangles joined at the waist symbolizing movement.',
          traditionalMethod: 'Freehand fluid dots and lines capturing dynamic rhythmic life.',
        },
        {
          stepNumber: 5,
          title: 'The Great Tarpa Spiral Dance Circle',
          duration: '2 hours',
          description: 'Composing the concentric spiral of dancers holding hands around the central musician.',
          traditionalMethod: 'Expanding outward circles reflecting the unending cycle of nature and seasons.',
        },
      ],
    },
    knowledgeJourney: {
      knowledgeHolder: 'Elder artists and master Tarpa player Mahadev Dhinda',
      documentation: 'Over 80 sacred wedding chowk iconography blueprints and audio melodies',
      verification: 'Verified by Adivasi Sahitya Parishad & regional cultural council',
      learningModule: 'Indigenous Warli Geometry & Natural Pigment Muraling',
      youngLearner: 'Twenty-four village youth participating in community mural revivals',
      futurePractitioner: 'Youth carrying indigenous environmental art into contemporary architecture',
    },
    whyPreserve: 'Warli art is a living testament to human-nature harmony, expressing profound ecological philosophy through pure minimalist geometric poetry.',
    relatedTraditions: ['Burra Katha Ballads', 'Majuli Island Masks', 'Navadhanya Farming'],
  },
];

export const ORAL_STORIES: OralStory[] = [
  {
    id: 'story-1',
    title: 'How Our Village Celebrated the Harvest Season with Shared Granaries',
    contributor: 'Lakshmi Devi',
    contributorRole: 'Elder Seed Keeper & Grandmother (Age 74)',
    location: 'Medak District, Andhra Pradesh / Telangana Border',
    state: 'Andhra Pradesh',
    category: 'Oral History',
    duration: '6 min 40 sec',
    recordedDate: 'Recorded February 2026',
    image: '/images/elder_oral_storyteller.jpg',
    audioSampleName: 'Harvest Chant & Village Memory (Field Recording)',
    description: 'Lakshmi Devi recalls when the entire village harvested finger millets communally, sharing seed stocks with young newlyweds and ensuring no family went without food during dry spells.',
    transcript: `“When I was married into this village in 1968, there were no borewells and no chemical fertilizer bags dumped by the highway. We waited for the swallows to circle low over the neem trees—that was our meteorologist telling us the monsoon clouds were three days away.

On the day of harvest, every family brought two baskets of their best earheads to the village peepal tree square. We didn’t lock our grain in iron godowns; we plastered woven bamboo baskets with fresh cow dung and neem leaves. Those baskets belonged to everyone. If a young couple started a new household, the elders gifted them a basket of seeds with the promise: ‘Reap from the earth, return a handful to the commons, and never sell your seed.’

Today my grandchildren stare at little glass screens in their palms. I want them to hear this voice and remember: food is not something that comes out of a plastic packet. It is a song of patience between human hands and the red soil.”`,
  },
  {
    id: 'story-2',
    title: 'The Secret River Wash of the Natural Madder Root Dyes',
    contributor: 'Koteswara Rao',
    contributorRole: 'Master Kalamkari Artisan (Age 68)',
    location: 'Srikalahasti, Tirupati District',
    state: 'Andhra Pradesh',
    category: 'Craft Lore',
    duration: '8 min 15 sec',
    recordedDate: 'Recorded January 2026',
    image: '/images/kalamkari_textile_art.jpg',
    audioSampleName: 'River Washing & Bamboo Quill Strokes',
    description: 'A master artisan explains why running river water and cow milk are non-negotiable elements of authentic Kalamkari, and how synthetic chemicals kill the soul of cloth.',
    transcript: `“People come to my workshop from big cities and ask: ‘Can’t you use a nylon brush or an electric hair dryer to speed up the cloth drying?’ I always laugh, but inside it hurts my heart.

A bamboo kalam pen is alive. When you carve the reed, you leave a little wool fleece inside the hollow shaft to hold the fermented iron ink. When your hand touches the cloth, the pen breathes with your pulse. If your mind is angry or hurried, the line breaks.

And the river—the Swarnamukhi river! Her running water has specific calcium and mineral balances that lock the red madder dye into the cotton fibers. When you wash the cloth in still pond water or tap water with chlorine, the color turns dull grey like ash. This craft was never meant to be industrial. It is a slow prayer of patience.”`,
  },
  {
    id: 'story-3',
    title: 'The Song of Nine Millets: Singing While Sowing in Red Dust',
    contributor: 'Chennamma',
    contributorRole: 'Folk Song Lead & Dryland Farmer (Age 62)',
    location: 'Zaheerabad, Sangareddy',
    state: 'Telangana',
    category: 'Folk Songs',
    duration: '5 min 10 sec',
    recordedDate: 'Recorded March 2026',
    image: '/images/indigenous_millet_farm.jpg',
    audioSampleName: 'Panta Pata: Sowing Rhythm of Deccan Women',
    description: 'Chennamma shares the traditional work song that teaches women farmers exactly which seeds should be sown in which sequence across the field rows.',
    transcript: `“Our songs are not just for entertainment during tired afternoons; they are agricultural textbooks set to music. 

When we sing the 'Navadhanya Song', the first stanza reminds us: 'Put the pearl millet on the high contour where the wind blows free; hide the red gram in the middle furrow so the roots find deep moisture; spread the little sesame on the edges to feed the field honeybees.'

If you forget the song, you make mistakes in the field. When modern agricultural agents came thirty years ago with hybrid seeds, they laughed at our songs. But when the big drought of 2002 dried all their tube wells, our nine-millet fields still yielded sweet bread for our children. The song knew what the drought could do, because the song was older than any drought.”`,
  },
  {
    id: 'story-4',
    title: 'Boiling the Golden Castor Seed in the Kutch Desert Winds',
    contributor: 'Khatri Abdul Gafur',
    contributorRole: 'Master Rogan Artisan (Age 64)',
    location: 'Nirona Village, Kutch District',
    state: 'Gujarat',
    category: 'Craft Lore',
    duration: '7 min 20 sec',
    recordedDate: 'Recorded February 2026',
    image: '/images/kalamkari_textile_art.jpg',
    audioSampleName: 'Clay Hearth Crackle & Castor Oil Boiling Chant',
    description: 'Master Abdul Gafur shares the memory of watching his grandfather boil castor oil outside Nirona village under star-filled desert skies, testing the molten resin with water drops.',
    transcript: `“When you boil castor oil for Rogan art, you cannot do it inside a house or near a roof. You walk outside the village boundaries into the open desert where the night winds carry the dense pungent steam away.

My grandfather used to sit by the iron cauldron for two full days and two nights. He never used a thermometer. He would dip a desert thorn into the simmering pot and touch a drop to cold well water. If the drop dissolved, it was not ready. If it formed a rubbery bead that stretched between his fingers like elastic amber honey, he would take the pot off the coals with bare sackcloth rags.

Today, tourists come to Nirona and say: ‘Why not use acrylic fabric paint from a tube? It takes ten seconds.’ I tell them: acrylic paint is dead plastic that sits on top of cloth like dried mud. Rogan is alive; it penetrates into the silk fibers, flexing with the garment for two hundred years without cracking. When you hold the stylus, you are continuing a breath that started four centuries ago.”`,
  },
  {
    id: 'story-5',
    title: 'When the Brahmaputra Floods: The Masks That Kept Our Faith Alive',
    contributor: 'Hemchandra Goswami',
    contributorRole: 'Satra Monk & Master Mask Carver (Age 58)',
    location: 'Natun Samaguri Satra, Majuli Island',
    state: 'Assam',
    category: 'Spiritual Arts',
    duration: '6 min 50 sec',
    recordedDate: 'Recorded January 2026',
    image: '/images/kondapalli_wooden_toys.jpg',
    audioSampleName: 'Bhaona Drum (Khol) Rhythm & Monk Chants',
    description: 'Satra monk Hemchandra Goswami describes how the monastic brotherhood carved masks through devastating river floods to ensure seasonal Bhaona theatricals never missed an autumn harvest.',
    transcript: `“The mighty Brahmaputra gives us life, and in monsoon anger, she takes away our land. Every ten years, the river bites a chunk of our monastery island away. In the great floods of 1998, waist-deep water entered our prayer hall.

Do you know what the monks did? We did not run to rescue our clothes or our brass pots. We climbed into the rafters and tied the sacred masks of Ravana, Garuda, and Narasimha to the highest bamboo beams. Those masks are not wooden toys. When an actor slips inside the hollow bamboo skull, he does not act—he steps aside so the archetypal story can speak to the village.

When the floodwaters receded, we scooped fresh alluvial silt left behind by the river and used it to mold new masks for the autumn Rasotsav. The river gives the clay, the bamboo grove gives the bones, and our faith gives the face. As long as young boys come to the Satra to learn the knife strokes, the island cannot sink.”`,
  },
];

export const INITIAL_CONTRIBUTIONS: ContributionSubmission[] = [
  {
    id: 'contrib-101',
    contributorName: 'Rameshwar Sharma',
    email: 'rameshwar.alwar@heritage-demo.org',
    state: 'Rajasthan',
    district: 'Alwar',
    village: 'Thanagazi',
    contributionType: 'Indigenous Knowledge',
    heritageName: 'Desi Lime Mortar & Clay Well Lining (Gud-Methi Chur)',
    whoPractices: 'Traditional Raj-Mistri village stone masons',
    isActivelyPracticed: 'Partially',
    areYouthLearning: 'Few',
    canTeach: 'Yes',
    description: 'Traditional masonry mortar mixed with jaggery syrup, fenugreek seeds, and wood ash for waterproofing ancient stepwells.',
    traditionalPractice: 'Hydrated lime slaked for 6 months is ground in bullock-drawn stone mills with boiled jaggery water, fenugreek paste, and marble dust.',
    culturalSignificance: 'Allowed stepwells and water tanks to remain crack-free and leak-proof for over four centuries.',
    preservationStatus: 'declining',
    permissionGranted: true,
    status: 'Community Verified',
    submittedAt: '2026-10-12 14:22',
    additionalInfo: 'My grandfather was a traditional raj-mistri (stone mason) who restored five stepwells in the 1970s.',
  },
  {
    id: 'contrib-102',
    contributorName: 'Subhadra Senapati',
    email: 'subhadra.puri@heritage-demo.org',
    state: 'Odisha',
    district: 'Puri',
    village: 'Raghurajpur',
    contributionType: 'Craft Technique',
    heritageName: 'Tala Patra Chitra (Palm Leaf Engraving)',
    whoPractices: 'Chitrakar artisan households',
    isActivelyPracticed: 'Yes',
    areYouthLearning: 'Few',
    canTeach: 'Yes',
    description: 'Delicate miniature engraving on seasoned palm leaves with iron styluses and lampblack pigment.',
    traditionalPractice: 'Dried palm leaves are soaked in turmeric water, sewn into scrolls, etched with an iron needle, and rubbed with black bean paste.',
    culturalSignificance: 'Preserved ancient mathematical manuscripts, horoscopes, and classical poetry before paper was introduced.',
    preservationStatus: 'declining',
    permissionGranted: true,
    status: 'Community Verified',
    submittedAt: '2026-10-09 11:05',
    additionalInfo: 'Verified craft guild demonstration entry.',
  },
];
