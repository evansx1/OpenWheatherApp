const express = require("express");
const routes = express.Router();
const locationCtrl = require("../handlers/locationHandler");

//[GET methods]
routes.get("/location", locationCtrl.getLocationByIp);
routes.get("/current/:city?", locationCtrl.getWeatherByLocation);
routes.get("/forecast/:city?", locationCtrl.getFiveDaysWeather);

module.exports = routes;