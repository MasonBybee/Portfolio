const navBar = document.querySelector('.navOl')
document.addEventListener('scroll', function() {
    let scrollcheck = window.scrollY;
    if(scrollcheck > 0) {
        navBar.classList.add('scrolled')
    }
    else{navBar.classList.remove('scrolled')
    }
})