const slides = document.getElementById("slide");
const slide = document.querySelectorAll("#slide div");

let idx = 0;

function slider() {
    idx++;

    if (idx > slide.length - 15) {
        idx = 0;
        console.log(slide.length);
    }

    slides.style.transform = `translateX(${-idx * 1400}px)`;
}

setInterval(slider, 10000);