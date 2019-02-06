const request = require('request');

var geocodeAddress = (address) => {
    //return a promise
    return new Promise((resolve,reject) => {
        let encodedAddress = encodeURIComponent(address);

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=U8Q2u957YXvgRTGw5dPg9aBmkQQtDKAt&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers.');}
            // } else if (body.status === 0) {
            else{
                resolve({
                    address : body.results[0].providedLocation.location,
                    latitude : body.results[0].locations[0].latLng.lat,
                    longitude : body.results[0].locations[0].latLng.lng
                });
            }
        });    
    });
};

geocodeAddress('-12345').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
    console.log(errorMessage);
});