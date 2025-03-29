const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'mysql://root:QFFoThCbdGOrPnjYjYlCsJjhMAHmcmIj@mainline.proxy.rlwy.net:11335/railway',
  ssl: {
    rejectUnauthorized: false, // Required for Neon
  }
});

pool.connect()
  .then(() => console.log('Connected to Railway DB'))
  .catch(err => console.error('Connection error:', err));

module.exports = pool;
