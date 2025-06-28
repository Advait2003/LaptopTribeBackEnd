const mongoose = require('mongoose');

const manufacturerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Manufacturer name is required'],
    unique: true,
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  logo: {
    url: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    }
  },
  description: {
    type: String,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  rating: {
    type: Number,
    min: [0, 'Rating cannot be less than 0'],
    max: [10, 'Rating cannot be more than 10'],
    default: 0
  },
  modelsReviewed: {
    type: Number,
    min: [0, 'Models reviewed cannot be negative'],
    default: 0
  },
  popularity: {
    type: Number,
    min: [0, 'Popularity cannot be less than 0'],
    max: [100, 'Popularity cannot be more than 100'],
    default: 0
  },
  founded: {
    type: Number,
    min: [1800, 'Founded year must be after 1800'],
    max: [new Date().getFullYear(), 'Founded year cannot be in the future']
  },
  headquarters: {
    country: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    }
  },
  website: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Website must be a valid URL'
    }
  },
  categories: [{
    type: String,
    enum: ['Gaming', 'Business', 'Ultrabook', 'Budget', 'Workstation', '2-in-1', 'Chromebook'],
    trim: true
  }],
  priceRange: {
    min: {
      type: Number,
      min: [0, 'Minimum price cannot be negative']
    },
    max: {
      type: Number,
      min: [0, 'Maximum price cannot be negative']
    }
  },
  marketShare: {
    type: Number,
    min: [0, 'Market share cannot be negative'],
    max: [100, 'Market share cannot exceed 100%'],
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  contact: {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: function(v) {
          return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: 'Please enter a valid email address'
      }
    },
    phone: {
      type: String,
      trim: true
    },
    supportUrl: {
      type: String,
      trim: true
    }
  },
  socialMedia: {
    twitter: {
      type: String,
      trim: true
    },
    facebook: {
      type: String,
      trim: true
    },
    instagram: {
      type: String,
      trim: true
    },
    linkedin: {
      type: String,
      trim: true
    }
  },
  features: [{
    type: String,
    trim: true
  }],
  awards: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    year: {
      type: Number,
      min: 1900,
      max: new Date().getFullYear()
    },
    organization: {
      type: String,
      trim: true
    }
  }],
  analytics: {
    totalViews: {
      type: Number,
      default: 0,
      min: 0
    },
    totalClicks: {
      type: Number,
      default: 0,
      min: 0
    },
    lastViewed: {
      type: Date,
      default: Date.now
    }
  },
  metadata: {
    searchKeywords: [{
      type: String,
      trim: true,
      lowercase: true
    }],
    seoTitle: {
      type: String,
      maxlength: [60, 'SEO title cannot exceed 60 characters']
    },
    seoDescription: {
      type: String,
      maxlength: [160, 'SEO description cannot exceed 160 characters']
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
manufacturerSchema.index({ name: 1 });
manufacturerSchema.index({ slug: 1 });
manufacturerSchema.index({ popularity: -1 });
manufacturerSchema.index({ rating: -1 });
manufacturerSchema.index({ isActive: 1 });
manufacturerSchema.index({ categories: 1 });

// Virtual for age of company
manufacturerSchema.virtual('companyAge').get(function() {
  if (this.founded) {
    return new Date().getFullYear() - this.founded;
  }
  return null;
});

// Virtual for average price
manufacturerSchema.virtual('averagePrice').get(function() {
  if (this.priceRange && this.priceRange.min && this.priceRange.max) {
    return (this.priceRange.min + this.priceRange.max) / 2;
  }
  return null;
});

// Pre-save middleware to generate slug
manufacturerSchema.pre('save', function(next) {
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }
  
  // Validate price range
  if (this.priceRange && this.priceRange.min && this.priceRange.max) {
    if (this.priceRange.min > this.priceRange.max) {
      return next(new Error('Minimum price cannot be greater than maximum price'));
    }
  }
  
  next();
});

// Static method to find active manufacturers
manufacturerSchema.statics.findActive = function() {
  return this.find({ isActive: true });
};

// Static method to find by popularity
manufacturerSchema.statics.findByPopularity = function(minPopularity = 0) {
  return this.find({ 
    popularity: { $gte: minPopularity },
    isActive: true 
  }).sort({ popularity: -1 });
};

// Instance method to update analytics
manufacturerSchema.methods.incrementViews = function() {
  this.analytics.totalViews += 1;
  this.analytics.lastViewed = new Date();
  return this.save();
};

module.exports = mongoose.model('Manufacturer', manufacturerSchema);