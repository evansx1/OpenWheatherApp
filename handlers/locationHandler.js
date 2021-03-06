const weatherService = require("../services/weatherService");
const LocationService = require("../services/ipLocationService");
const dotenv = require("dotenv");
dotenv.config();

const myIp = "186.143.199.184";

const getLocationByIp = async (req, res) => {
    try {
        const locationInfo = await LocationService.getLocationByIp(myIp);
        console.log("Location data by ip: ", locationInfo.data);
        res.status(200).send(locationInfo.data);
    } catch (error) {
        res.status(404).send("Location not found");
    }
}

const getWeatherByLocation = async (req, res) => {
    const {city} = req.params;
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
    const {city} = req.params;
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