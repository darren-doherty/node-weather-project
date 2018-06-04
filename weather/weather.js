const axios = require('axios');

const API_KEY = 'INSERT_API_KEY_HERE';

var getWeather = (latitude, longitude) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`)
        .then((response) => {
            if(response.status === 200) {
                resolve(response.data.currently);
            }
            else {
                reject('Unable to fetch weather data');
            }
        })
        .catch((e) => {
            reject('Unable to fetch weather data');
        });    
    });
};

module.exports = {
    getWeather
};
