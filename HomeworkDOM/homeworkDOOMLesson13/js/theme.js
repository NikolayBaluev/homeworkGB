const lightThemeClass = 'lite-theme';
const darkThemeClass = 'dark-theme';
const themeKey = 'theme';

export function applyTheme(theme) {
    document.body.classList.remove(darkThemeClass, lightThemeClass);
    document.body.classList.add(theme);
}

export function switchTheme() {
    const currentTheme = localStorage.getItem(themeKey) || lightThemeClass;
    const newTheme = currentTheme === lightThemeClass ? darkThemeClass
    : lightThemeClass;
    localStorage.setItem(themeKey, newTheme);
    applyTheme(newTheme);
}

export function iniTheme() {
    const savedTheme = localStorage.getItem(themeKey) || lightThemeClass;
    applyTheme(savedTheme);
}

