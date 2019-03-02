const geocode = require('./geocode/geocode');
const yargs = require('yargs');

const argv = yargs.options({
    city: {
        demand: true,
        alias: 'c',
        describe: 'City to fetch weather for.', 
    },
    country: {
        demand: false,
        alias: 'x',
        describe: 'Enter country of the city as an additional parameter for unambiguous results',
    }
})
.help()
.alias('help','h')
.argv;

geocode.fetchCityWeather(argv, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results, undefined, 2));
    }
});

