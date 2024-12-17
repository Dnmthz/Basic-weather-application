document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'Openweathermap api';
    const city = 'Input city here, ';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const cityElement = document.getElementById('city');
            const temperatureElement = document.getElementById('temperature');
            const conditionsElement = document.getElementById('conditions');

            cityElement.textContent = data.name;
            temperatureElement.textContent = `${data.main.temp}°F`;
            conditionsElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p>Error fetching weather data. Please check the console for details.</p>`;
        });
});
