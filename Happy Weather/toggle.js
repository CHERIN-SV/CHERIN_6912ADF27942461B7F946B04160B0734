// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeIcon(savedTheme === 'dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        body.classList.remove(isDarkMode ? 'dark-mode' : 'light-mode');
        body.classList.add(isDarkMode ? 'light-mode' : 'dark-mode');
        
        // Save theme preference
        localStorage.setItem('theme', isDarkMode ? 'light-mode' : 'dark-mode');
        updateThemeIcon(!isDarkMode);
    });

    function updateThemeIcon(isDarkMode) {
        themeIcon.src = isDarkMode ? 
            'star.gif' : 
            'sun.gif';
    }
});