const request = require('request');
const key = require('./key');

var fetchCityWeather = (argv, callback) => {
    
    var details;
    if( argv.cntry !== null) {
        details = argv.city+','+argv.country;
    }else {
        details = argv.city;
    }

    var url = `http://api.openweathermap.org/data/2.5/weather?q=${details}&APPID=${key.apikey}`;

    request({
        url: url,
        json: true,
    }, (error, response, body) => {
        if(error){
            callback(error);
        } else if(response.body.cod == '404'){
            callback('ERROR : '+response.body.cod+' : '+response.body.message);
        } else if(response.body.cod == 401){
            callback(`ERROR : ${response.body.cod} : ${response.body.message}`);
        }  
        else{
            callback(undefined, {
                cid: body.id,
                cname: body.name,
                icon: body.weather[0].icon,
                mainweather: body.weather[0].main, 
            });
        }
    });
};


module.exports.fetchCityWeather = fetchCityWeather;