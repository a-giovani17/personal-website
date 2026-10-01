export interface PhotoItem {
  id: string
  title: string
  category: "architecture" | "editorial" | "documentary" | "landscape"
  categoryLabel: string
  location: string
  year: string
  aspectRatio: "3/2" | "4/5" | "1/1" | "16/9" | "2/3"
  src: string
  alt: string
  caption: string
  camera: string
  lens: string
  settings: string
  filmStock?: string
  replacementNote: string
}

export interface PricingTier {
  id: string
  title: string
  subtitle: string
  investment: string
  rateDetail: string
  deliverables: string[]
  timeline: string
  licensing: string
  recommendedFor: string
}

export interface PrintOption {
  size: string
  dimensions: string
  edition: string
  paper: string
  price: string
}

export interface PhotographerProfile {
  name: string
  title: string
  email: string
  location: string
  shortBio: string
  statement: string
  philosophy: string[]
  disciplines: string[]
  clients: string[]
  publications: string[]
  equipment: {
    cameras: string[]
    lenses: string[]
    mediums: string[]
  }
}

export const photographerProfile: PhotographerProfile = {
  name: "Alex Morgan",
  title: "Photographer & Visual Documentarian",
  email: "hello@example.com",
  location: "Jakarta, Indonesia — Available worldwide",
  shortBio:
    "Observational photographer working across architectural spaces, editorial portraiture, and quiet documentary studies. Working primarily with natural light, spatial geometry, and medium format film.",
  statement:
    "My work explores the intersection of human presence and constructed space. I look for moments of stillness in transitional environments—where light sculpts geometry, and shadows reveal texture. Whether documenting a building, a portrait, or a quiet urban intersection, my approach prioritizes patience, negative space, and honest tonality over spectacle.",
  philosophy: [
    "Natural and available light as the primary sculpting medium.",
    "Geometric discipline paired with organic human emotion.",
    "Physical materiality: honoring the texture of surfaces, film grain, and print paper.",
    "Restraint over excess: allowing negative space to breathe.",
  ],
  disciplines: [
    "Architectural & Interior Documentation",
    "Editorial & Environmental Portraiture",
    "Documentary & Cultural Essays",
    "Archival Fine Art Prints",
  ],
  clients: [
    "Atelier Studio Architecture",
    "Monolith Design Group",
    "Studio Sangiran",
    "Nusantara Heritage Foundation",
    "Verdant Urban Collective",
    "Forma Spatial Journal",
  ],
  publications: [
    "Spatial Inquiry Vol. 04",
    "Kinfolk Gallery Feature",
    "Monocle Southeast Asia Focus",
    "Architectural Archive Quarterly",
    "Cereal City Journal",
  ],
  equipment: {
    cameras: ["Hasselblad 503CW", "Leica M11-P", "Leica M6 (0.72)"],
    lenses: ["Carl Zeiss Planar 80mm f/2.8", "Summicron-M 35mm f/2 ASPH", "Elmarit-M 28mm f/2.8"],
    mediums: ["Kodak Tri-X 400", "Kodak Portra 400", "Ilford HP5 Plus", "DNG Digital Masters"],
  },
}

