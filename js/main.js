const cursor = document.querySelector(".cursor");

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
        top: 00,
        behavior: "smooth"
    })
});

function cursorMove(e) {
    cursor.style.top = `${e.pageY}px`
    cursor.style.left = `${e.pageX}px`
}
window.addEventListener("mousemove", cursorMove)

const music = new Audio('/Rebirth.mp3');
const playBtn = document.getElementById("playbtn");
const musicLine = document.querySelector(".musics p");
music.setAttribute("preload", "none");
let playingMusic = false;
let getTimePercentage;

playBtn.addEventListener("click", () => {
    if(!playingMusic) {
        music.play()
        playBtn.setAttribute("src", "img/play-audio.webp");
        playingMusic = true;
    } else {
        music.pause();
        playBtn.setAttribute("src", "img/no-audio.webp");
        playingMusic = false;
    }
})

setInterval( () => {
    getTimePercentage = Math.floor((music.currentTime / music.duration) * 100);
    musicLine.style.width = `${getTimePercentage}%`
},  1000)


anime({
    targets: '.social ul li',
    translateX: 50,
    rotate: '1turn',
    direction: 'alternate',
    easing: 'easeInOutSine',
    delay: anime.stagger(300) // increase delay by 100ms for each elements.
});


let isDown = false;
let startX;
let scrollLeft;
const sliders = document.querySelectorAll('.items');


sliders.forEach( (slider) => {
    const end = () => {
        isDown = false;
    }
    
    const start = (e) => {
        isDown = true;
        startX = e.pageX || e.touches[0].pageX - slider.offsetLeft; 
        scrollLeft = slider.scrollLeft;	
    }
    
    const move = (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        const dist = (x - startX);
        slider.scrollLeft = scrollLeft - dist;
        // slider.scrollLeft -= dist;
    }

    
    (() => {
        slider.addEventListener('mousedown', start);
        
        slider.addEventListener('touchstart', start);
    
        slider.addEventListener('mousemove', move);
        
        slider.addEventListener('touchmove', move);
    
        slider.addEventListener('mouseleave', end);
        
        slider.addEventListener('mouseup', end);
        
        slider.addEventListener('touchend', end);
    })();
})

const footerEl = document.getElementById("footer");

const footerImg = document.querySelector(".img-footer");
const footerHeader = document.querySelector(".h1-footer");
const footerUl = document.querySelector(".ul-footer");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 1300) {
        footerImg.classList.add("active");
        footerHeader.classList.add("active");
        footerUl.classList.add("active");
    } else {
        footerImg.classList.remove("active");
        footerHeader.classList.remove("active");
        footerUl.classList.remove("active");
    }
})

