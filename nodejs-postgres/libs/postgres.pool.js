const { Pool } = require('pg');

//same configuration as in Client (postgres.js)
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'cami',
  password: 'admin123',
  database: 'my_store',
});

module.exports = pool;
