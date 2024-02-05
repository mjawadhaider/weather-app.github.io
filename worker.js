this.onmessage = function (event) {
    if (event.data === 'fetchWeather') {
        fetchData()
            .then(data => {
                const tempArray = [
                    ...data.forecast.forecastday,
                    ...data.forecast.forecastday,
                    ...data.forecast.forecastday,
                ]
                tempArray.forEach(item => {
                    item.avgFeelsLike = calculateFeelsLikeTemperature(item.day)
                });
                data.forecast.forecastday = tempArray
                this.postMessage(data)
            })
            .catch(error => console.error(error))
    }
};

function calculateFeelsLikeTemperature(itemDay) {
    return -42.379 +
      2.04901523 * itemDay.avgtemp_f +
      10.14333127 * itemDay.avghumidity -
      0.22475541 * itemDay.avgtemp_f * itemDay.avghumidity -
      6.83783 * Math.pow(10, -3) * Math.pow(itemDay.avgtemp_f, 2) -
      5.481717 * Math.pow(10, -2) * Math.pow(itemDay.avghumidity, 2) +
      1.22874 * Math.pow(10, -3) * Math.pow(itemDay.avgtemp_f, 2) * itemDay.avghumidity +
      8.5282 * Math.pow(10, -4) * itemDay.avgtemp_f * Math.pow(itemDay.avghumidity, 2) -
      1.99 * Math.pow(10, -6) * Math.pow(itemDay.avgtemp_f, 2) * Math.pow(itemDay.avghumidity, 2);
}

async function fetchData() {
    try {
        const API_KEY = '0c4867d74c9a4e31b60195652240502'
        const queryParam = 'Lahore'
        const daysParam = 14

        let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${queryParam}&days=${daysParam}`)
        response = await response.json()
        return response
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}