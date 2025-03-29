const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_WnfVhqXpM75m@ep-odd-truth-a5oxw2m9-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: {
    rejectUnauthorized: false, // Required for Neon
  }
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL on Neon.tech'))
  .catch(err => console.error('Connection error:', err));

module.exports = pool;
