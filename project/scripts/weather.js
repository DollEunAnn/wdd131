const apiKey = 'e8c74eaad7a89799b9c47fedbe754755';

const units = [
    {
        id: "celcius",
        name: "Celsius (°C)",
        value: "metric"
    },
    {
        id: "farenheit",
        name: "Fahrenheit (°F)",
        value: "imperial"
    },
];


// populate the radio button list
document.addEventListener("DOMContentLoaded", function () {

    const unitContainer = document.getElementById("unit-container");

    units.forEach(unit => {
        // Create a label to wrap the radio button
        const label = document.createElement("label");

        // Create the radio button
        const unitOption = document.createElement("input");
        unitOption.type = "radio";
        unitOption.name = "unit";
        unitOption.id = unit.id;
        unitOption.value = unit.value;

        // Set the label's text and append the radio button
        label.textContent = unit.name;
        label.appendChild(unitOption);

        // Add the label to the container
        unitContainer.appendChild(label);

    });
});

// function to get the weather
function getWeather(city, unit) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching data:', error));
}

// function to display the weather
function displayWeather(data) {
    const temperature = document.getElementById('temperature');
    const unitLabel = document.querySelector('input[name="unit"]:checked').value === 'metric' ? '°C' : '°F';
    temperature.textContent = `${data.main.temp} ${unitLabel}`;
}


document.addEventListener('DOMContentLoaded', () => {
    // Set initial value from localStorage, default to 'metric'
    const selectedValue = localStorage.getItem('selectedUnit') || 'metric';
    document.getElementById("celcius").checked = true;

    // Initial call to getWeather with saved or default unit
    getWeather('Manila, PH', selectedValue);

    // Event listener for changes on radio buttons
    document.querySelectorAll('input[name="unit"]').forEach(radio => {
        radio.addEventListener("change", (event) => {
            const selectedUnit = event.target.value;
            localStorage.setItem('selectedUnit', selectedUnit);
            getWeather('Manila, PH', selectedUnit);
        });
    });
});



