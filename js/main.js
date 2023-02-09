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
const slider = document.querySelectorAll('.items');


slider.forEach( (j) => {
    const end = () => {
        isDown = false;
    }
    
    const start = (e) => {
        isDown = true;
        startX = e.pageX || e.touches[0].pageX - j.offsetLeft; 
        scrollLeft = j.scrollLeft;	
    }
    
    const move = (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - j.offsetLeft;
        const dist = (x - startX);
        j.scrollLeft = scrollLeft - dist;
        // slider.scrollLeft -= dist;
    }
    
    (() => {
        j.addEventListener('mousedown', start);
        
        j.addEventListener('touchstart', start);
    
        j.addEventListener('mousemove', move);
        
        j.addEventListener('touchmove', move);
    
        j.addEventListener('mouseleave', end);
        
        j.addEventListener('mouseup', end);
        
        j.addEventListener('touchend', end);
    })();
})

const footerEl = document.getElementById("footer");

const footerImg = document.querySelector(".img-footer");
const footerHeader = document.querySelector(".h1-footer");
const footerUl = document.querySelector(".ul-footer");

console.log(footerImg)
console.log(footerHeader)
console.log(footerUl)

window.addEventListener("scroll", () => {
    console.log(window.scrollY)
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

