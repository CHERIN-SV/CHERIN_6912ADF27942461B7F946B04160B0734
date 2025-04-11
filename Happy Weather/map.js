// Map functionality using OpenWeather for geocoding and Leaflet for map
let map;
const openWeatherApiKey = 'a780060bb504553d6e58f5175cbea249';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Leaflet map centered at 0,0
    map = L.map('map').setView([0, 0], 2);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
});

async function updateMap(city) {
    try {
        // Fetch city coordinates using OpenWeather Geocoding API
        const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${openWeatherApiKey}`);
        const geoData = await geoRes.json();

        if (geoData.length === 0) {
            alert('City not found. Try another one.');
            return;
        }

        const lat = geoData[0].lat;
        const lon = geoData[0].lon;

        // Pan to the city
        map.setView([lat, lon], 10);

        // Remove existing markers
        if (window.cityMarker) {
            map.removeLayer(window.cityMarker);
        }

        // Add a new marker with popup
        window.cityMarker = L.marker([lat, lon]).addTo(map)
            .bindPopup(`${city}`)
            .openPopup();

    } catch (error) {
        console.error('Error updating map with OpenWeather geocoding:', error);
    }
}