export const portfolioPhotos: PhotoItem[] = [
  {
    id: "arch-01",
    title: "Morning Geometry",
    category: "architecture",
    categoryLabel: "Architecture & Spaces",
    location: "Bandung, Indonesia",
    year: "2025",
    aspectRatio: "3/2",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    alt: "Geometric concrete structure bathed in angled morning sunlight",
    caption:
      "A study of cast concrete surfaces responding to the first thirty minutes of morning daylight. The acute angles cast deliberate shadow gradients across the courtyard plane.",
    camera: "Hasselblad 503CW",
    lens: "Carl Zeiss Planar 80mm f/2.8",
    settings: "1/125s · f/8 · ISO 100",
    filmStock: "Kodak Portra 160",
    replacementNote:
      "Replace with your signature architectural shot featuring strong geometric shadows, brutalist or contemporary structure, in horizontal orientation (3:2 ratio).",
  },
  {
    id: "edit-01",
    title: "Portrait of a Weaver",
    category: "editorial",
    categoryLabel: "Editorial & Portraits",
    location: "Yogyakarta, Indonesia",
    year: "2025",
    aspectRatio: "4/5",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    alt: "Editorial portrait of a woman in soft indirect studio light",
    caption:
      "Documenting Master Artisan Retno in her studio. Lit solely by northern indirect window exposure, capturing the relationship between craft and quiet concentration.",
    camera: "Leica M11-P",
    lens: "Summicron-M 50mm f/2",
    settings: "1/250s · f/2.8 · ISO 200",
    replacementNote:
      "Replace with an editorial portrait in vertical orientation (4:5 ratio) with natural, soft window lighting.",
  },
  {
    id: "doc-01",
    title: "Solitary Crossing at Dawn",
    category: "documentary",
    categoryLabel: "Documentary & Street",
    location: "Central Jakarta",
    year: "2024",
    aspectRatio: "3/2",
    src: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=80",
    alt: "Street scene with morning mist, city skyline silhouette and quiet human figure",
    caption:
      "Before the metropolitan rush begins: a solitary pedestrian traversing the overpass bridge as tropical morning mist settles between towers.",
    camera: "Leica M6",
    lens: "Summicron-M 35mm f/2 ASPH",
    settings: "1/60s · f/4 · ISO 400",
    filmStock: "Ilford HP5 Plus (pushed 1 stop)",
    replacementNote:
      "Replace with a documentary street photograph showing urban atmosphere, fog, or solitude at dawn/dusk.",
  },
  {
    id: "arch-02",
    title: "The Pavilion at Dusk",
    category: "architecture",
    categoryLabel: "Architecture & Spaces",
    location: "Kyoto, Japan",
    year: "2024",
    aspectRatio: "16/9",
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
    alt: "Minimalist timber pavilion reflection across still reflecting pond",
    caption:
      "Timber post-and-lintel structure mirrored in still water during the civil twilight transition. The warm interior amber balances against the cool indigo sky.",
    camera: "Hasselblad 503CW",
    lens: "Carl Zeiss Distagon 50mm f/4",
    settings: "2s · f/11 · ISO 100",
    filmStock: "Fujifilm Provia 100F",
    replacementNote:
      "Replace with a landscape-format architectural photograph featuring water reflections or twilight illumination (16:9 ratio).",
  },
  {
    id: "edit-02",
    title: "The Ceramicist's Hands",
    category: "editorial",
    categoryLabel: "Editorial & Portraits",
    location: "Ubud, Bali",
    year: "2025",
    aspectRatio: "1/1",
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    alt: "Close-up of artisan hands shaping stoneware clay on a potter's wheel",
    caption:
      "Detail of hand gestures and stoneware clay texture. Part of an ongoing long-term documentation of traditional and contemporary craft studios across the archipelago.",
    camera: "Leica M11-P",
    lens: "Apo-Summicron-M 75mm f/2 ASPH",
    settings: "1/500s · f/3.4 · ISO 400",
    replacementNote:
      "Replace with a square-format detail photo showing texture, craft, hands, or material tactile qualities.",
  },
  {
    id: "land-01",
    title: "Crater Rim Silence",
    category: "landscape",
    categoryLabel: "Nature & Landscapes",
    location: "Mount Bromo, East Java",
    year: "2024",
    aspectRatio: "3/2",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    alt: "Monochrome volcanic mountain ridge veiled in rising steam and fog",
    caption:
      "Volcanic ridges emerging from the morning inversion layer. Rendered in monochromatic tones to emphasize the stark sedimentary geological contours.",
    camera: "Hasselblad 503CW",
    lens: "Carl Zeiss Sonnar 150mm f/4",
    settings: "1/60s · f/11 · ISO 100",
    filmStock: "Kodak Tri-X 400",
    replacementNote:
      "Replace with a fine-art landscape photograph showing mist, mountains, or geological formations (3:2 ratio).",
  },
  {
    id: "arch-03",
    title: "Light Well No. 7",
    category: "architecture",
    categoryLabel: "Architecture & Spaces",
    location: "Jakarta, Indonesia",
    year: "2025",
    aspectRatio: "4/5",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    alt: "Vertical light well cutting through a minimalist interior wall",
    caption:
      "Commissioned documentation of the Dharmawangsa Residence. The vertical aperture channels a moving beam of illumination through the central double-height gallery.",
    camera: "Leica M11-P",
    lens: "Super-Elmar-M 21mm f/3.4 ASPH",
    settings: "1/125s · f/5.6 · ISO 100",
    replacementNote:
      "Replace with an interior architectural shot emphasizing light shafts, doorways, or ceiling apertures (4:5 ratio).",
  },
  {
    id: "edit-03",
    title: "Architect in Thought",
    category: "editorial",
    categoryLabel: "Editorial & Portraits",
    location: "South Jakarta",
    year: "2024",
    aspectRatio: "3/2",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
    alt: "Environmental portrait of an architect beside a draft model in natural sidelight",
    caption:
      "Commissioned by Archival Review for their annual monograph series. Photographed at table height with soft reflection from drafting tracing paper.",
    camera: "Leica M6",
    lens: "Summicron-M 50mm f/2",
    settings: "1/60s · f/2 · ISO 400",
    filmStock: "Kodak Tri-X 400",
    replacementNote:
      "Replace with an environmental portrait of a creator, architect, or collaborator in their working environment.",
  },
  {
    id: "doc-02",
    title: "Rain on Glazed Tile",
    category: "documentary",
    categoryLabel: "Documentary & Street",
    location: "Penang, Malaysia",
    year: "2024",
    aspectRatio: "1/1",
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
    alt: "Rain drops pooling on glazed ceramic shophouse tiles under street lamps",
    caption:
      "A brief tropical downpour washing heritage tiles in George Town. Captured during the fifteen minutes between rainfall and complete evaporation.",
    camera: "Leica M11-P",
    lens: "Summicron-M 35mm f/2 ASPH",
    settings: "1/125s · f/2.8 · ISO 800",
    replacementNote:
      "Replace with a street texture, wet weather study, or quiet urban detail (1:1 ratio).",
  },
  {
    id: "land-02",
    title: "Low Tide at Parangtritis",
    category: "landscape",
    categoryLabel: "Nature & Landscapes",
    location: "Yogyakarta Coast",
    year: "2024",
    aspectRatio: "16/9",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    alt: "Vast expanse of wet black sand reflecting a cloudless horizon at dusk",
    caption:
      "The mirror-like surface of wet black volcanic sand during the monthly spring low tide. The horizon line dissolves between sand, sea spray, and dusk.",
    camera: "Hasselblad 503CW",
    lens: "Carl Zeiss Distagon 50mm f/4",
    settings: "1/15s · f/16 · ISO 50",
    filmStock: "Fujifilm Velvia 50",
    replacementNote:
      "Replace with a panoramic coastal or desert horizon photograph (16:9 ratio).",
  },
  {
    id: "arch-04",
    title: "Shadows in the Colonnade",
    category: "architecture",
    categoryLabel: "Architecture & Spaces",
    location: "Surabaya, Indonesia",
    year: "2025",
    aspectRatio: "4/5",
    src: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
    alt: "Repetitive rhythmic stone columns casting deep parallel diagonal shadows",
    caption:
      "Rhythm and cadence created by sun elevation at 3:30 PM. The repeating columns establish a visual metronome through the corridor.",
    camera: "Leica M11-P",
    lens: "Elmarit-M 28mm f/2.8 ASPH",
    settings: "1/500s · f/8 · ISO 100",
    replacementNote:
      "Replace with an architectural study of repetition, columns, or linear shadow patterns.",
  },
  {
    id: "doc-03",
    title: "Market Preparation",
    category: "documentary",
    categoryLabel: "Documentary & Street",
    location: "Solo, Central Java",
    year: "2025",
    aspectRatio: "3/2",
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80",
    alt: "Morning market stall owner arranging fresh goods under soft filtered canopy light",
    caption:
      "At 4:45 AM, Pasar Gede. Quiet gestures before the market gates open to the public; shafts of ambient streetlight filtering through blue canvas tarps.",
    camera: "Leica M6",
    lens: "Summicron-M 35mm f/2 ASPH",
    settings: "1/30s · f/2 · ISO 800",
    filmStock: "Kodak Portra 800",
    replacementNote:
      "Replace with a documentary scene showing quiet morning labor, craft preparation, or human rhythm.",
  },
]

