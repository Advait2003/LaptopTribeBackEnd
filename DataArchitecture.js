// =====================================================
// MONGODB DATA ARCHITECTURE FOR LAPTOP GUIDE WEBSITE
// =====================================================

// ===== 1. MANUFACTURERS COLLECTION =====
// Collection: manufacturers
const ManufacturerSchema = {
  _id: ObjectId,
  name: String,                    // "Dell", "HP", "Apple"
  slug: String,                    // "dell", "hp", "apple" (URL friendly)
  displayName: String,             // "Dell Technologies"
  rating: Number,                  // 8.5 (calculated average)
  totalModels: Number,             // Auto-calculated count
  activeModels: Number,            // Currently available models
  popularity: Number,              // 1-100 based on clicks/views
  logo: String,                    // "/images/logos/dell.png"
  website: String,                 // "https://dell.com"
  founded: Date,
  headquarters: String,
  marketShare: Number,             // Percentage
  specialties: [String],           // ["Gaming", "Business", "Ultrabooks"]
  isActive: Boolean,
  metadata: {
    totalReviews: Number,
    avgUserRating: Number,
    priceRange: {
      min: Number,
      max: Number
    }
  },
  createdAt: Date,
  updatedAt: Date
};

// MANUFACTURERS INDEXES
db.manufacturers.createIndex({ "name": 1 }, { unique: true });
db.manufacturers.createIndex({ "slug": 1 }, { unique: true });
db.manufacturers.createIndex({ "popularity": -1 });
db.manufacturers.createIndex({ "rating": -1 });
db.manufacturers.createIndex({ "isActive": 1 });
db.manufacturers.createIndex({ "name": "text", "displayName": "text" }); // Text search

// ===== 2. LAPTOPS COLLECTION =====
// Collection: laptops
const LaptopSchema = {
  _id: ObjectId,
  // Basic Info
  manufacturer: ObjectId,          // Reference to manufacturers
  manufacturerName: String,        // Denormalized for faster queries
  model: String,                   // "XPS 13"
  series: String,                  // "XPS"
  fullName: String,               // "Dell XPS 13 9320"
  slug: String,                   // "dell-xps-13-9320"
  sku: String,                    // Manufacturer SKU
  
  // Technical Specifications
  processor: {
    brand: String,                // "Intel", "AMD", "Apple"
    model: String,               // "Core i7-1260P"
    generation: String,          // "12th Gen"
    cores: Number,
    threads: Number,
    baseSpeed: Number,           // GHz
    maxSpeed: Number,            // GHz
    cache: String               // "18MB"
  },
  
  memory: {
    size: Number,               // 16 (GB)
    type: String,              // "DDR4", "DDR5", "LPDDR5"
    speed: Number,             // 3200 (MHz)
    slots: Number,             // Available slots
    maxCapacity: Number,       // Maximum supported
    upgradeable: Boolean
  },
  
  storage: [{
    type: String,              // "SSD", "HDD", "eMMC"
    capacity: Number,          // 512 (GB)
    interface: String,         // "NVMe", "SATA"
    brand: String,
    speed: String             // "PCIe 4.0"
  }],
  
  display: {
    size: Number,             // 13.3 (inches)
    resolution: {
      width: Number,          // 1920
      height: Number,         // 1080
      name: String           // "Full HD", "4K UHD"
    },
    technology: String,       // "IPS", "OLED", "TN"
    brightness: Number,       // 400 (nits)
    colorGamut: String,      // "sRGB 100%"
    refreshRate: Number,     // 60 (Hz)
    touchscreen: Boolean,
    glossy: Boolean
  },
  
  graphics: {
    integrated: {
      brand: String,          // "Intel", "AMD"
      model: String          // "Iris Xe Graphics"
    },
    dedicated: {
      brand: String,          // "NVIDIA", "AMD"
      model: String,         // "RTX 3050"
      memory: Number,        // 4 (GB)
      memoryType: String    // "GDDR6"
    }
  },
  
  // Physical Characteristics
  dimensions: {
    length: Number,           // mm
    width: Number,           // mm
    height: Number,          // mm
    weight: Number          // kg
  },
  
  battery: {
    capacity: Number,        // 54 (Wh)
    cells: Number,          // 4-cell
    life: Number,           // 8 (hours estimated)
    chargingSpeed: String   // "65W fast charging"
  },
  
  // Connectivity & Ports
  ports: [{
    type: String,           // "USB-C", "USB-A", "HDMI", "3.5mm"
    version: String,        // "3.2", "4.0", "2.1"
    count: Number,
    features: [String]      // ["Thunderbolt 4", "Power Delivery"]
  }],
  
  wireless: {
    wifi: String,           // "Wi-Fi 6E"
    bluetooth: String,      // "Bluetooth 5.2"
    cellular: String       // "5G", "LTE" or null
  },
  
  // Categories & Features
  category: String,         // "Ultrabook", "Gaming", "Business", "Budget"
  targetAudience: [String], // ["Students", "Professionals", "Gamers"]
  operatingSystem: String,  // "Windows 11", "macOS", "Chrome OS"
  
  features: [String],       // ["Backlit Keyboard", "Fingerprint Reader", "Webcam Privacy Shutter"]
  
  // Pricing & Availability
  msrp: Number,            // Manufacturer's suggested retail price
  currentPrice: {
    min: Number,           // Lowest current price across retailers
    max: Number,           // Highest current price
    lastUpdated: Date
  },
  
  // SEO & Content
  description: String,
  keyFeatures: [String],
  pros: [String],
  cons: [String],
  
  // Media
  images: [{
    url: String,
    alt: String,
    type: String,          // "main", "angle", "keyboard", "ports"
    order: Number
  }],
  
  // Metadata
  releaseDate: Date,
  discontinuedDate: Date,
  isActive: Boolean,
  popularity: Number,      // Based on views/clicks
  searchKeywords: [String], // For better search
  
  // Analytics
  analytics: {
    views: Number,
    clicks: Number,
    conversions: Number,
    lastViewed: Date
  },
  
  createdAt: Date,
  updatedAt: Date
};

