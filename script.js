const dataWorker = new Worker('./worker.js')
dataWorker.onmessage = function (event) {
    displayCurrentWeather(event.data.current);
    displayForecast(event.data.forecast.forecastday);
    dataWorker.terminate()
}

function displayForecast(forecast) {
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = forecast.map(day => `
        <div>
        <strong>Date:</strong> ${day.date}
        </div>
        <div>
        <strong>Max Temperature:</strong> ${day.day.maxtemp_c}°C (${day.day.maxtemp_f}°F)
        </div>
        <div>
        <strong>Min Temperature:</strong> ${day.day.mintemp_c}°C (${day.day.mintemp_f}°F)
        </div>
        <div>
        <strong>Condition:</strong> ${day.day.condition.text}
        <img src="${day.day.condition.icon}" alt="${day.day.condition.text}">
        </div>
        <hr>
    `).join('');
}

function displayCurrentWeather(currentWeather) {
    const currentWeatherContainer = document.getElementById('currentWeather');
    currentWeatherContainer.innerHTML = `
        <div>
        <strong>Temperature:</strong> ${currentWeather.temp_c}°C (${currentWeather.temp_f}°F)
        </div>
        <div>
        <strong>Condition:</strong> ${currentWeather.condition.text}
        <img src="${currentWeather.condition.icon}" alt="${currentWeather.condition.text}">
        </div>
        <div>
        <strong>Humidity:</strong> ${currentWeather.humidity}%
        </div>
        <div>
        <strong>Wind:</strong> ${currentWeather.wind_kph} km/h, ${currentWeather.wind_dir}
        </div>
    `;
}

function clearAll() {
    const currentWeatherContainer = document.getElementById('currentWeather');
    currentWeatherContainer.innerHTML = '';

    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = ''
}

function fetchWeather() {
    dataWorker.postMessage('fetchWeather')
}
