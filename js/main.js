const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');


const handleNav = () => {
    nav.classList.toggle('nav--active');

    document.body.classList.add('no-scroll')

    navBtnBars.classList.remove('black-bars-color');

    if (!nav.classList.contains('nav--active')) {
        setTimeout(function () {
            handleObserver();
        }, 200);
        document.body.classList.remove('no-scroll')
    }

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active');
        })
    });

    handleNavItemsAnimation();
    deleteAnimation()
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = `.${delayTime}s`;
        delayTime++;
    })
}

const deleteAnimation = () => {
    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            allNavItems.forEach(el => {
                el.classList.remove('nav-items-animation');
            })
        })
    })
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {

            // sprawdzamy czy nasza sekcja jest w odpowiednim miejs (czuj juz tam sie zescrollowalismy)
            // doajemy 60 bo nasze dodatki maja 50px
            navBtnBars.classList.add('black-bars-color');
        }
        else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color');
        }

    })

}


handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver)