export const heroPhoto: PhotoItem = {
  id: "hero-featured",
  title: "Atelier Pavilion & Shadow Study",
  category: "architecture",
  categoryLabel: "Architecture & Spaces",
  location: "Bandung, West Java",
  year: "2025",
  aspectRatio: "16/9",
  src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85",
  alt: "Featured photograph: Warm architectural interior with deep angular natural shadows",
  caption:
    "Cover study: Spatial depth achieved through balanced exposure of natural morning raking light across raw lime plaster walls.",
  camera: "Hasselblad 503CW",
  lens: "Carl Zeiss Planar 80mm f/2.8",
  settings: "1/60s · f/8 · ISO 100",
  filmStock: "Kodak Portra 160",
  replacementNote:
    "Replace with your flagship signature photograph for the site hero (wide landscape orientation, 16:9 ratio, min 2000px wide).",
}

export const artistPortraitPhoto: PhotoItem = {
  id: "artist-portrait",
  title: "Alex Morgan in the Studio",
  category: "editorial",
  categoryLabel: "Artist Profile",
  location: "Jakarta Studio",
  year: "2025",
  aspectRatio: "4/5",
  src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80",
  alt: "Portrait of photographer Alex Morgan holding medium format camera",
  caption: "Photographer portrait captured in the studio with natural northern light.",
  camera: "Hasselblad 503CW",
  lens: "Carl Zeiss Planar 80mm f/2.8",
  settings: "1/125s · f/4 · ISO 200",
  replacementNote:
    "Replace with your own photographer portrait or self-portrait (vertical orientation, 4:5 ratio, min 1000px wide).",
}

