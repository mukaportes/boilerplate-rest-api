const logHttpRequest = (req) => {
  const fullUrl = `${req.protocol}://${req.headers.host}${req.originalUrl}`;

  const content = {
    fullUrl,
    headers: req.rawHeaders,
    host: req.headers.host,
    url: req.originalUrl,
    baseUrl: req.baseUrl,
    body: req.body,
    method: req.method,
    params: req.params,
  };

  console.info(fullUrl, content);
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
    if (chunk) chunks.push(new Buffer(chunk));

    var body = Buffer.concat(chunks).toString('utf8');
    console.log(req.path, body);

    responseEnd.apply(res, arguments);
  };
};

module.exports = (req, res, next) => {
  logHttpRequest(req);
  logHttpResponse(req, res);
  next();
};