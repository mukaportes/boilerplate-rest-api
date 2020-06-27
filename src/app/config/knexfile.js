module.exports = {
  client: 'pg',
  connection: {
    charset: 'utf8',
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    user: process.env.DATABASE_USER,
  },
  migrations: {
    directory: '../database/migrations',
    tableName: 'migrations_v2',
  },
  pool: {
    acquireTimeoutMillis: 30000,
    createRetryIntervalMillis: 100,
    createTimeoutMillis: 3000,
    idleTimeoutMillis: 30000,
    max: process.env.DATABASE_POOL_SIZE_MAX || 20,
    min: process.env.DATABASE_POOL_SIZE_MIN || 2,
    propagateCreateError: false,
    reapIntervalMillis: 1000,
  },
  seeds: {
    directory: '../database/seeds',
  },
};
