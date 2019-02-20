const key = require('./key');
const request = require('request');


request({
    url: `http://api.openweathermap.org/data/2.5/weather?q=Karachi,Pakistan&APPID=${key.apikey}`,
    json: true,
}, (error, response, body) => {
    console.log(`City ID: ${body.id}`);
    console.log(`City Name: ${body.name}`);
    console.log(`Weather Main: ${body.weather[0].main}`);
});