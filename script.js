const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
         document.documentElement.setAttribute('data-theme', 'light');
    }
}

//event listener
toggleSwitch.addEventListener('change', switchTheme);