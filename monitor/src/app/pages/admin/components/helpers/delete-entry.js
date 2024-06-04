const axios = require('axios');

module.exports = async (type, entry) => {
  const { data } = await axios.delete(`/api/admin/${type}`, { data: entry });
  return data;
}
