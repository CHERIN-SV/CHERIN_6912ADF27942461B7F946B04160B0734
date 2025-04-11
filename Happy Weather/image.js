// Image slider functionality using Unsplash API
const UNSPLASH_API_KEY = 'VGOtRZejwKVtlWXgpEfP1QsMTayKMyd5Xq4bIY1gOSM';
let currentImageIndex = 0;
let cityImages = [];

async function updateCityImages(city) {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(city)}&per_page=10`, {
            headers: {
                'Authorization': `Client-ID ${UNSPLASH_API_KEY}`
            }
        });
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            cityImages = data.results.map(img => ({
                url: img.urls.regular,
                alt: img.alt_description || city
            }));
            
            currentImageIndex = 0;
            updateImageSlider();
            setupSliderControls();
        }
    } catch (error) {
        console.error('Error fetching city images:', error);
    }
}

function updateImageSlider() {
    const container = document.getElementById('cityImages');
    if (cityImages.length > 0) {
        container.innerHTML = `
            <img src="${cityImages[currentImageIndex].url}" 
                 alt="${cityImages[currentImageIndex].alt}"
                 style="width: 100%; height: 100%; object-fit: cover;">
        `;
    }
}

function setupSliderControls() {
    document.querySelector('.slider-btn.prev').onclick = () => {
        currentImageIndex = (currentImageIndex - 1 + cityImages.length) % cityImages.length;
        updateImageSlider();
    };

    document.querySelector('.slider-btn.next').onclick = () => {
        currentImageIndex = (currentImageIndex + 1) % cityImages.length;
        updateImageSlider();
    };
}