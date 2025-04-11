// Precipitation chart functionality
let precipChart;

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('precipChart').getContext('2d');
    
    precipChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Rain (mm)',
                    data: [],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Snow (mm)',
                    data: [],
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
});

async function updatePrecipitation(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${WEATHER_API_KEY}`);
        const data = await response.json();

        if (response.ok) {
            const dailyData = processForecastData(data.list);
            updatePrecipitationChart(dailyData);
        }
    } catch (error) {
        console.error('Error fetching precipitation data:', error);
    }
}

function processForecastData(forecastList) {
    const dailyData = {};
    
    forecastList.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!dailyData[date]) {
            dailyData[date] = { rain: 0, snow: 0 };
        }
        
        if (item.rain && item.rain['3h']) {
            dailyData[date].rain += item.rain['3h'];
        }
        if (item.snow && item.snow['3h']) {
            dailyData[date].snow += item.snow['3h'];
        }
    });

    return dailyData;
}

function updatePrecipitationChart(dailyData) {
    const dates = Object.keys(dailyData);
    const rainData = dates.map(date => dailyData[date].rain);
    const snowData = dates.map(date => dailyData[date].snow);

    precipChart.data.labels = dates;
    precipChart.data.datasets[0].data = rainData;
    precipChart.data.datasets[1].data = snowData;
    precipChart.update();
}