// LAPTOPS INDEXES
// Primary queries
db.laptops.createIndex({ "manufacturer": 1, "isActive": 1 });
db.laptops.createIndex({ "manufacturerName": 1, "isActive": 1 });
db.laptops.createIndex({ "slug": 1 }, { unique: true });
db.laptops.createIndex({ "isActive": 1, "popularity": -1 });

// Category and filtering
db.laptops.createIndex({ "category": 1, "isActive": 1 });
db.laptops.createIndex({ "currentPrice.min": 1, "currentPrice.max": 1 });
db.laptops.createIndex({ "processor.brand": 1, "isActive": 1 });
db.laptops.createIndex({ "memory.size": 1, "isActive": 1 });
db.laptops.createIndex({ "display.size": 1, "isActive": 1 });

// Compound indexes for common filter combinations
db.laptops.createIndex({ 
  "category": 1, 
  "currentPrice.min": 1, 
  "processor.brand": 1,
  "isActive": 1 
});

db.laptops.createIndex({ 
  "manufacturerName": 1, 
  "category": 1, 
  "isActive": 1,
  "popularity": -1 
});

// Text search
db.laptops.createIndex({ 
  "fullName": "text", 
  "model": "text", 
  "description": "text",
  "searchKeywords": "text"
}, {
  weights: {
    "fullName": 10,
    "model": 8,
    "searchKeywords": 5,
    "description": 1
  }
});

// Date-based queries
db.laptops.createIndex({ "releaseDate": -1 });
db.laptops.createIndex({ "updatedAt": -1 });

