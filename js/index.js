const navBar = document.querySelector('.navOl')
const mobileMenuList = document.querySelectorAll('.mobileNavOl li')
const mobileMenuBtn = document.querySelector(".mobileMenuBtn")
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

mobileMenuBtn.addEventListener("click", function() {
    const nav = document.querySelector(".mobileNavOl");
    nav.style.visibility = nav.style.visibility === "visible" ? "hidden" : "visible"
    });