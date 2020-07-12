const locationService = require("../services/locationService");
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const myIp = "8.8.8.8"

const getLocationByIp = async () => {
    try {
      return await axios.get(`https://api.ipfind.com?ip=${myIp}&auth=${process.env.API_FIND_KEY}`)
    } catch (error) {
      console.error(error)
    }
  }

const getByLocation = async (req, res) => {
    req.body = {
        ip: myIp
    };
    console.log("this is your request body: ", req.body);

    const myLocation = await getLocationByIp(myIp).then( result => {
        console.log("data: ", result.data);
    });

    // const results = await locationService.getWeatherByLocation(req);
    res.send(myIp);
};

module.exports = {
    getByLocation
};