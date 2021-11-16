
// Sidebar
let iconMenu = document.querySelector('.header-menu')
console.log(iconMenu)

let openSidebar = document.querySelector('.sidebar')

let closeSidebar = document.querySelector('.sidebar-close')

iconMenu.onclick = () => {
    openSidebar.classList.add('sidebar-open')
}

closeSidebar.onclick = () => {
    openSidebar.classList.remove('sidebar-open')
}

// Slide


const sliderMain = document.querySelector('.content-beaches__sliders')

const sliderItems = document.querySelectorAll('.content-beaches__slide');

const dotItems = document.querySelectorAll('.content-beaches__slider-btn-item');

const sliderLength = sliderItems.length;

let index = 0;

dotItems.forEach((item) => item.addEventListener('click', function(e) {
    dotItems.forEach((el) => {
        el.classList.remove('btn-active')
        sliderItems[index].classList.remove('content-beaches__slide-active')
    })
    e.target.classList.add('btn-active')
    const sliderIndex = parseInt(e.target.dataset.index)
    index = sliderIndex;
    sliderItems[index].classList.add('content-beaches__slide-active')
}))

let autoPlay;

let repeater = () => {
    autoPlay = setInterval(function() {
        sliderItems.forEach((slide) => {
            slide.classList.remove('content-beaches__slide-active')
        });
        dotItems.forEach((dot) => {
            dot.classList.remove('btn-active')
        })
        index++;
        if(index > sliderLength - 1) {
            index = 0;
        }
        dotItems[index].classList.add('btn-active')
        sliderItems[index].classList.add('content-beaches__slide-active')
    }, 3000)
}

repeater()