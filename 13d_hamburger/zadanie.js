const arrow = document.querySelector(".arrow");
const nav = document.querySelector("nav");

function clickArrow() {
    nav.classList.toggle("on");
    arrow.classList.toggle("on");
}

arrow.addEventListener("click", clickArrow);