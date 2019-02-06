const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=U8Q2u957YXvgRTGw5dPg9aBmkQQtDKAt&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    console.log(JSON.stringify(response.data,undefined,2));

    let lat=body.results[0].locations[0].latLng.lat;
    let lng=body.results[0].locations[0].latLng.lng;
    let weatherUrl = `https://api.darksky.net/forecast/6c4cb7cfb271fe90fb8771937cd40e65/${lat},${lng}`;

    return axios.get(weatherUrl);
}).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
    console.log(e);
});
