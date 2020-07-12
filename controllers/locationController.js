const locationService = require("../services/locationService");
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const myIp = "192.168.56.1"

// const location = axios({
//     method: 'get',
//     url: `https://api.ipfind.com?ip=${myIp}&auth=${process.env.API_FIND_KEY}`,
//     responseType: 'json'
//     })
//      .then(function (response) {
//          console.log(response);    
//      });

const getByLocation = async (req, res) => {
    req.body = {
        ip: myIp
    };
    console.log("this is your request body: ", req.body);
    // const results = await locationService.getWeatherByLocation(req);
    res.json({ weather: myIp});
}

module.exports = {
    getByLocation
};