# Node Weather Project #
Node project that allows for retrieval of weather data for a given location.

## Tech Stack ##
* NodeJS
 
## Prerequistes to running application ##
* Install NodeJS from https://nodejs.org/
* Run `npm install` to install node_modules
* Create Google Maps Geocoding API key `https://console.developers.google.com/projectselector/apis/credentials?supportedpurview=project` and place into constant `API_KEY` in file `geocode/geocode.js`
* Create Dark Sky API key `https://darksky.net/dev` and place into constant `API_KEY` in file `weather/weather.js`
* Run commands from command prompt or terminal

## Commands ##
### Find the weather for a given location ### 
`node app.js -a "address to fetch weather for"`