// ===== 3. RETAILERS COLLECTION =====
// Collection: retailers
const RetailerSchema = {
  _id: ObjectId,
  name: String,                    // "Amazon", "Best Buy"
  displayName: String,             // "Amazon.com"
  slug: String,                    // "amazon"
  domain: String,                  // "amazon.com"
  logo: String,
  
  // Affiliate Program Info
  affiliateProgram: {
    name: String,                  // "Amazon Associates"
    network: String,               // "Direct", "Commission Junction"
    commissionRate: Number,        // 3.5 (percentage)
    cookieDuration: Number,        // 24 (hours)
    minPayout: Number,             // $10
    payoutSchedule: String         // "Monthly"
  },
  
  // Scraping Configuration
  scrapingConfig: {
    baseUrl: String,
    searchEndpoint: String,
    productUrlPattern: String,
    selectors: {
      price: String,
      availability: String,
      title: String,
      rating: String
    },
    requestDelay: Number,          // milliseconds
    useProxy: Boolean,
    lastScraped: Date
  },
  
  // Business Info
  trustScore: Number,              // 1-10
  shippingOptions: [String],       // ["Free", "Express", "Same Day"]
  returnPolicy: Number,            // Days
  customerServiceRating: Number,   // 1-5
  
  isActive: Boolean,
  priority: Number,                // Display order
  createdAt: Date,
  updatedAt: Date
};

// RETAILERS INDEXES
db.retailers.createIndex({ "name": 1 }, { unique: true });
db.retailers.createIndex({ "slug": 1 }, { unique: true });
db.retailers.createIndex({ "domain": 1 }, { unique: true });
db.retailers.createIndex({ "isActive": 1, "priority": 1 });
db.retailers.createIndex({ "trustScore": -1 });

// ===== 4. LAPTOP PRICES COLLECTION =====
// Collection: laptop_prices (Time Series Data)
const LaptopPriceSchema = {
  _id: ObjectId,
  laptopId: ObjectId,              // Reference to laptops
  retailerId: ObjectId,            // Reference to retailers
  
  // Product Info at Retailer
  productUrl: String,
  productId: String,               // Retailer's product ID
  title: String,                   // Product title at retailer
  
  // Pricing Data
  currentPrice: Number,
  originalPrice: Number,           // MSRP or original listed price
  discountAmount: Number,
  discountPercentage: Number,
  currency: String,                // "USD", "EUR"
  
  // Availability
  inStock: Boolean,
  stockLevel: String,              // "In Stock", "Limited", "Out of Stock"
  estimatedDelivery: String,       // "1-2 days", "1-2 weeks"
  
  // Deal Information
  isDeal: Boolean,
  dealType: String,                // "Sale", "Clearance", "Lightning Deal"
  dealEndDate: Date,
  
  // Affiliate Data
  affiliateUrl: String,
  trackingParameters: String,
  
  // Metadata
  lastChecked: Date,
  priceHistory: [{
    price: Number,
    date: Date
  }],
  
  createdAt: Date,
  updatedAt: Date
};

// LAPTOP PRICES INDEXES
// Primary queries
db.laptop_prices.createIndex({ "laptopId": 1, "retailerId": 1 });
db.laptop_prices.createIndex({ "laptopId": 1, "inStock": 1, "currentPrice": 1 });
db.laptop_prices.createIndex({ "retailerId": 1, "lastChecked": 1 });

// Deal queries
db.laptop_prices.createIndex({ "isDeal": 1, "dealEndDate": 1 });
db.laptop_prices.createIndex({ "discountPercentage": -1, "isDeal": 1 });

// Time-based queries for cleanup
db.laptop_prices.createIndex({ "lastChecked": 1 });
db.laptop_prices.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 7776000 }); // 90 days

// Compound for price comparison
db.laptop_prices.createIndex({ 
  "laptopId": 1, 
  "inStock": 1, 
  "currentPrice": 1,
  "retailerId": 1 
});

