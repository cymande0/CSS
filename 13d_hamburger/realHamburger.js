// JS
// Easy sposob

// const burger = document.querySelector(".burger");
// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-times");
// const column = document.querySelector("aside");
// const wraper = document.querySelector(".wrapper");

// burger.addEventListener("click", function() {
//     iconBurger.classList.toggle("show");
//     iconX.classList.toggle("show");
//     column.classList.toggle("show");
//     wraper.classList.toggle("show");
// })

// Trudniejszy sposób
const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active");

burger.addEventListener("click", function() {
    for(let i = 0; i < activeElement.length; i++){
        activeElement[i].classList.toggle("show");
    }
})


// JQ
// $(".burger").on("click", function(){
//     $(".fas, aside, .wrapper").toggleClass("show");
// })