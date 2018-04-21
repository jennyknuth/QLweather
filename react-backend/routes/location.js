var express = require('express');
var router = express.Router();
var axios = require('axios');
var getCoords = require('city-to-coords');

/* GET /location/city info */
router.get('/', function(req, res, next) {
  res.json({});
});

router.get('/:city', function(req, res, next) {
  getCoords(req.params.city)
    .then((coords) => {
      res.json(coords);
    });
});

module.exports = router;
