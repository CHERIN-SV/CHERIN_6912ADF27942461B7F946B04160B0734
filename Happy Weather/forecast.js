// 5-day forecast functionality
async function updateForecast(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${WEATHER_API_KEY}`);
        const data = await response.json();

        if (response.ok) {
            const dailyForecasts = processDailyForecasts(data.list);
            displayForecast(dailyForecasts);
        }
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

function processDailyForecasts(forecastList) {
    const dailyForecasts = {};
    
    forecastList.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        if (!dailyForecasts[date]) {
            dailyForecasts[date] = {
                temp: forecast.main.temp,
                icon: forecast.weather[0].icon,
                description: forecast.weather[0].description,
                date: forecast.dt * 1000
            };
        }
    });

    return Object.values(dailyForecasts).slice(0, 5);
}

function displayForecast(forecasts) {
    const forecastContainer = document.getElementById('forecast');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    forecastContainer.innerHTML = forecasts.map(forecast => {
        const date = new Date(forecast.date);
        return `
            <div class="forecast-card">
                <h3>${daysOfWeek[date.getDay()]}</h3>
                <p>${date.toLocaleDateString()}</p>
                <img src="https://openweathermap.org/img/wn/${forecast.icon}@2x.png" 
                     alt="${forecast.description}">
                <p class="temp">${Math.round(forecast.temp)}°C</p>
                <p class="description">${forecast.description}</p>
            </div>
        `;
    }).join('');
}