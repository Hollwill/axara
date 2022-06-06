window.onscroll = function () {
    scrollFunction()
};
let nav = document.getElementById("navbar")
let navTop = document.querySelector('#navbar-top')

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.background = "white";

        navTop.classList.remove('fixed-top')
        nav.style.top = '0px'


    } else {
        nav.style.background = "none";
        navTop.classList.add('fixed-top')
        nav.style.top = '40px'


    }
}
