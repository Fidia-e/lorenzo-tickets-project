const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
  originalClient: pool,

  async query(...params) {
    this.queryCount += 1;

    return this.originalClient.query(...params);
  },
};
