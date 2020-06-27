const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const setupRoutes = require('./infra/routes');

const port = 8001;
const startExpress = async (port) => {
  try {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json({ limit: '20mb' }));
    setupRoutes(app);

    app.listen(port);

    console.info(`App is listening on port ${port}`);
  } catch (error) {
    console.error(`App failed to listen on port ${port}`, error);
  }
};

startExpress(port);
