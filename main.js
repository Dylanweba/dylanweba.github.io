window.addEventListener('DOMContentLoaded', initializeTheme);

const root = document.documentElement;

function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('preferredTheme', theme);
}

function initializeTheme() {
    var prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode){setTheme("dark");}
    else {setTheme("light");}
    console.log(prefersDarkMode);
}

