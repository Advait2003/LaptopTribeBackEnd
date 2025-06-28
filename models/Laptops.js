const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacturer',
    required: true
  },
  manufacturerName: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  series: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  sku: {
    type: String,
    required: true,
    unique: true
  },
  memory: {
    size: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      required: true
    },
    slots: {
      type: Number,
      required: true
    },
    maxCapacity: {
      type: Number,
      required: true
    },
    upgradeable: {
      type: Boolean,
      required: true
    }
  },
  display: {
    size: {
      type: Number,
      required: true
    },
    resolution: {
      width: {
        type: Number,
        required: true
      },
      height: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    technology: {
      type: String,
      required: true
    },
    brightness: {
      type: Number,
      required: true
    },
    colorGamut: {
      type: String,
      required: true
    },
    refreshRate: {
      type: Number,
      required: true
    },
    touchscreen: {
      type: Boolean,
      required: true
    },
    glossy: {
      type: Boolean,
      required: true
    }
  },
  graphics: {
    integrated: {
      brand: {
        type: String,
        required: true
      },
      model: {
        type: String,
        required: true
      }
    },
    dedicated: {
      type: mongoose.Schema.Types.Mixed,
      default: null
    }
  },
  dimensions: {
    length: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    }
  },
  battery: {
    capacity: {
      type: Number,
      required: true
    },
    cells: {
      type: Number,
      required: true
    },
    life: {
      type: Number,
      required: true
    },
    chargingSpeed: {
      type: String,
      required: true
    }
  },
  ports: [{
    type: {
      type: String,
      required: true
    },
    version: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    features: [{
      type: String
    }]
  }],
  wireless: {
    wifi: {
      type: String,
      required: true
    },
    bluetooth: {
      type: String,
      required: true
    },
    cellular: {
      type: String,
      required: true
    }
  },
  category: {
    type: String,
    required: true
  },
  targetAudience: [{
    type: String,
    required: true
  }],
  operatingSystem: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  msrp: {
    type: Number,
    required: true
  },
  currentPrice: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    lastUpdated: {
      type: Date,
      default: Date.now
    }
  },
  description: {
    type: String,
    required: true
  },
  keyFeatures: [{
    type: String,
    required: true
  }],
  pros: [{
    type: String
  }],
  cons: [{
    type: String
  }],
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['main', 'gallery', 'thumbnail'],
      required: true
    },
    order: {
      type: Number,
      required: true
    }
  }],
  releaseDate: {
    type: Date,
    required: true
  },
  discontinuedDate: {
    type: Date,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  popularity: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  searchKeywords: [{
    type: String
  }],
  analytics: {
    views: {
      type: Number,
      default: 0
    },
    clicks: {
      type: Number,
      default: 0
    },
    conversions: {
      type: Number,
      default: 0
    },
    lastViewed: {
      type: Date,
      default: Date.now
    }
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
laptopSchema.index({ slug: 1 });
laptopSchema.index({ sku: 1 });
laptopSchema.index({ manufacturerName: 1 });
laptopSchema.index({ category: 1 });
laptopSchema.index({ 'currentPrice.min': 1, 'currentPrice.max': 1 });
laptopSchema.index({ popularity: -1 });
laptopSchema.index({ isActive: 1 });

// Virtual for processor (derived from the existing structure)
laptopSchema.virtual('processor').get(function() {
  return this.graphics?.integrated?.model || 'Not specified';
});

// Pre-save middleware to generate slug if not provided
laptopSchema.pre('save', function(next) {
  if (!this.slug && this.fullName) {
    this.slug = this.fullName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }
  next();
});

module.exports = mongoose.model('Laptop', laptopSchema);