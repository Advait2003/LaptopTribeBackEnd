const { MongoClient } = require('mongodb');

async function testConnection() {
  const client = new MongoClient('mongodb://localhost:27017');
  
  try {
    console.log('Testing MongoDB connection...');
    await client.connect();
    console.log('✅ Connected successfully!');
    
    // List databases to confirm connection
    const databases = await client.db().admin().listDatabases();
    console.log('📋 Available databases:', databases.databases.map(db => db.name));
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  } finally {
    await client.close();
  }
}

testConnection();