export const pricingTiers: PricingTier[] = [
  {
    id: "editorial",
    title: "Editorial & Feature Assignments",
    subtitle: "Magazines, monographs, cultural institutions, and visual essays",
    investment: "Starting at $1,800",
    rateDetail: "Per assignment / day rate basis",
    deliverables: [
      "Pre-assignment creative briefing & moodboard alignment",
      "Full-day on-location photography (up to 8 hours)",
      "Curated proofing gallery delivered within 5 business days",
      "40–60 master-graded high-resolution digital files (TIFF & JPEG)",
      "Editorial publication rights across print & digital channels",
      "Archival raw capture storage for 5 years",
    ],
    timeline: "Initial proofs in 5 business days; final delivery in 12 days",
    licensing: "Editorial print & web publication rights included worldwide",
    recommendedFor: "Publishers, cultural organizations, and editorial art directors",
  },
  {
    id: "architectural",
    title: "Architectural & Spatial Documentation",
    subtitle: "Built projects, interior spaces, hospitality, and design studios",
    investment: "Starting at $2,400",
    rateDetail: "Per completed structure / 1–2 day shoot",
    deliverables: [
      "Site walkthrough & sun path / daylight angle survey",
      "Full dawn-to-dusk coverage (including morning, midday, twilight)",
      "Perspective correction & subtle architectural retouching",
      "30–45 finished master plates in full architectural resolution",
      "Both full-context spatial views and tactile detail vignettes",
      "Commercial licensing for architects, interior designers, and builders",
    ],
    timeline: "Proofing gallery in 7 business days; master retouches in 14 days",
    licensing: "Architect & design team portfolio + award submission rights included",
    recommendedFor: "Architecture practices, interior architects, and landscape studios",
  },
  {
    id: "portraits",
    title: "Artist & Environmental Portraiture",
    subtitle: "Practitioners, craftspeople, authors, and leadership profiles",
    investment: "Starting at $950",
    rateDetail: "Half-day session on location or studio",
    deliverables: [
      "Intimate, collaborative consultation on setting and tone",
      "3-hour dedicated sitting in natural light environment",
      "Medium format film and high-resolution digital captures",
      "15–20 finely retouched portrait plates",
      "Full personal, press, and monograph usage permissions",
      "Two 8×10-inch archival pigment exhibition contact prints",
    ],
    timeline: "Proof selection in 4 business days; master files in 8 days",
    licensing: "Personal branding, press, monograph, and promotional use",
    recommendedFor: "Artists, writers, architects, founders, and creative directors",
  },
]

