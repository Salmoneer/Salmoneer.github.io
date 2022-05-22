window.addEventListener('ready', () => {
    let headblock = document.getElementById("headblock");
});

window.addEventListener('scroll', () => {
    if (!headblock) {
        return;
    }

    var distanceToTop = window.pageYOffset + headblock.getBoundingClientRect().top;
    var elementHeight = headblock.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;

    var opacity = 1;

    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight / 2;
    }

    if (opacity >= 0) {
        headblock.style.opacity = opacity;
    }
});