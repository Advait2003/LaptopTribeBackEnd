const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'laptop-guide';

// Sample data
const manufacturersData = [
  {
    name: "Apple",
    slug: "apple",
    country: "USA",
    founded: 1976,
    website: "https://www.apple.com"
  },
  {
    name: "Dell",
    slug: "dell",
    country: "USA",
    founded: 1984,
    website: "https://www.dell.com"
  },
  {
    name: "HP",
    slug: "hp",
    country: "USA",
    founded: 1939,
    website: "https://www.hp.com"
  },
  {
    name: "Lenovo",
    slug: "lenovo",
    country: "China",
    founded: 1984,
    website: "https://www.lenovo.com"
  },
  {
    name: "ASUS",
    slug: "asus",
    country: "Taiwan",
    founded: 1989,
    website: "https://www.asus.com"
  },
  {
    name: "Acer",
    slug: "acer",
    country: "Taiwan",
    founded: 1976,
    website: "https://www.acer.com"
  },
  {
    name: "MSI",
    slug: "msi",
    country: "Taiwan",
    founded: 1986,
    website: "https://www.msi.com"
  }
];

const laptopsData = [
  {
    name: "MacBook Air M2",
    manufacturerName: "Apple",
    manufacturer: "apple",
    category: "Ultrabook",
    processor: "Apple M2",
    ram: "8GB",
    storage: "256GB SSD",
    display: "13.6-inch Liquid Retina",
    currentPrice: { min: 1199, max: 1499 },
    rating: 4.7,
    popularity: 95,
    releaseDate: new Date("2022-07-15")
  },
  {
    name: "MacBook Pro 14-inch",
    manufacturerName: "Apple",
    manufacturer: "apple",
    category: "Professional",
    processor: "Apple M2 Pro",
    ram: "16GB",
    storage: "512GB SSD",
    display: "14.2-inch Liquid Retina XDR",
    currentPrice: { min: 1999, max: 2499 },
    rating: 4.8,
    popularity: 88,
    releaseDate: new Date("2023-01-17")
  },
  {
    name: "XPS 13 Plus",
    manufacturerName: "Dell",
    manufacturer: "dell",
    category: "Ultrabook",
    processor: "Intel Core i7-1260P",
    ram: "16GB",
    storage: "512GB SSD",
    display: "13.4-inch OLED",
    currentPrice: { min: 1299, max: 1699 },
    rating: 4.5,
    popularity: 82,
    releaseDate: new Date("2022-03-30")
  },
  {
    name: "Alienware m17 R5",
    manufacturerName: "Dell",
    manufacturer: "dell",
    category: "Gaming",
    processor: "AMD Ryzen 9 6900HX",
    ram: "32GB",
    storage: "1TB SSD",
    display: "17.3-inch FHD 360Hz",
    currentPrice: { min: 2499, max: 3299 },
    rating: 4.6,
    popularity: 75,
    releaseDate: new Date("2022-04-05")
  },
  {
    name: "Spectre x360 14",
    manufacturerName: "HP",
    manufacturer: "hp",
    category: "2-in-1",
    processor: "Intel Core i7-1255U",
    ram: "16GB",
    storage: "1TB SSD",
    display: "13.5-inch OLED Touch",
    currentPrice: { min: 1449, max: 1849 },
    rating: 4.4,
    popularity: 79,
    releaseDate: new Date("2022-05-01")
  },
  {
    name: "ThinkPad X1 Carbon Gen 10",
    manufacturerName: "Lenovo",
    manufacturer: "lenovo",
    category: "Business",
    processor: "Intel Core i7-1255U",
    ram: "16GB",
    storage: "512GB SSD",
    display: "14-inch WUXGA",
    currentPrice: { min: 1599, max: 2199 },
    rating: 4.6,
    popularity: 84,
    releaseDate: new Date("2022-04-12")
  },
  {
    name: "ROG Zephyrus G14",
    manufacturerName: "ASUS",
    manufacturer: "asus",
    category: "Gaming",
    processor: "AMD Ryzen 9 6900HS",
    ram: "16GB",
    storage: "1TB SSD",
    display: "14-inch QHD 120Hz",
    currentPrice: { min: 1649, max: 2049 },
    rating: 4.7,
    popularity: 89,
    releaseDate: new Date("2022-03-29")
  },
  {
    name: "Swift 3 OLED",
    manufacturerName: "Acer",
    manufacturer: "acer",
    category: "Ultrabook",
    processor: "Intel Core i7-1260P",
    ram: "16GB",
    storage: "512GB SSD",
    display: "14-inch 2.8K OLED",
    currentPrice: { min: 899, max: 1199 },
    rating: 4.3,
    popularity: 71,
    releaseDate: new Date("2022-06-15")
  },
  {
    name: "GE76 Raider",
    manufacturerName: "MSI",
    manufacturer: "msi",
    category: "Gaming",
    processor: "Intel Core i7-12700H",
    ram: "32GB",
    storage: "1TB SSD",
    display: "17.3-inch FHD 360Hz",
    currentPrice: { min: 2299, max: 2899 },
    rating: 4.5,
    popularity: 73,
    releaseDate: new Date("2022-02-09")
  },
  {
    name: "Yoga 9i",
    manufacturerName: "Lenovo",
    manufacturer: "lenovo",
    category: "2-in-1",
    processor: "Intel Core i7-1260P",
    ram: "16GB",
    storage: "1TB SSD",
    display: "14-inch 4K OLED Touch",
    currentPrice: { min: 1399, max: 1799 },
    rating: 4.5,
    popularity: 76,
    releaseDate: new Date("2022-01-06")
  }
];

