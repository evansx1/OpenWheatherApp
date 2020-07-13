const weatherService = require("../services/weatherService");
const LocationService = require("../services/ipLocationService");
const dotenv = require("dotenv");
dotenv.config();

const myIp = "186.143.199.184";

const getLocationByIp = async (req, res) => {
    const locationInfo = await LocationService.getLocationByIp(myIp);
    console.log(locationInfo.data);
    res.send(locationInfo.data);
}

const getWeatherByLocation = async (req, res) => {
    const city = req.params.city;
    let weather;

    if (city) {
        weather = await weatherService.getWeatherByCity(city);
    } else {
        const locationInfo = await LocationService.getLocationByIp(myIp);
        weather = await weatherService.getWeatherByCity(locationInfo.data.city);
    }

    console.log("The weather today: ", weather.data);
    res.send(weather.data);
}; 

const getFiveDaysWeather = async (req, res) => {
    const city = req.params.city;
    let weather;

    if (city) {
        weather = await weatherService.getForecastWeatherByCity(city);
    } else {
        const locationInfo = await LocationService.getLocationByIp(myIp);
        weather = await weatherService.getForecastWeatherByCity(locationInfo.data.city);
    }

    console.log("The weather in the incoming 5 days: ", weather.data);
    res.send(weather.data);
}; 

module.exports = {
    getLocationByIp,
    getWeatherByLocation,
    getFiveDaysWeather
};