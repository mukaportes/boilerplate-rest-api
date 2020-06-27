const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const setupRoutes = require('./infra/routes');
const config = require('./app/config');

const startExpress = async () => {
  try {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json({ limit: config.app.httpBodyLimit }));
    setupRoutes(app);

    app.listen(config.app.port);

    console.info(`App is listening on port ${config.app.port}`);
  } catch (error) {
    console.error(`App failed to listen on port ${config.app.port}`, error);
  }
};

startExpress(config.app.port);
