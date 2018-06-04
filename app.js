const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address)
    .then((geoResults) => {
        console.log(`Location: ${geoResults.address}`);
        return weather.getWeather(geoResults.latitude, geoResults.longitude);
    })
    .then((weatherResults) => {
        console.log(`Outlook: ${weatherResults.summary}`);
        console.log(`Current temperature: ${weatherResults.temperature} degrees Fahrenheit`);
        console.log(`Apparent temperature: ${weatherResults.apparentTemperature} degrees Fahrenheit`);
        console.log(`Humidity: ${weatherResults.humidity*100}%`);
        console.log(`Wind speed: ${weatherResults.windSpeed} miles/hour`);
        console.log(`Wind bearing: ${weatherResults.windBearing} degrees`);
        console.log(`Cloud cover: ${weatherResults.cloudCover*100}%`);
        console.log(`Visibility: ${weatherResults.visibility} miles`);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });
