const locationHandler = require("./locationHandler");
const weatherService = require("../services/weatherService");
const ipLocationService = require("../services/ipLocationService");

jest.mock("../services/ipLocationService.js");
jest.mock("../services/weatherService.js");

describe("LocationHandler should", () => {

    beforeEach(() => {
        jest.clearAllMocks();

        ipLocationService.getLocationByIp = jest.fn((_) => {
            return ipLocationResponse;
        });

        weatherService.getWeatherByCity = jest.fn((_) => {
            return weatherResponse;
        });

        weatherService.getForecastWeatherByCity = jest.fn((_) => {
            return forecastResponse;
        });

    });

    it("return location by ip", async() => {
        await locationHandler.getLocationByIp(null , res);
        expect(ipLocationService.getLocationByIp).toBeCalledWith(myIp);
        expect(res.send).toBeCalled();
    });

    it("return the weather in a given city", async() => {
        await locationHandler.getWeatherByLocation(req ,res);
        expect(weatherService.getWeatherByCity).toBeCalledWith(req.params.city);
        expect(res.send).toBeCalled();
    });

    it("return the weather in a given IP", async() => {
        req.params.city = "";
        await locationHandler.getWeatherByLocation(req ,res);
        expect(ipLocationService.getLocationByIp).toBeCalledWith(myIp);
        expect(weatherService.getWeatherByCity).toBeCalledWith(ipLocationResponse.data.city);
        expect(res.send).toBeCalled();
    });

    it("return the forecast weather in a given city", async() => {
        req.params.city = "Buenos Aires";
        await locationHandler.getFiveDaysWeather(req ,res);
        expect(weatherService.getForecastWeatherByCity).toBeCalledWith(req.params.city);
        expect(res.send).toBeCalled();
    });

    it("return the forecast weather in a given IP", async() => {
        req.params.city = "";
        await locationHandler.getFiveDaysWeather(req ,res);
        expect(ipLocationService.getLocationByIp).toBeCalledWith(myIp);
        expect(weatherService.getForecastWeatherByCity).toBeCalledWith(ipLocationResponse.data.city);
        expect(res.send).toBeCalled();
    });


    //Mocked values

    const ipLocationResponse = {
        data: {
            ip_address: '186.143.199.184',
            country: 'Argentina',
            country_code: 'AR',
            continent: 'South America',
            continent_code: 'SA',
            city: 'Buenos Aires',
            county: null,
            region: 'Buenos Aires F.D.',
            region_code: '07',
            timezone: 'America/Argentina/Buenos_Aires',
            owner: null,
            longitude: -58.3845,
            latitude: -34.6021,
            currency: 'ARS',
            languages: [ 'es-AR', 'en', 'it', 'de', 'fr', 'gn' ]
        }
    }

    const weatherResponse = {
        data: {
            coord: { lon: -58.38, lat: -34.61 },
            weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' } ],
            base: 'stations',
            main:
            {
                temp: 7.5,
                feels_like: 2.91,
                temp_min: 6.67,
                temp_max: 8,
                pressure: 1023,
                humidity: 36 
            },
            visibility: 10000,
            wind: { speed: 2.6, deg: 260 },
            clouds: { all: 0 },
            dt: 1594687624,
            sys:
            {
                type: 1,
                id: 8224,
                country: 'AR',
                sunrise: 1594637909,
                sunset: 1594673984 
            },
            timezone: -10800,
            id: 3435910,
            name: 'Buenos Aires',
            cod: 200 
        }
    }

    const forecastResponse = {
        data: { cod: '200',
        message: 0,
        cnt: 40,
        list:
         [ { dt: 1594695600,
             main: [Object],
             weather: [Array],
             clouds: [Object],
             wind: [Object],
             sys: [Object],
             dt_txt: '2020-07-14 03:00:00' },
           { dt: 1594771200,
             main: [Object],
             weather: [Array],
             clouds: [Object],
             wind: [Object],
             sys: [Object],
             dt_txt: '2020-07-15 00:00:00' },
           { dt: 1594857600,
             main: [Object],
             weather: [Array],
             clouds: [Object],
             wind: [Object],
             sys: [Object],
             dt_txt: '2020-07-16 00:00:00' },
           { dt: 1594944000,
             main: [Object],
             weather: [Array],
             clouds: [Object],
             wind: [Object],
             sys: [Object],
             dt_txt: '2020-07-17 00:00:00' },
           { dt: 1595030400,
             main: [Object],
             weather: [Array],
             clouds: [Object],
             wind: [Object],
             sys: [Object],
             dt_txt: '2020-07-18 00:00:00' },
           { dt: 1595116800,
             main: [Object],
             weather: [Array],
             clouds: [Object],
             wind: [Object],
             sys: [Object],
             dt_txt: '2020-07-19 00:00:00' } ],
        city:
         { id: 3435910,
           name: 'Buenos Aires',
           coord: { lat: -34.6132, lon: -58.3772 },
           country: 'AR',
           population: 1000000,
           timezone: -10800,
           sunrise: 1594637909,
           sunset: 1594673983 }
        }
    }

    const res = {
        send: jest.fn()
    };

    const req = {
        params: {
            city : "Buenos Aires"
        }
    }

    const myIp = "186.143.199.184";
});
