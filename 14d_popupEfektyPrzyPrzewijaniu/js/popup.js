// 1 wersja

// $(".article button").on("click", function() {
//     $(".modal-wrap").addClass("active");
//     $(".article").addClass("blur");
// })

// $("span.hide").on("click", function(){
//     $(".modal-wrap").removeClass("active");
//     $(".article").removeClass("blur");
// })


// 2 wersja

// $(".article button, span.hide").on("click", function() {
//     $(".modal-wrap").toggleClass("active");
//     $(".article").toggleClass("blur");
// })

// 3 wersja - JS

const btnModal = document.querySelector(".article button");
const btnClose = document.querySelector("span.hide");

btnModal.addEventListener("click", function(){
    document.querySelector(".modal-wrap").classList.add("active");
    document.querySelector(".article").classList.add("blur");
})

btnClose.addEventListener("click", function() {
    document.querySelector(".modal-wrap").classList.remove("active");
    document.querySelector(".article").classList.remove("blur");
})