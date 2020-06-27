const getFullUrl = (req) => `${req.protocol}://${req.headers.host}${req.originalUrl}`;
const getLogMessage = (action, req) => `${action} ${req.method} at ${req.baseUrl}`;

const logHttpRequest = (req) => {
  const content = {
    body: req.body,
    fullUrl: getFullUrl(req),
    headers: req.headers,
    host: req.headers.host,
    method: req.method,
    params: req.params,
    url: req.originalUrl,
  };

  console.info(getLogMessage('Starting', req), content);
};

const logHttpResponse = (req, res) => {
  const responseWrite = res.write;
  const responseEnd = res.end;
  const chunks = [];

  res.write = function (chunk) {
    chunks.push(new Buffer(chunk));

    responseWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk) chunks.push(Buffer.from(chunk));

    const body = Buffer.concat(chunks).toString('utf8');

    console.info(getLogMessage('Ending', req), body);

    responseEnd.apply(res, arguments);
  };
};

module.exports = (req, res, next) => {
  logHttpRequest(req);
  logHttpResponse(req, res);
  next();
};