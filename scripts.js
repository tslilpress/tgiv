// NAV PULL UP ON HYPERLINK CLICK
const menuLinks = document.querySelectorAll('.navigation__link')

const uncheck = () => {
    document.querySelector('.navigation__checkbox').checked = false
}


for(i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', uncheck)
}


// FADE IN SECTIONS ON SCROLL 

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


// HEADER SLIDESHOW 

const slideshowImages = document.querySelectorAll(".header .header__slideshow-img")
// console.log(slideshowImages)

const intervalDelay = 3000;

let currentImageNumber = 0

slideshowImages[currentImageNumber].style.opacity = 1

setInterval(nextImage, intervalDelay)

function nextImage() {
    const tempImageNumber = currentImageNumber
    setTimeout(() => {
        slideshowImages[tempImageNumber].style.opacity = 0
    }, 1500)
    currentImageNumber = (currentImageNumber + 1) % slideshowImages.length
    // console.log(currentImageNumber)
    slideshowImages[currentImageNumber].style.opacity = 1

}

