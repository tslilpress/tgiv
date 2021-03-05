// NAV PULL UP ON HYPERLINK CLICK
const menuLinks = document.querySelectorAll('.navigation__link')

const uncheck = () => {
    document.querySelector('.navigation__checkbox').checked = false
}


for(i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', uncheck)
}


// FADE IN SECTION ON SCROLL 

const fades = document.querySelectorAll('.fade-in')

const fadeInOnScroll = new IntersectionObserver(function(
    entries,
    fadeInOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear')
            fadeInOnScroll.unobserve(entry.target)
        }
    })
})

fades.forEach(fade => {
    fadeInOnScroll.observe(fade)
})


