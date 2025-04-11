// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const voiceSearchBtn = document.getElementById('voiceSearchBtn');
    const cityInput = document.getElementById('cityInput');

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            searchCity(city);
        }
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) {
                searchCity(city);
            }
        }
    });

    voiceSearchBtn.addEventListener('click', startVoiceRecognition);

    function startVoiceRecognition() {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onstart = () => {
                voiceSearchBtn.style.backgroundColor = '#ff0000';
            };

            recognition.onend = () => {
                voiceSearchBtn.style.backgroundColor = '';
            };

            recognition.onresult = (event) => {
                const city = event.results[0][0].transcript;
                cityInput.value = city;
                searchCity(city);
            };

            recognition.start();
        } else {
            alert('Voice recognition is not supported in your browser.');
        }
    }

    function searchCity(city) {
        // Trigger all necessary updates
        updateWeather(city);
        updateMap(city);
        updateCityImages(city);
        updateForecast(city);
        updatePrecipitation(city);
        updateCityDescription(city);
    }
});