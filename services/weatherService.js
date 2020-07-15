const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const getWeatherByCity = async (city) => {

    const units = "metric";
    const APPID = process.env.OPEN_WEATHER_KEY;

    try {
        return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${APPID}`)
      } catch (error) {
        console.error(error);
        return error.response;
      }
};

const getForecastWeatherByCity = async (city) => {
    const units = "metric";
    const APPID = process.env.OPEN_WEATHER_KEY;

    try {
        return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&APPID=${APPID}`)
      } catch (error) {
        console.error(error)
        return error.response;
      }
};

module.exports = {
    getWeatherByCity,
    getForecastWeatherByCity
}