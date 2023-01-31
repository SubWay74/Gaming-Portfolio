const cursor = document.querySelector(".cursor");


function cursorMove(e) {
    cursor.style.top = `${e.pageY}px`
    cursor.style.left = `${e.pageX}px`
}

window.addEventListener("mousemove", cursorMove)

anime({
    targets: '.social ul li',
    translateX: 50,
    scale: 1.2,
    rotate: '1turn',
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: anime.stagger(300) // increase delay by 100ms for each elements.
});

const homeBtn = document.getElementById("home");
const skillsBtn = document.getElementById("skills");

homeBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

skillsBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 600,
        behavior: "smooth"
    })
})