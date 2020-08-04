const FileSystemCache = require('file-system-cache').default;
const path = require('path');

const cacheFolder = path.join(__dirname, '..', '..', '..', 'tmp-static');
const cache = FileSystemCache({ basePath: cacheFolder });

const getCache = async (req, res, next) => {
  let cachedResponse;
  try {
    const key = req.originalUrl;
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
  const key = req.originalUrl;
  cache.save([{ key, value: response }]);
};

module.exports = { getCache, saveCache };
