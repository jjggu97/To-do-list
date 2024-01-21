const themeSwitch = document.getElementById('switch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});
