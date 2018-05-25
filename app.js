// Initialize weather object
const weather = new Weather('London', 'UK');

// Initialize UI object
const ui = new UI();

// weather.changeLocation('Edgware', 'GLA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
    .then(data =>  {
        ui.displayInfo(data);
        console.log(data)
    })
    .catch(err => console.log(err));
}



