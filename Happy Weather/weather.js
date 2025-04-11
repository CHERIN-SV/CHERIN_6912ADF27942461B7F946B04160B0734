// Weather functionality using OpenWeather API
const WEATHER_API_KEY = 'a780060bb504553d6e58f5175cbea249';

async function updateWeather(city) {
    try {
        // First get coordinates for the city
        const geocodingResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${WEATHER_API_KEY}`);
        const geocodingData = await geocodingResponse.json();
        
        if (!geocodingData.length) {
            throw new Error('City not found');
        }

        const { lat, lon } = geocodingData[0];
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${WEATHER_API_KEY}`);
        const data = await response.json();

        if (response.ok) {
            const weatherHTML = `
                <div class="weather-main">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
                    <h2>${Math.round(data.main.temp)}°C</h2>
                    <p>${data.weather[0].description}</p>
                </div>
                <div class="weather-details"><br>
                    <p>💧  Humidity: ${data.main.humidity}%</p>
                    <p>🌀 Wind Speed: ${data.wind.speed} m/s</p>
                    <p>💨Wind Direction: ${getWindDirection(data.wind.deg)}</p>
                </div>
                <div class="sun-times">
                    <p>🌄 Sunrise: ${formatTime(data.sys.sunrise)}</p>
                    <p>🌇 Sunset: ${formatTime(data.sys.sunset)}</p>
                </div>
            `;

            document.getElementById('currentWeather').innerHTML = weatherHTML;
            
            // Update air quality with coordinates
            await updateAirQuality(city, lat, lon);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('currentWeather').innerHTML = '<p class="error">Error fetching weather data. Please try again.</p>';
    }
}

async function updateAirQuality(city, lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
        const data = await response.json();

        if (response.ok) {
            const aqi = data.list[0].main.aqi;
            const aqiInfo = getAQIInfo(aqi);

            const airQualityHTML = `
                <div class="air-quality" style="color: ${aqiInfo.color}">
                    <h3>Air Quality</h3>
                    <p>Index: ${aqi}</p>
                    <p>${aqiInfo.description}</p>
                </div>
            `;

            document.getElementById('airQuality').innerHTML = airQualityHTML;
        }
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        document.getElementById('airQuality').innerHTML = '<p class="error">Error fetching air quality data. Please try again.</p>';
    }
}

function getWindDirection(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
}

function formatTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString();
}

function getAQIInfo(aqi) {
    const aqiData = {
        1: { description: 'Good', color: '#00e400' },
        2: { description: 'Fair', color: '#ffff00' },
        3: { description: 'Moderate', color: '#ff7e00' },
        4: { description: 'Poor', color: '#ff0000' },
        5: { description: 'Very Poor', color: '#8f3f97' }
    };
    return aqiData[aqi] || { description: 'Unknown', color: '#808080' };
}