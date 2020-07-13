const express = require("express");
const routes = express.Router();
const locationCtrl = require("../controllers/locationController");

//[GET methods]
routes.get("/location", locationCtrl.getWeatherByLocation);

module.exports = routes;