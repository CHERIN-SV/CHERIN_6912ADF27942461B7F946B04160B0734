// City description functionality (without news)
async function updateCityDescription(city) {
    try {
        // Fetch Wikipedia summary for the city
        const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(city)}`);
        const wikiData = await wikiResponse.json();

        const cityInfoHTML = `
            <div class="city-info">
                <div class="city-summary"><br>
                    <h3>About ${city}</h3><br>
                    <p>${wikiData.extract || 'No description available.'}</p>
                </div>
            </div>
        `;

        document.getElementById('cityInfo').innerHTML = cityInfoHTML;
    } catch (error) {
        console.error('Error fetching city description:', error);
        document.getElementById('cityInfo').innerHTML = '<p class="error">Error fetching city information. Please try again.</p>';
    }
}
