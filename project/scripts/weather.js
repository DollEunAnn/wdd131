const apiKey = 'e8c74eaad7a89799b9c47fedbe754755';

function getWeather(city) {
    console.log(city, 'here');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display the fetched weather data
function displayWeather(data) {
    const temperature = document.getElementById('temperature');
    temperature.textContent = `${data.main.temp}°C`;
}

document.addEventListener('DOMContentLoaded', () => {
    getWeather('Manila, PH');
});
