// Initialize weather object
const weather = new Weather('London', 'UK');

// weather.changeLocation('Edgware', 'GLA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
    .then(result =>  {
        console.log(result)
    })
    .catch(err => console.log(err));
}



