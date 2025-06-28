const { MongoClient, ObjectId } = require('mongodb');

// MongoDB connection string - replace with your actual connection string
const MONGODB_URI = 'mongodb://localhost:27017/LaptopTribeProject';

// Manufacturers data
const manufacturers = [
  {
    _id: new ObjectId(),
    name: "Apple",
    slug: "apple",
    displayName: "Apple Inc.",
    rating: 9.2,
    totalModels: 0,
    activeModels: 0,
    popularity: 95,
    logo: "/images/logos/apple.png",
    website: "https://apple.com",
    founded: new Date("1976-04-01"),
    headquarters: "Cupertino, CA",
    marketShare: 8.5,
    specialties: ["Design", "Premium", "Creative"],
    isActive: true,
    metadata: {
      totalReviews: 15420,
      avgUserRating: 4.6,
      priceRange: { min: 999, max: 6999 }
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    name: "Dell",
    slug: "dell",
    displayName: "Dell Technologies",
    rating: 8.5,
    totalModels: 0,
    activeModels: 0,
    popularity: 88,
    logo: "/images/logos/dell.png",
    website: "https://dell.com",
    founded: new Date("1984-02-01"),
    headquarters: "Round Rock, TX",
    marketShare: 17.2,
    specialties: ["Business", "Gaming", "Workstations"],
    isActive: true,
    metadata: {
      totalReviews: 23150,
      avgUserRating: 4.3,
      priceRange: { min: 299, max: 4999 }
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    name: "HP",
    slug: "hp",
    displayName: "HP Inc.",
    rating: 8.2,
    totalModels: 0,
    activeModels: 0,
    popularity: 85,
    logo: "/images/logos/hp.png",
    website: "https://hp.com",
    founded: new Date("1939-01-01"),
    headquarters: "Palo Alto, CA",
    marketShare: 22.1,
    specialties: ["Business", "Budget", "All-in-One"],
    isActive: true,
    metadata: {
      totalReviews: 19850,
      avgUserRating: 4.2,
      priceRange: { min: 249, max: 3999 }
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    name: "Lenovo",
    slug: "lenovo",
    displayName: "Lenovo Group",
    rating: 8.7,
    totalModels: 0,
    activeModels: 0,
    popularity: 82,
    logo: "/images/logos/lenovo.png",
    website: "https://lenovo.com",
    founded: new Date("1984-11-01"),
    headquarters: "Beijing, China",
    marketShare: 25.1,
    specialties: ["ThinkPad", "Business", "Innovation"],
    isActive: true,
    metadata: {
      totalReviews: 18940,
      avgUserRating: 4.4,
      priceRange: { min: 329, max: 5999 }
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    name: "ASUS",
    slug: "asus",
    displayName: "ASUS Computer International",
    rating: 8.4,
    totalModels: 0,
    activeModels: 0,
    popularity: 78,
    logo: "/images/logos/asus.png",
    website: "https://asus.com",
    founded: new Date("1989-04-02"),
    headquarters: "Taipei, Taiwan",
    marketShare: 6.8,
    specialties: ["Gaming", "ROG", "ZenBook"],
    isActive: true,
    metadata: {
      totalReviews: 12750,
      avgUserRating: 4.3,
      priceRange: { min: 399, max: 4499 }
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    name: "Acer",
    slug: "acer",
    displayName: "Acer Inc.",
    rating: 7.8,
    totalModels: 0,
    activeModels: 0,
    popularity: 72,
    logo: "/images/logos/acer.png",
    website: "https://acer.com",
    founded: new Date("1976-08-01"),
    headquarters: "New Taipei, Taiwan",
    marketShare: 6.2,
    specialties: ["Budget", "Gaming", "Chromebooks"],
    isActive: true,
    metadata: {
      totalReviews: 9540,
      avgUserRating: 4.0,
      priceRange: { min: 199, max: 2999 }
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    name: "MSI",
    slug: "msi",
    displayName: "Micro-Star International",
    rating: 8.1,
    totalModels: 0,
    activeModels: 0,
    popularity: 69,
    logo: "/images/logos/msi.png",
    website: "https://msi.com",
    founded: new Date("1986-08-04"),
    headquarters: "New Taipei, Taiwan",
    marketShare: 2.8,
    specialties: ["Gaming", "Content Creation", "High Performance"],
    isActive: true,
    metadata: {
      totalReviews: 7820,
      avgUserRating: 4.2,
      priceRange: { min: 699, max: 5999 }
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Helper function to get manufacturer by name
const getManufacturer = (name) => manufacturers.find(m => m.name === name);

// Laptop data
const laptops = [
  // Apple MacBooks
  {
    _id: new ObjectId(),
    manufacturer: getManufacturer("Apple")._id,
    manufacturerName: "Apple",
    model: "MacBook Air M2",
    series: "MacBook Air",
    fullName: "Apple MacBook Air 13-inch M2",
    slug: "apple-macbook-air-13-m2",
    sku: "21CB00EEUS",
    processor: {
      brand: "Intel",
      model: "Core i7-1260P",
      generation: "12th Gen",
      cores: 12,
      threads: 16,
      baseSpeed: 2.1,
      maxSpeed: 4.7,
      cache: "18MB"
    },
    memory: {
      size: 16,
      type: "LPDDR5",
      speed: 5200,
      slots: 0,
      maxCapacity: 32,
      upgradeable: false
    },
    storage: [{
      type: "SSD",
      capacity: 512,
      interface: "NVMe",
      brand: "Samsung",
      speed: "PCIe 4.0"
    }],
    display: {
      size: 14,
      resolution: { width: 1920, height: 1200, name: "WUXGA" },
      technology: "IPS",
      brightness: 400,
      colorGamut: "100% sRGB",
      refreshRate: 60,
      touchscreen: false,
      glossy: false
    },
    graphics: {
      integrated: { brand: "Intel", model: "Iris Xe Graphics" },
      dedicated: null
    },
    dimensions: { length: 315.6, width: 222.5, height: 14.9, weight: 1.12 },
    battery: { capacity: 57, cells: 4, life: 12, chargingSpeed: "65W USB-C" },
    ports: [
      { type: "USB-A", version: "3.2", count: 2, features: [] },
      { type: "USB-C", version: "4.0", count: 2, features: ["Thunderbolt 4", "Power Delivery"] },
      { type: "HDMI", version: "2.0", count: 1, features: [] },
      { type: "3.5mm", version: "", count: 1, features: ["Audio Combo"] }
    ],
    wireless: { wifi: "Wi-Fi 6E", bluetooth: "Bluetooth 5.1", cellular: "Optional 5G" },
    category: "Business",
    targetAudience: ["Business Professionals", "Executives", "Remote Workers"],
    operatingSystem: "Windows 11 Pro",
    features: ["TrackPoint", "ThinkShutter Camera Privacy", "Fingerprint Reader", "MIL-STD-810H Tested"],
    msrp: 1929,
    currentPrice: { min: 1729, max: 1929, lastUpdated: new Date() },
    description: "The legendary ThinkPad with latest Intel processors, delivering unmatched business laptop experience.",
    keyFeatures: ["14-inch display", "Legendary keyboard", "Military-grade durability", "All-day battery"],
    pros: ["Excellent keyboard", "Lightweight", "Great build quality", "Long battery life"],
    cons: ["Expensive", "Conservative design", "Limited gaming capability"],
    images: [
      { url: "/images/laptops/thinkpad-x1-carbon-main.jpg", alt: "ThinkPad X1 Carbon main view", type: "main", order: 1 }
    ],
    releaseDate: new Date("2022-03-29"),
    discontinuedDate: null,
    isActive: true,
    popularity: 87,
    searchKeywords: ["lenovo", "thinkpad", "business", "professional", "lightweight"],
    analytics: { views: 31240, clicks: 5670, conversions: 189, lastViewed: new Date() },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    manufacturer: getManufacturer("Lenovo")._id,
    manufacturerName: "Lenovo",
    model: "Legion 5 Pro",
    series: "Legion",
    fullName: "Lenovo Legion 5 Pro 16IAH7H",
    slug: "lenovo-legion-5-pro-16iah7h",
    sku: "82RF00GMUS",
    processor: {
      brand: "Intel",
      model: "Core i7-12700H",
      generation: "12th Gen",
      cores: 14,
      threads: 20,
      baseSpeed: 2.3,
      maxSpeed: 4.7,
      cache: "24MB"
    },
    memory: {
      size: 16,
      type: "DDR5",
      speed: 4800,
      slots: 2,
      maxCapacity: 32,
      upgradeable: true
    },
    storage: [{
      type: "SSD",
      capacity: 512,
      interface: "NVMe",
      brand: "Western Digital",
      speed: "PCIe 4.0"
    }],
    display: {
      size: 16,
      resolution: { width: 2560, height: 1600, name: "WQXGA" },
      technology: "IPS",
      brightness: 300,
      colorGamut: "100% sRGB",
      refreshRate: 165,
      touchscreen: false,
      glossy: false
    },
    graphics: {
      integrated: { brand: "Intel", model: "UHD Graphics" },
      dedicated: { brand: "NVIDIA", model: "RTX 3070", memory: 8, memoryType: "GDDR6" }
    },
    dimensions: { length: 355.5, width: 262.1, height: 26.85, weight: 2.45 },
    battery: { capacity: 80, cells: 4, life: 5, chargingSpeed: "300W AC Adapter" },
    ports: [
      { type: "USB-A", version: "3.2", count: 4, features: [] },
      { type: "USB-C", version: "3.2", count: 1, features: ["DisplayPort", "Power Delivery"] },
      { type: "HDMI", version: "2.1", count: 1, features: [] },
      { type: "Ethernet", version: "RJ45", count: 1, features: [] },
      { type: "3.5mm", version: "", count: 1, features: ["Audio Combo"] }
    ],
    wireless: { wifi: "Wi-Fi 6", bluetooth: "Bluetooth 5.1", cellular: null },
    category: "Gaming",
    targetAudience: ["Gamers", "Content Creators", "Enthusiasts"],
    operatingSystem: "Windows 11 Home",
    features: ["Legion Coldfront 4.0", "RGB Backlit Keyboard", "Nahimic Audio", "Legion AI Engine"],
    msrp: 1699,
    currentPrice: { min: 1499, max: 1699, lastUpdated: new Date() },
    description: "A powerful gaming laptop with high-refresh display and advanced cooling for serious gaming.",
    keyFeatures: ["RTX 3070 graphics", "165Hz display", "Advanced cooling", "16-inch screen"],
    pros: ["Excellent gaming performance", "Great display", "Good cooling", "Reasonable price"],
    cons: ["Heavy", "Poor battery life", "Loud fans under load"],
    images: [
      { url: "/images/laptops/legion-5-pro-main.jpg", alt: "Legion 5 Pro main view", type: "main", order: 1 }
    ],
    releaseDate: new Date("2022-05-17"),
    discontinuedDate: null,
    isActive: true,
    popularity: 81,
    searchKeywords: ["lenovo", "legion", "gaming", "rtx", "3070", "high refresh"],
    analytics: { views: 38540, clicks: 7230, conversions: 298, lastViewed: new Date() },
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ASUS Laptops
  // ASUS ZenBook 14 OLED
{
  _id: new ObjectId(),
  manufacturer: getManufacturer("ASUS")._id,
  manufacturerName: "ASUS",
  model: "ZenBook 14 OLED",
  series: "ZenBook",
  fullName: "ASUS ZenBook 14 OLED UX3402ZA",
  slug: "asus-zenbook-14-oled-ux3402za",
  sku: "UX3402ZA-KM521W",
  processor: {
    brand: "Intel",
    model: "Core i7-1260P",
    generation: "12th Gen",
    cores: 12,
    threads: 16,
    baseSpeed: 2.1,
    maxSpeed: 4.7,
    cache: "18MB"
  },
  memory: {
    size: 16,
    type: "LPDDR5",
    speed: 5200,
    slots: 0,
    maxCapacity: 16,
    upgradeable: false
  },
  storage: [{
    type: "SSD",
    capacity: 512,
    interface: "NVMe",
    brand: "Samsung",
    speed: "PCIe 4.0"
  }],
  display: {
    size: 14,
    resolution: { width: 2880, height: 1800, name: "2.8K OLED" },
    technology: "OLED",
    brightness: 550,
    colorGamut: "100% DCI-P3",
    refreshRate: 90,
    touchscreen: true,
    glossy: true
  },
  graphics: {
    integrated: { brand: "Intel", model: "Iris Xe Graphics" },
    dedicated: null
  },
  dimensions: { length: 312.4, width: 221.4, height: 16.9, weight: 1.39 },
  battery: { capacity: 75, cells: 4, life: 9, chargingSpeed: "65W USB-C" },
  ports: [
    { type: "USB-A", version: "3.2", count: 1, features: [] },
    { type: "USB-C", version: "4.0", count: 2, features: ["Thunderbolt 4", "Power Delivery"] },
    { type: "HDMI", version: "2.0", count: 1, features: [] },
    { type: "3.5mm", version: "", count: 1, features: ["Audio Combo"] }
  ],
  wireless: { wifi: "Wi-Fi 6E", bluetooth: "Bluetooth 5.0", cellular: null },
  category: "Ultrabook",
  targetAudience: ["Professionals", "Content Creators", "Students"],
  operatingSystem: "Windows 11 Home",
  features: ["OLED HDR Display", "NumberPad 2.0", "Harman Kardon Audio", "ErgoLift Hinge"],
  msrp: 1299,
  currentPrice: { min: 1149, max: 1299, lastUpdated: new Date() },
  description: "A stunning ultrabook with vibrant OLED display and premium design for professionals and creators.",
  keyFeatures: ["2.8K OLED display", "12th Gen Intel", "Premium design", "Long battery life"],
  pros: ["Gorgeous OLED display", "Great performance", "Premium build", "Good value"],
  cons: ["Limited upgradability", "Glossy screen", "No dedicated graphics"],
  images: [
    { url: "/images/laptops/asus-zenbook-14-oled-main.jpg", alt: "ASUS ZenBook 14 OLED main view", type: "main", order: 1 }
  ],
  releaseDate: new Date("2022-06-14"),
  discontinuedDate: null,
  isActive: true,
  popularity: 78,
  searchKeywords: ["asus", "zenbook", "oled", "ultrabook", "professional"],
  analytics: { views: 23450, clicks: 4560, conversions: 123, lastViewed: new Date() },
  createdAt: new Date(),
  updatedAt: new Date()
},

// MacBook Air M2
{
  _id: new ObjectId(),
  manufacturer: getManufacturer("Apple")._id,
  manufacturerName: "Apple",
  model: "MacBook Air",
  series: "MacBook Air",
  fullName: "Apple MacBook Air 13-inch M2",
  slug: "apple-macbook-air-13-m2",
  sku: "MLY33LL/A",
  processor: {
    brand: "Apple",
    model: "M2",
    generation: "M2",
    cores: 8,
    threads: 8,
    baseSpeed: 3.49,
    maxSpeed: 3.49,
    cache: "16MB"
  },
  memory: {
    size: 8,
    type: "LPDDR5",
    speed: 6400,
    slots: 0,
    maxCapacity: 24,
    upgradeable: false
  },
  storage: [{
    type: "SSD",
    capacity: 256,
    interface: "NVMe",
    brand: "Apple",
    speed: "PCIe 4.0"
  }],
  display: {
    size: 13.6,
    resolution: { width: 2560, height: 1664, name: "Liquid Retina" },
    technology: "IPS",
    brightness: 500,
    colorGamut: "P3 Wide Color",
    refreshRate: 60,
    touchscreen: false,
    glossy: false
  },
  graphics: {
    integrated: { brand: "Apple", model: "M2 8-core GPU" },
    dedicated: null
  },
  dimensions: { length: 304, width: 215, height: 11.3, weight: 1.24 },
  battery: { capacity: 52.6, cells: 4, life: 18, chargingSpeed: "35W MagSafe 3" },
  ports: [
    { type: "USB-C", version: "4.0", count: 2, features: ["Thunderbolt 4", "Power Delivery"] },
    { type: "3.5mm", version: "", count: 1, features: ["Headphone Jack"] }
  ],
  wireless: { wifi: "Wi-Fi 6", bluetooth: "Bluetooth 5.0", cellular: null },
  category: "Ultrabook",
  targetAudience: ["Students", "Professionals", "Content Creators"],
  operatingSystem: "macOS Ventura",
  features: ["Touch ID", "Backlit Magic Keyboard", "Force Touch Trackpad", "1080p FaceTime HD Camera"],
  msrp: 1199,
  currentPrice: { min: 1099, max: 1199, lastUpdated: new Date() },
  description: "The redesigned MacBook Air with M2 chip delivers incredible performance and all-day battery life in a strikingly thin design.",
  keyFeatures: ["M2 chip performance", "All-day battery life", "Liquid Retina display", "Silent fanless design"],
  pros: ["Excellent performance", "Great battery life", "Premium build quality", "Silent operation"],
  cons: ["Limited ports", "Not upgradeable", "No touchscreen"],
  images: [
    { url: "/images/laptops/macbook-air-m2-main.jpg", alt: "MacBook Air M2 main view", type: "main", order: 1 },
    { url: "/images/laptops/macbook-air-m2-angle.jpg", alt: "MacBook Air M2 side view", type: "angle", order: 2 }
  ],
  releaseDate: new Date("2022-07-15"),
  discontinuedDate: null,
  isActive: true,
  popularity: 95,
  searchKeywords: ["macbook", "air", "m2", "apple", "ultrabook", "premium"],
  analytics: { views: 45230, clicks: 8940, conversions: 234, lastViewed: new Date() },
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
    _id: new ObjectId(),
    manufacturer: getManufacturer("Apple")._id,
    manufacturerName: "Apple",
    model: "MacBook Pro 14-inch M2 Pro",
    series: "MacBook Pro",
    fullName: "Apple MacBook Pro 14-inch M2 Pro",
    slug: "apple-macbook-pro-14-m2-pro",
    sku: "MPHF3LL/A",
    processor: {
      brand: "Apple",
      model: "M2 Pro",
      generation: "M2 Pro",
      cores: 10,
      threads: 10,
      baseSpeed: 3.49,
      maxSpeed: 3.49,
      cache: "24MB"
    },
    memory: {
      size: 16,
      type: "LPDDR5",
      speed: 6400,
      slots: 0,
      maxCapacity: 96,
      upgradeable: false
    },
    storage: [{
      type: "SSD",
      capacity: 512,
      interface: "NVMe",
      brand: "Apple",
      speed: "PCIe 4.0"
    }],
    display: {
      size: 14.2,
      resolution: { width: 3024, height: 1964, name: "Liquid Retina XDR" },
      technology: "Mini-LED",
      brightness: 1000,
      colorGamut: "P3 Wide Color",
      refreshRate: 120,
      touchscreen: false,
      glossy: false
    },
    graphics: {
      integrated: { brand: "Apple", model: "M2 Pro 16-core GPU" },
      dedicated: null
    },
    dimensions: { length: 312.6, width: 221.2, height: 15.5, weight: 1.6 },
    battery: { capacity: 70, cells: 6, life: 17, chargingSpeed: "67W USB-C" },
    ports: [
      { type: "USB-C", version: "4.0", count: 3, features: ["Thunderbolt 4", "Power Delivery"] },
      { type: "HDMI", version: "2.1", count: 1, features: [] },
      { type: "3.5mm", version: "", count: 1, features: ["Headphone Jack"] },
      { type: "MagSafe", version: "3", count: 1, features: ["Magnetic Charging"] }
    ],
    wireless: { wifi: "Wi-Fi 6E", bluetooth: "Bluetooth 5.3", cellular: null },
    category: "Professional",
    targetAudience: ["Professionals", "Content Creators", "Developers"],
    operatingSystem: "macOS Ventura",
    features: ["Touch ID", "Backlit Magic Keyboard", "Force Touch Trackpad", "1080p FaceTime HD Camera", "Studio-quality mics"],
    msrp: 1999,
    currentPrice: { min: 1899, max: 1999, lastUpdated: new Date() },
    description: "The 14-inch MacBook Pro with M2 Pro delivers groundbreaking performance for pro workflows in a compact design.",
    keyFeatures: ["M2 Pro chip", "Liquid Retina XDR display", "Professional connectivity", "All-day battery"],
    pros: ["Incredible performance", "Stunning display", "Great port selection", "Professional build quality"],
    cons: ["Expensive", "Heavy for 14-inch", "No Face ID"],
    images: [
      { url: "/images/laptops/macbook-pro-14-m2-main.jpg", alt: "MacBook Pro 14 M2 main view", type: "main", order: 1 }
    ],
    releaseDate: new Date("2023-01-17"),
    discontinuedDate: null,
    isActive: true,
    popularity: 88,
    searchKeywords: ["macbook", "pro", "m2", "professional", "content creation"],
    analytics: { views: 32450, clicks: 6230, conversions: 187, lastViewed: new Date() },
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Dell Laptops
  {
    _id: new ObjectId(),
    manufacturer: getManufacturer("Dell")._id,
    manufacturerName: "Dell",
    model: "XPS 13 Plus",
    series: "XPS",
    fullName: "Dell XPS 13 Plus 9320",
    slug: "dell-xps-13-plus-9320",
    sku: "XPS9320-7408SLV-PUS",
    processor: {
      brand: "Intel",
      model: "Core i7-1260P",
      generation: "12th Gen",
      cores: 12,
      threads: 16,
      baseSpeed: 2.1,
      maxSpeed: 4.7,
      cache: "18MB"
    },
    memory: {
      size: 16,
      type: "LPDDR5",
      speed: 5200,
      slots: 0,
      maxCapacity: 32,
      upgradeable: false
    },
    storage: [{
      type: "SSD",
      capacity: 512,
      interface: "NVMe",
      brand: "Samsung",
      speed: "PCIe 4.0"
    }],
    display: {
      size: 13.4,
      resolution: { width: 3840, height: 2400, name: "4K UHD+" },
      technology: "OLED",
      brightness: 400,
      colorGamut: "100% DCI-P3",
      refreshRate: 60,
      touchscreen: true,
      glossy: true
    },
    graphics: {
      integrated: { brand: "Intel", model: "Iris Xe Graphics" },
      dedicated: null
    },
    dimensions: { length: 295.3, width: 199.04, height: 15.28, weight: 1.26 },
    battery: { capacity: 55, cells: 4, life: 8, chargingSpeed: "60W USB-C" },
    ports: [
      { type: "USB-C", version: "4.0", count: 2, features: ["Thunderbolt 4", "Power Delivery"] }
    ],
    wireless: { wifi: "Wi-Fi 6E", bluetooth: "Bluetooth 5.2", cellular: null },
    category: "Ultrabook",
    targetAudience: ["Professionals", "Executives", "Content Creators"],
    operatingSystem: "Windows 11 Pro",
    features: ["Backlit Keyboard", "Windows Hello", "Precision Trackpad", "Haptic Feedback Touchpad"],
    msrp: 1699,
    currentPrice: { min: 1549, max: 1699, lastUpdated: new Date() },
    description: "The most powerful 13-inch XPS laptop ever, featuring a stunning OLED display and innovative design.",
    keyFeatures: ["4K OLED touchscreen", "12th Gen Intel processors", "Premium materials", "Invisible haptic trackpad"],
    pros: ["Gorgeous OLED display", "Premium build", "Great performance", "Innovative design"],
    cons: ["Limited ports", "Expensive", "Learning curve for new interface"],
    images: [
      { url: "/images/laptops/dell-xps-13-plus-main.jpg", alt: "Dell XPS 13 Plus main view", type: "main", order: 1 }
    ],
    releaseDate: new Date("2022-03-17"),
    discontinuedDate: null,
    isActive: true,
    popularity: 82,
    searchKeywords: ["dell", "xps", "ultrabook", "oled", "premium", "business"],
    analytics: { views: 28540, clicks: 4920, conversions: 156, lastViewed: new Date() },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    manufacturer: getManufacturer("Dell")._id,
    manufacturerName: "Dell",
    model: "G15 Gaming Laptop",
    series: "G Series",
    fullName: "Dell G15 5520 Gaming Laptop",
    slug: "dell-g15-5520-gaming",
    sku: "G15-5520-8531BLK-PUS",
    processor: {
      brand: "Intel",
      model: "Core i7-12700H",
      generation: "12th Gen",
      cores: 14,
      threads: 20,
      baseSpeed: 2.3,
      maxSpeed: 4.7,
      cache: "24MB"
    },
    memory: {
      size: 16,
      type: "DDR5",
      speed: 4800,
      slots: 2,
      maxCapacity: 32,
      upgradeable: true
    },
    storage: [{
      type: "SSD",
      capacity: 512,
      interface: "NVMe",
      brand: "Western Digital",
      speed: "PCIe 4.0"
    }],
    display: {
      size: 15.6,
      resolution: { width: 1920, height: 1080, name: "Full HD" },
      technology: "IPS",
      brightness: 250,
      colorGamut: "45% NTSC",
      refreshRate: 120,
      touchscreen: false,
      glossy: false
    },
    graphics: {
      integrated: { brand: "Intel", model: "UHD Graphics" },
      dedicated: { brand: "NVIDIA", model: "RTX 3060", memory: 6, memoryType: "GDDR6" }
    },
    dimensions: { length: 357.26, width: 272.11, height: 26.9, weight: 2.81 },
    battery: { capacity: 56, cells: 3, life: 6, chargingSpeed: "180W AC Adapter" },
    ports: [
      { type: "USB-A", version: "3.2", count: 3, features: [] },
      { type: "USB-C", version: "3.2", count: 1, features: ["DisplayPort", "Power Delivery"] },
      { type: "HDMI", version: "2.1", count: 1, features: [] },
      { type: "Ethernet", version: "RJ45", count: 1, features: [] },
      { type: "3.5mm", version: "", count: 1, features: ["Audio Combo"] }
    ],
    wireless: { wifi: "Wi-Fi 6", bluetooth: "Bluetooth 5.2", cellular: null },
    category: "Gaming",
    targetAudience: ["Gamers", "Students", "Content Creators"],
    operatingSystem: "Windows 11 Home",
    features: ["RGB Backlit Keyboard", "Dual Fan Cooling", "Game Shift Technology", "Nahimic 3D Audio"],
    msrp: 1299,
    currentPrice: { min: 1149, max: 1299, lastUpdated: new Date() },
    description: "A powerful gaming laptop that delivers high-performance gaming and multitasking at an accessible price.",
    keyFeatures: ["RTX 3060 graphics", "120Hz display", "Advanced cooling", "Game-focused design"],
    pros: ["Great gaming performance", "Good value", "Upgradeable RAM", "Solid build quality"],
    cons: ["Mediocre battery life", "Somewhat heavy", "Display could be brighter"],
    images: [
      { url: "/images/laptops/dell-g15-gaming-main.jpg", alt: "Dell G15 Gaming Laptop main view", type: "main", order: 1 }
    ],
    releaseDate: new Date("2022-04-26"),
    discontinuedDate: null,
    isActive: true,
    popularity: 79,
    searchKeywords: ["dell", "gaming", "rtx", "3060", "budget gaming", "g15"],
    analytics: { views: 35640, clicks: 7230, conversions: 298, lastViewed: new Date() },
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // HP Laptops
  {
    _id: new ObjectId(),
    manufacturer: getManufacturer("HP")._id,
    manufacturerName: "HP",
    model: "Spectre x360 14",
    series: "Spectre",
    fullName: "HP Spectre x360 14-ef0023dx",
    slug: "hp-spectre-x360-14-ef0023dx",
    sku: "13.5-ef0023dx",
    processor: {
      brand: "Intel",
      model: "Core i7-1255U",
      generation: "12th Gen",
      cores: 10,
      threads: 12,
      baseSpeed: 1.7,
      maxSpeed: 4.7,
      cache: "12MB"
    },
    memory: {
      size: 16,
      type: "LPDDR4x",
      speed: 4266,
      slots: 0,
      maxCapacity: 16,
      upgradeable: false
    },
    storage: [{
      type: "SSD",
      capacity: 1000,
      interface: "NVMe",
      brand: "Samsung",
      speed: "PCIe 4.0"
    }],
    display: {
      size: 13.5,
      resolution: { width: 3000, height: 2000, name: "3K2K" },
      technology: "OLED",
      brightness: 400,
      colorGamut: "100% DCI-P3",
      refreshRate: 60,
      touchscreen: true,
      glossy: true
    },
    graphics: {
      integrated: { brand: "Intel", model: "Iris Xe Graphics" },
      dedicated: null
    },
    dimensions: { length: 298.45, width: 220.98, height: 17, weight: 1.36 },
    battery: { capacity: 66, cells: 4, life: 10, chargingSpeed: "65W USB-C" },
    ports: [
      { type: "USB-A", version: "3.2", count: 1, features: [] },
      { type: "USB-C", version: "4.0", count: 2, features: ["Thunderbolt 4", "Power Delivery"] },
      { type: "3.5mm", version: "", count: 1, features: ["Audio Combo"] },
      { type: "MicroSD", version: "", count: 1, features: [] }
    ],
    wireless: { wifi: "Wi-Fi 6E", bluetooth: "Bluetooth 5.3", cellular: null },
    category: "2-in-1",
    targetAudience: ["Professionals", "Creatives", "Business Users"],
    operatingSystem: "Windows 11 Home",
    features: ["360-degree hinge", "HP Pen included", "Bang & Olufsen Audio", "IR Camera", "Fingerprint Reader"],
    msrp: 1599,
    currentPrice: { min: 1399, max: 1599, lastUpdated: new Date() },
    description: "A premium 2-in-1 laptop with stunning OLED display and versatile design for work and creativity.",
    keyFeatures: ["3K OLED touchscreen", "360° convertible design", "Premium materials", "All-day battery"],
    pros: ["Beautiful OLED display", "Versatile 2-in-1 design", "Premium build quality", "Good performance"],
    cons: ["Expensive", "Limited ports", "Glossy screen shows fingerprints"],
    images: [
      { url: "/images/laptops/hp-spectre-x360-main.jpg", alt: "HP Spectre x360 main view", type: "main", order: 1 }
    ],
    releaseDate: new Date("2022-05-10"),
    discontinuedDate: null,
    isActive: true,
    popularity: 75,
    searchKeywords: ["hp", "spectre", "2-in-1", "oled", "convertible", "premium"],
    analytics: { views: 22340, clicks: 3840, conversions: 127, lastViewed: new Date() },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    manufacturer: getManufacturer("HP")._id,
    manufacturerName: "HP",
    model: "Pavilion 15",
    series: "Pavilion",
    fullName: "HP Pavilion 15-eh1097nr",
    slug: "hp-pavilion-15-eh1097nr",
    sku: "15-eh1097nr",
    processor: {
      brand: "AMD",
      model: "Ryzen 5 5500U",
      generation: "5000 Series",
      cores: 6,
      threads: 12,
      baseSpeed: 2.1,
      maxSpeed: 4.0,
      cache: "8MB"
    },
    memory: {
      size: 8,
      type: "DDR4",
      speed: 3200,
      slots: 2,
      maxCapacity: 32,
      upgradeable: true
    },
    storage: [{
      type: "SSD",
      capacity: 256,
      interface: "NVMe",
      brand: "Western Digital",
      speed: "PCIe 3.0"
    }],
    display: {
      size: 15.6,
      resolution: { width: 1920, height: 1080, name: "Full HD" },
      technology: "IPS",
      brightness: 250,
      colorGamut: "45% NTSC",
      refreshRate: 60,
      touchscreen: false,
      glossy: false
    },
    graphics: {
      integrated: { brand: "AMD", model: "Radeon Graphics" },
      dedicated: null
    },
    dimensions: { length: 358.5, width: 242, height: 19.9, weight: 1.75 },
    battery: { capacity: 41, cells: 3, life: 7, chargingSpeed: "45W AC Adapter" },
    ports: [
      { type: "USB-A", version: "3.2", count: 2, features: [] },
      { type: "USB-C", version: "3.2", count: 1, features: ["Power Delivery"] },
      { type: "HDMI", version: "1.4", count: 1, features: [] },
      { type: "3.5mm", version: "", count: 1, features: ["Audio Combo"] },
      { type: "SD", version: "", count: 1, features: [] }
    ],
    wireless: { wifi: "Wi-Fi 6", bluetooth: "Bluetooth 5.0", cellular: null },
    category: "Budget",
    targetAudience: ["Students", "Home Users", "Budget Buyers"],
    operatingSystem: "Windows 11 Home",
    features: ["Backlit Keyboard", "HP Audio Boost", "Fast Charge", "Sustainable Materials"],
    msrp: 649,
    currentPrice: { min: 549, max: 649, lastUpdated: new Date() },
    description: "An affordable laptop that delivers reliable performance for everyday computing needs.",
    keyFeatures: ["AMD Ryzen 5 processor", "Full HD display", "Fast SSD storage", "All-day battery"],
    pros: ["Great value", "Good performance", "Decent build quality", "Upgradeable"],
    cons: ["Basic display", "Plastic build", "Limited storage"],
    images: [
      { url: "/images/laptops/hp-pavilion-15-main.jpg", alt: "HP Pavilion 15 main view", type: "main", order: 1 }
    ],
    releaseDate: new Date("2021-08-15"),
    discontinuedDate: null,
    isActive: true,
    popularity: 85,
    searchKeywords: ["hp", "pavilion", "budget", "student", "everyday", "amd"],
    analytics: { views: 45670, clicks: 9840, conversions: 567, lastViewed: new Date() },
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Lenovo Laptops
{
  _id: new ObjectId(),
  manufacturer: getManufacturer("Lenovo")._id,
  manufacturerName: "Lenovo",
  model: "ThinkPad X1 Carbon Gen 10",
  series: "ThinkPad X1",
  fullName: "Lenovo ThinkPad X1 Carbon Gen 10",
  slug: "lenovo-thinkpad-x1-carbon-gen-10",
  sku: "21CB00EEUS", // Fixed: completed the missing SKU
  processor: {
    brand: "Intel",
    model: "Core i7-1260P",
    generation: "12th Gen",
    cores: 12,
    threads: 16,
    baseSpeed: 2.1,
    maxSpeed: 4.7,
    cache: "18MB"
  },
  memory: {
    size: 16,
    type: "LPDDR5",
    speed: 5200,
    slots: 0,
    maxCapacity: 32,
    upgradeable: false
  },
  storage: [{
    type: "SSD",
    capacity: 512,
    interface: "NVMe",
    brand: "Samsung",
    speed: "PCIe 4.0"
  }],
  display: {
    size: 14,
    resolution: { width: 1920, height: 1200, name: "WUXGA" },
    technology: "IPS",
    brightness: 400,
    colorGamut: "100% sRGB",
    refreshRate: 60,
    touchscreen: false,
    glossy: false
  },
  graphics: {
    integrated: { brand: "Intel", model: "Iris Xe Graphics" },
    dedicated: null
  },
  dimensions: { length: 315.6, width: 222.5, height: 14.9, weight: 1.12 },
  battery: { capacity: 57, cells: 4, life: 12, chargingSpeed: "65W USB-C" },
  ports: [
    { type: "USB-A", version: "3.2", count: 2, features: [] },
    { type: "USB-C", version: "4.0", count: 2, features: ["Thunderbolt 4", "Power Delivery"] },
    { type: "HDMI", version: "2.0", count: 1, features: [] },
    { type: "3.5mm", version: "", count: 1, features: ["Audio Combo"] }
  ],
  wireless: { wifi: "Wi-Fi 6E", bluetooth: "Bluetooth 5.1", cellular: "Optional 5G" },
  category: "Business",
  targetAudience: ["Business Professionals", "Executives", "Remote Workers"],
  operatingSystem: "Windows 11 Pro",
  features: ["TrackPoint", "ThinkShutter Camera Privacy", "Fingerprint Reader", "MIL-STD-810H Tested"],
  msrp: 1929,
  currentPrice: { min: 1729, max: 1929, lastUpdated: new Date() },
  description: "The legendary ThinkPad with latest Intel processors, delivering unmatched business laptop experience.",
  keyFeatures: ["14-inch display", "Legendary keyboard", "Military-grade durability", "All-day battery"],
  pros: ["Excellent keyboard", "Lightweight", "Great build quality", "Long battery life"],
  cons: ["Expensive", "Conservative design", "Limited gaming capability"],
  images: [
    { url: "/images/laptops/thinkpad-x1-carbon-main.jpg", alt: "ThinkPad X1 Carbon main view", type: "main", order: 1 }
  ],
  releaseDate: new Date("2022-03-29"),
  discontinuedDate: null,
  isActive: true,
  popularity: 87,
  searchKeywords: ["lenovo", "thinkpad", "business", "professional", "lightweight"],
  analytics: { views: 31240, clicks: 5670, conversions: 189, lastViewed: new Date() },
  createdAt: new Date(),
  updatedAt: new Date()
}]


// MongoDB Debugging Function
async function debugMongoDBInsertion(client, data, collectionName) {
  console.log(`\n=== DEBUG: Starting ${collectionName} insertion ===`);
  
  try {
    // 1. Test connection
    console.log('1. Testing MongoDB connection...');
    await client.db().admin().ping();
    console.log('✅ MongoDB connection successful');
    
    // 2. Validate data structure
    console.log(`2. Validating ${data.length} ${collectionName} records...`);
    
    const validationErrors = [];
    data.forEach((item, index) => {
      // Check for required fields
      const requiredFields = collectionName === 'manufacturers' 
        ? ['name', 'slug', 'displayName', 'rating'] 
        : ['manufacturer', 'manufacturerName', 'model', 'series'];
      
      requiredFields.forEach(field => {
        if (!item[field]) {
          validationErrors.push(`Record ${index}: Missing required field '${field}'`);
        }
      });
      
      // Check for ObjectId validity
      if (item._id && !ObjectId.isValid(item._id)) {
        validationErrors.push(`Record ${index}: Invalid ObjectId for _id`);
      }
      
      // For laptops, check manufacturer reference
      if (collectionName === 'laptops' && item.manufacturer && !ObjectId.isValid(item.manufacturer)) {
        validationErrors.push(`Record ${index}: Invalid ObjectId for manufacturer reference`);
      }
    });
    
    if (validationErrors.length > 0) {
      console.log('❌ Validation errors found:');
      validationErrors.forEach(error => console.log(`   - ${error}`));
      return false;
    }
    console.log('✅ Data validation passed');
    
    // 3. Check for duplicate slugs/SKUs
    console.log('3. Checking for duplicates...');
    const slugs = data.map(item => item.slug).filter(Boolean);
    const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
    
    if (duplicateSlugs.length > 0) {
      console.log('⚠️  Duplicate slugs found:', duplicateSlugs);
    }
    
    if (collectionName === 'laptops') {
      const skus = data.map(item => item.sku).filter(Boolean);
      const duplicateSkus = skus.filter((sku, index) => skus.indexOf(sku) !== index);
      if (duplicateSkus.length > 0) {
        console.log('⚠️  Duplicate SKUs found:', duplicateSkus);
      }
    }
    
    // 4. Test single record insertion first
    console.log('4. Testing single record insertion...');
    const db = client.db('LaptopTribeProject');
    const collection = db.collection(collectionName);
    
    const testRecord = { ...data[0] };
    testRecord._id = new ObjectId(); // Generate new ID for test
    if (collectionName === 'laptops') {
      testRecord.slug = testRecord.slug + '-test';
      testRecord.sku = testRecord.sku + '-test';
    } else {
      testRecord.slug = testRecord.slug + '-test';
    }
    
    const testResult = await collection.insertOne(testRecord);
    console.log('✅ Single record test insertion successful:', testResult.insertedId);
    
    // Clean up test record
    await collection.deleteOne({ _id: testResult.insertedId });
    console.log('✅ Test record cleaned up');
    
    // 5. Check existing data
    console.log('5. Checking existing data in collection...');
    const existingCount = await collection.countDocuments();
    console.log(`📊 Existing ${collectionName} count: ${existingCount}`);
    
    if (existingCount > 0) {
      console.log('⚠️  Collection already contains data. Consider using upsert or clearing first.');
    }
    
    // 6. Memory usage check
    console.log('6. Checking memory usage...');
    const dataSize = JSON.stringify(data).length;
    console.log(`📊 Data size: ${(dataSize / 1024 / 1024).toFixed(2)} MB`);
    
    if (dataSize > 16 * 1024 * 1024) { // 16MB MongoDB document limit
      console.log('⚠️  Data size is large, consider batch insertion');
    }
    
    console.log(`✅ All debug checks completed for ${collectionName}`);
    return true;
    
  } catch (error) {
    console.error('❌ Debug check failed:', error.message);
    console.error('Stack trace:', error.stack);
    
    // Common error handling
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Suggestion: Check if MongoDB is running on localhost:27017');
    } else if (error.code === 11000) {
      console.log('💡 Suggestion: Duplicate key error - check for existing records with same _id, slug, or sku');
    } else if (error.name === 'BSONTypeError') {
      console.log('💡 Suggestion: Check data types, especially ObjectIds and dates');
    }
    
    return false;
  }
}

// Usage function
async function insertWithDebugging() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    // Debug manufacturers first
    const manufacturersDebugOk = await debugMongoDBInsertion(client, manufacturers, 'manufacturers');
    if (!manufacturersDebugOk) {
      console.log('❌ Manufacturers debug failed, stopping insertion');
      return;
    }
    
    // Insert manufacturers if debug passed
    const db = client.db('LaptopTribeProject');
    const manufacturersCollection = db.collection('manufacturers');
    
    // Clear existing manufacturers (optional)
    // await manufacturersCollection.deleteMany({});
    
    const manufacturersResult = await manufacturersCollection.insertMany(manufacturers);
    console.log(`✅ Inserted ${manufacturersResult.insertedCount} manufacturers`);
    
    // Debug laptops
    const laptopsDebugOk = await debugMongoDBInsertion(client, laptops, 'laptops');
    if (!laptopsDebugOk) {
      console.log('❌ Laptops debug failed, stopping insertion');
      return;
    }
    
    // Insert laptops if debug passed
    const laptopsCollection = db.collection('laptops');
    
    // Clear existing laptops (optional)
    // await laptopsCollection.deleteMany({});
    
    const laptopsResult = await laptopsCollection.insertMany(laptops);
    console.log(`✅ Inserted ${laptopsResult.insertedCount} laptops`);
    
    console.log('🎉 All data inserted successfully!');
    
  } catch (error) {
    console.error('❌ Insertion failed:', error);
  } finally {
    await client.close();
  }
}

// Export for use
// module.exports = { debugMongoDBInsertion, insertWithDebugging };

insertWithDebugging();