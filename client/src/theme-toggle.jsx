// /client/src/theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
  
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.add(currentTheme);
    }
  
    themeToggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      let theme = 'light';
      if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
      }
      // Save the user's theme preference in local storage
      localStorage.setItem('theme', theme);
    });
  });
  