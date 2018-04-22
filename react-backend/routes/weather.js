require('dotenv').config();
var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET api/weather */
router.get('/api/weather/:lat/:lng', function(req, res, next) {
  var baseUrl = 'https://api.darksky.net';
  const forecastUrl = baseUrl + '/forecast/' + process.env.API_KEY + '/' + req.params.lat + ',' + req.params.lng;
  axios.get(forecastUrl)
    .then(response => res.json(response.data))
    .catch(error => error);
});

module.exports = router;
