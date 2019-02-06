const request = require('request');

let geocodeAddress = (address,callback) => {
    let encodedAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=U8Q2u957YXvgRTGw5dPg9aBmkQQtDKAt&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers.');}
        // } else if (body.status === 0) {
        else{
            callback(undefined,{
                address : body.results[0].providedLocation.location,
                latitude : body.results[0].locations[0].latLng.lat,
                longitude : body.results[0].locations[0].latLng.lng
		    });
        }
    });
};    

module.exports.geocodeAddress = geocodeAddress;