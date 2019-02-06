const request = require('request');

var getWeather = (lat,lng,callback) => {
    request({
        url: `https://api.darksky.net/forecast/6c4cb7cfb271fe90fb8771937cd40e65/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200)
            callback(undefined,{
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });
        else
            callback('Unable to fetch the weather.');
    });
};

module.exports.getWeather = getWeather;