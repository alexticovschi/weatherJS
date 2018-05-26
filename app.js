// Initialize storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Initialize UI object
const ui = new UI();

// weather.changeLocation('Edgware', 'UK');

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location
    weather.changeLocation(city, state);

    // Set location in Local Storage
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
})

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



