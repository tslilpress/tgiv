
const menuLinks = document.querySelectorAll('.navigation__link')

const uncheck = () => {
    document.querySelector('.navigation__checkbox').checked = false
}


for(i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', uncheck)
}