export const printOptions: PrintOption[] = [
  {
    size: "Collector Edition A3",
    dimensions: "297 × 420 mm (11.7 × 16.5 in)",
    edition: "Limited edition of 25",
    paper: "Hahnemühle Photo Rag 308gsm 100% cotton",
    price: "$280",
  },
  {
    size: "Exhibition Edition A2",
    dimensions: "420 × 594 mm (16.5 × 23.4 in)",
    edition: "Limited edition of 15",
    paper: "Hahnemühle Bamboo 290gsm matte archival",
    price: "$520",
  },
  {
    size: "Grand Collector A1",
    dimensions: "594 × 841 mm (23.4 × 33.1 in)",
    edition: "Limited edition of 7",
    paper: "Canson Infinity Platine Fibre Rag 310gsm",
    price: "$980",
  },
]

export const commissionInclusions = [
  {
    title: "Direct Creative Partnership",
    description:
      "Every project is personally photographed and developed by Alex Morgan. No junior assistants or uncredited substitutes.",
  },
  {
    title: "Archival Color Science",
    description:
      "Tonal grading crafted individually for each image to honor natural ambient light and material textures without trendy filters.",
  },
  {
    title: "Transparent Usage Rights",
    description:
      "Plain-language licensing agreements tailored to your actual distribution needs, without surprise renewal fees.",
  },
  {
    title: "Perpetual Archive Safety",
    description:
      "Dual off-site encrypted backups of both raw negative files and finished masters maintained for a minimum of five years.",
  },
]

// All placeholder image references across the whole website for the user's checklist
export const placeholderRegistry = [
  {
    id: heroPhoto.id,
    title: heroPhoto.title,
    locationInSite: "Homepage Hero Section (Top banner)",
    aspectRatio: "16:9 Landscape",
    recommendedSize: "2000 × 1125 px minimum (sRGB or AdobeRGB)",
    codeLocation: "lib/portfolio-data.ts -> heroPhoto",
    currentSrc: heroPhoto.src,
    description: heroPhoto.replacementNote,
  },
  {
    id: artistPortraitPhoto.id,
    title: artistPortraitPhoto.title,
    locationInSite: "About Section (Photographer Profile)",
    aspectRatio: "4:5 Vertical",
    recommendedSize: "1200 × 1500 px minimum",
    codeLocation: "lib/portfolio-data.ts -> artistPortraitPhoto",
    currentSrc: artistPortraitPhoto.src,
    description: artistPortraitPhoto.replacementNote,
  },
  ...portfolioPhotos.map((photo, index) => ({
    id: photo.id,
    title: photo.title,
    locationInSite: `Gallery Item #${index + 1} (${photo.categoryLabel})`,
    aspectRatio: photo.aspectRatio,
    recommendedSize:
      photo.aspectRatio === "3/2"
        ? "1800 × 1200 px"
        : photo.aspectRatio === "4/5"
          ? "1440 × 1800 px"
          : photo.aspectRatio === "1/1"
            ? "1500 × 1500 px"
            : "1920 × 1080 px",
    codeLocation: `lib/portfolio-data.ts -> portfolioPhotos[${index}]`,
    currentSrc: photo.src,
    description: photo.replacementNote,
  })),
]
