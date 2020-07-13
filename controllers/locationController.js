const weatherService = require("../services/weatherService");
const LocationService = require("../services/ipLocationService");
const dotenv = require('dotenv');
dotenv.config();

const myIp = "186.143.199.184";

const getWeatherByLocation = async (req, res) => {
    const locationInfo = await LocationService.getLocationByIp(myIp);
    const weather = await weatherService.getWeatherByCity(locationInfo.data.city);
    console.log(weather.data);
    res.send(weather.data);
};

module.exports = {
    getWeatherByLocation
};