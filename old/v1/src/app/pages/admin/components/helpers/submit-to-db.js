const axios = require('axios');

module.exports = async (type, newContent) => {
  const { data } = await axios.post(`/api/admin/${type}`, newContent);
  return data;
}