// ===== 5. DEALS COLLECTION =====
// Collection: deals (Featured deals and promotions)
const DealSchema = {
  _id: ObjectId,
  laptopId: ObjectId,
  retailerId: ObjectId,
  
  title: String,                   // "Back to School Sale"
  description: String,
  dealType: String,                // "Percentage", "Fixed Amount", "BOGO"
  
  discount: {
    type: String,                  // "percentage", "fixed"
    value: Number,                 // 20 (for 20% off) or 100 (for $100 off)
    maxDiscount: Number           // For percentage caps
  },
  
  conditions: {
    minQuantity: Number,
    couponCode: String,
    membershipRequired: Boolean,
    additionalTerms: String
  },
  
  validity: {
    startDate: Date,
    endDate: Date,
    isActive: Boolean
  },
  
  priority: Number,                // For homepage display
  featured: Boolean,               // Show on homepage
  
  analytics: {
    impressions: Number,
    clicks: Number,
    conversions: Number
  },
  
  createdAt: Date,
  updatedAt: Date
};

// DEALS INDEXES
db.deals.createIndex({ "laptopId": 1, "validity.isActive": 1 });
db.deals.createIndex({ "retailerId": 1, "validity.isActive": 1 });
db.deals.createIndex({ "featured": 1, "priority": 1, "validity.isActive": 1 });
db.deals.createIndex({ "validity.endDate": 1 }); // For cleanup jobs
db.deals.createIndex({ "validity.startDate": 1, "validity.endDate": 1 });

// ===== 6. USER ANALYTICS COLLECTION =====
// Collection: user_analytics (Optional - for tracking user behavior)
const UserAnalyticsSchema = {
  _id: ObjectId,
  sessionId: String,
  userId: String,                  // If user accounts implemented
  
  event: {
    type: String,                  // "view", "click", "search", "compare"
    page: String,                  // "/laptop/dell-xps-13"
    element: String,               // "affiliate_link", "comparison_button"
    laptopId: ObjectId,
    retailerId: ObjectId
  },
  
  metadata: {
    userAgent: String,
    ipAddress: String,             // Hashed for privacy
    referrer: String,
    device: String,                // "mobile", "desktop", "tablet"
    location: {
      country: String,
      region: String
    }
  },
  
  timestamp: Date
};

// USER ANALYTICS INDEXES
db.user_analytics.createIndex({ "sessionId": 1, "timestamp": -1 });
db.user_analytics.createIndex({ "event.laptopId": 1, "timestamp": -1 });
db.user_analytics.createIndex({ "event.type": 1, "timestamp": -1 });
db.user_analytics.createIndex({ "timestamp": 1 }, { expireAfterSeconds: 2592000 }); // 30 days

// ===== AGGREGATION PIPELINE EXAMPLES =====

// Get top laptops by category with current prices
const topLaptopsByCategory = [
  {
    $match: { 
      isActive: true, 
      category: "Gaming" 
    }
  },
  {
    $lookup: {
      from: "laptop_prices",
      localField: "_id",
      foreignField: "laptopId",
      as: "prices"
    }
  },
  {
    $addFields: {
      lowestPrice: { $min: "$prices.currentPrice" },
      availableRetailers: {
        $size: {
          $filter: {
            input: "$prices",
            cond: { $eq: ["$$this.inStock", true] }
          }
        }
      }
    }
  },
  {
    $sort: { popularity: -1 }
  },
  {
    $limit: 10
  }
];

// Update manufacturer statistics
const updateManufacturerStats = [
  {
    $group: {
      _id: "$manufacturer",
      totalModels: { $sum: 1 },
      activeModels: {
        $sum: { $cond: [{ $eq: ["$isActive", true] }, 1, 0] }
      },
      avgRating: { $avg: "$rating" },
      priceRange: {
        min: { $min: "$currentPrice.min" },
        max: { $max: "$currentPrice.max" }
      }
    }
  }
];

// ===== PERFORMANCE OPTIMIZATION NOTES =====
/*
1. Use projection to limit returned fields
2. Implement proper pagination with limit() and skip()
3. Consider read replicas for analytics queries
4. Use aggregation pipelines for complex queries
5. Implement proper TTL indexes for temporary data
6. Monitor slow queries with explain()
7. Consider sharding for large datasets (>100GB)
8. Use GridFS for large images if needed
9. Implement proper connection pooling
10. Cache frequently accessed data in Redis
*/