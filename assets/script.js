function changeMode () {
    changeClasses();
    changeText();
    changeImg();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    description.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = '<i class="far fa-sun"></i> Change theme';
        description.innerHTML = 'You are currently viewing it in Dark Mode.'
        return;
    }

    button.innerHTML = '<i class="far fa-moon"></i> Change theme';
    description.innerHTML = 'You are currently viewing it in Light Mode.'
}

function changeImg() {
    if (body.classList.contains(darkModeClass)) {
        document.getElementById('image').src="imgs/hugo-moon.png"
        return;
    }
    document.getElementById('image').src="imgs/hugo-waiting.png"
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('main-title');
const description = document.getElementById('description');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);