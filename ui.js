class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');     
    }

    displayInfo(data) {
        this.location.textContent = data.display_location.full;
        this.description.textContent = data.weather;
        this.string.textContent = data.temperature_string;
        this.icon.setAttribute('src', data.icon_url);
        this.humidity.textContent = `Relative Humidity: ${data.relative_humidity}`;
        this.feelsLike.textContent = `Feels Like: ${data.feelslike_string}`;
        this.dewpoint.textContent = `Temperature: ${data.dewpoint_string}`;
        this.humidity.textContent = `Relative Humidity: ${data.relative_humidity}`;
        this.wind.textContent = `Wind: ${data.wind_string}`;
    }
}