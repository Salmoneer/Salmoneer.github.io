const barupdatedelay = 25;
let barupdate = 0;
let started = false;

document.addEventListener("load", function() {
    let headblock = document.getElementById("headblock");
});

window.addEventListener('scroll', () => {
    if (!headblock) {
        return;
    }

    let distanceToTop = window.pageYOffset + headblock.getBoundingClientRect().top;
    let elementHeight = headblock.offsetHeight;
    let scrollTop = document.documentElement.scrollTop;

    let opacity = 1;

    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }

    if (opacity >= 0) {
        headblock.style.opacity = opacity;
    }
});

function barclick() {
    let line = document.getElementById("line");
    line.classList.remove("noclick");
    line.classList.add("barclicked");
}