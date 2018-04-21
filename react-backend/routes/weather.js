require('dotenv').config();
var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET api/weather */
router.get('/api/weather/:lat/:lng', function(req, res, next) {
  // var baseUrl = 'https://api.darksky.net';
  // const forecastUrl = baseUrl + '/forecast/' + process.env.API_KEY + '/' + req.params.lat + ',' + req.params.lng;
  // axios.get(forecastUrl)
  //   .then(response => res.json(response.data))
  //   .catch(error => error);
  res.json({
    "currently": {
      "time": 1524324949,
      "summary": "Light Rain",
      "icon": "rain",
      "nearestStormDistance": 0,
      "precipIntensity": 0.013,
      "precipIntensityError": 0.001,
      "precipProbability": 1,
      "precipType": "rain",
      "temperature": 35.53,
      "apparentTemperature": 35.53,
      "dewPoint": 32.4,
      "humidity": 0.88,
      "pressure": 1022.5,
      "windSpeed": 2.7,
      "windGust": 4,
      "windBearing": 23,
      "cloudCover": 0.78,
      "uvIndex": 2,
      "visibility": 5.28,
      "ozone": 367.72
    },
  });
});

module.exports = router;
