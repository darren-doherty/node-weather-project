const axios = require('axios');

const API_KEY = 'INSERT_API_KEY_HERE';

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const encodedAddress = encodeURIComponent(address); 
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`)
        .then((response) => {
            if(response.status === 200) {
                var formattedAddress = response.data.results[0].formatted_address;
                var latitude = response.data.results[0].geometry.location.lat;
                var longitude = response.data.results[0].geometry.location.lng;
                resolve({
                    address: formattedAddress,
                    latitude,
                    longitude
                });
            }
            else {
                reject('Unable to fetch location data');
            }
        })
        .catch((e) => {
            reject('Unable to fetch location data');
        });    
    });
};

module.exports = {
    geocodeAddress
};
