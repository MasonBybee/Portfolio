const navBar = document.querySelector('.navOl')
const mobileMenuList = document.querySelectorAll('.mobileNavOl li')

document.addEventListener('scroll', function() {
    let scrollcheck = window.scrollY;
    if(scrollcheck > 0) {
        navBar.classList.add('scrolled')
    }
    else{navBar.classList.remove('scrolled')
    }
})

mobileMenuList.forEach((li,i) => {
    li.style.transition = `${0.2 + i/10}s all`
})