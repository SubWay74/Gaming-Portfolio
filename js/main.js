const cursor = document.querySelector(".cursor");


function cursorMove(e) {
    cursor.style.top = `${e.pageY}px`
    cursor.style.left = `${e.pageX}px`
}

window.addEventListener("mousemove", cursorMove)

// anime({
//     targets: ".kekw",
//     top: "50%",
//     left: "50%",

//     duration: 2000,
// });
