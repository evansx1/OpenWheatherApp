const axios = require('axios');

const getLocationByIp = async (myIp) => {
    try {
      return await axios.get(`https://api.ipfind.com?ip=${myIp}&auth=${process.env.API_FIND_KEY}`)
    } catch (error) {
      console.error(error)
    }
};

module.exports = {
    getLocationByIp
}
