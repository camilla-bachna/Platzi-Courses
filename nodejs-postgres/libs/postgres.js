const { Client } = require('pg');

async function getConnection() {
  //object oriented programming we create a new instance of Client and add configuration of connection
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'cami',
    password: 'admin123',
    database: 'my_store',
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
