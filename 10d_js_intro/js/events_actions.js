const btn = document.querySelector('button');
const paragraph = document.querySelector('p');

// Element.addEventListener("jakie wydarzenie", "co ma sie stac");


// btn.addEventListener('click', function() {
//     console.log("klik!")
//     btn.style.backgroundColor = "red";
// })


// btn.addEventListener('mouseover', function(){
//     console.log("najechane")
// })


// btn.addEventListener('mousemove', function(){
//     btn.style.backgroundColor = "red";
//     console.log("move");
// })


// btn.addEventListener('mousemove', function(){
//   alert("kliknaless") 
// })


let clickNumbers = 0;
btn.addEventListener('click', function() {
    clickNumbers += 1;
    console.log("Click number: ", clickNumbers);
})

// window.addEventListener('scroll', function() {
//     console.log("skrolujesz");
// })

// document.addEventListener('scroll', function(){
//     console.log("skrolujesz o " + window.scrollY + "px");
// })


// function showScrollSize() {
//     console.log("Skrolujesz o " + window.scrollY + "px");
// }

// window.addEventListener('scroll', showScrollSize);

///////////////////////////////////////////////////////
const spanResult = document.querySelector('span');

function changeStateOfSpan() {
    spanResult.textContent = window.scrollY;
}

window.addEventListener('scroll', changeStateOfSpan);

