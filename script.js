const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
//toggleDarkLightMode('dark')
//toggleDarkLightMode('light')


//Dark or Light images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`; //template string eftersom vi vill använda variabler istället för koda en massa
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;   
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

// Switch Theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

//event listener
toggleSwitch.addEventListener('change', switchTheme);

