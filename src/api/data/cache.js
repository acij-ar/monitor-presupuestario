const FileSystemCache = require('file-system-cache').default;
const path = require('path');
const stringify = require('fast-json-stable-stringify');

const cacheFolder = path.join(__dirname, '..', '..', '..', 'tmp-static');
const cache = FileSystemCache({ basePath: cacheFolder });

const getKeyForRequest = (req) => `${req.baseUrl}${req.path}${stringify(req.query)}`

const getCache = async (req, res, next) => {
  let cachedResponse;
  try {
    const key = getKeyForRequest(req);
    cachedResponse = await cache.get(key);
  } catch(e) {
    console.log(e);
  }

  if (cachedResponse) {
    res.json(cachedResponse);
  } else {
    next();
  }
}

const saveCache = (req, res) => {
  const { response } = res.locals;
  res.json(response);
  const key = getKeyForRequest(req);
  cache.save([{ key, value: response }]);
};

module.exports = { getCache, saveCache };