async function seedDatabase() {
  const client = new MongoClient(url);
  
  try {
    console.log('🔄 Connecting to MongoDB...');
    await client.connect();
    console.log('✅ Connected successfully to MongoDB');

    const db = client.db(dbName);
    
    // Clear existing collections
    console.log('🧹 Clearing existing data...');
    const manufacturersCollection = db.collection('manufacturers');
    const laptopsCollection = db.collection('laptops');
    
    await manufacturersCollection.deleteMany({});
    await laptopsCollection.deleteMany({});
    console.log('✅ Existing data cleared');

    // Insert manufacturers
    console.log('📦 Inserting manufacturers...');
    const manufacturersResult = await manufacturersCollection.insertMany(manufacturersData);
    console.log(`✅ Inserted ${manufacturersResult.insertedCount} manufacturers`);

    // Insert laptops
    console.log('💻 Inserting laptops...');
    const laptopsResult = await laptopsCollection.insertMany(laptopsData);
    console.log(`✅ Inserted ${laptopsResult.insertedCount} laptops`);

    // Create indexes for better performance
    console.log('🗂️ Creating indexes...');
    
    // Indexes for manufacturers collection
    await manufacturersCollection.createIndex({ name: 1 });
    await manufacturersCollection.createIndex({ slug: 1 }, { unique: true });
    
    // Indexes for laptops collection
    await laptopsCollection.createIndex({ manufacturer: 1 });
    await laptopsCollection.createIndex({ category: 1 });
    await laptopsCollection.createIndex({ "currentPrice.min": 1 });
    await laptopsCollection.createIndex({ popularity: -1 });
    await laptopsCollection.createIndex({ rating: -1 });
    
    console.log('✅ Indexes created successfully');

    // Display summary
    console.log('\n📊 Database seeding completed successfully!');
    console.log('📈 Summary:');
    console.log(`   • Manufacturers: ${manufacturersResult.insertedCount} documents`);
    console.log(`   • Laptops: ${laptopsResult.insertedCount} documents`);
    console.log(`   • Database: ${dbName}`);
    console.log(`   • Connection: ${url}`);
    
    console.log('\n🎯 Next steps:');
    console.log('   1. Refresh MongoDB Compass');
    console.log('   2. Navigate to the "laptop-guide" database');
    console.log('   3. Explore the collections and data');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await client.close();
    console.log('🔌 Database connection closed');
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled promise rejection:', error);
  process.exit(1);
});

// Run the seeding function
seedDatabase();