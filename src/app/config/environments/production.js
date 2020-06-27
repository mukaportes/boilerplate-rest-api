module.exports = {
  app: {
    port: process.env.APP_PORT || 3000,
    httpBodyLimit: process.env.APP_HTTP_BODY_LIMIT || '20mb',
  },
  db: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    dialect: process.env.DATABASE_DIALECT,
    logging: false,
  }
};