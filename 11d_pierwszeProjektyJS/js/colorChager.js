const webBody = document.body;
// const orangeBtn = document.querySelector('.orange');
// const greenBtn = document.querySelector('.green');
// const blueBtn = document.querySelector('.blue');
// const yellowBtn = document.querySelector('.yellow');
// const redBtn = document.querySelector('.red');

const items = document.querySelectorAll('div');

// function changeForOrange() {
//     webBody.className = "orange";
//     // webBody.style.background = "orange";
// }

// function changeForGreen() {
//     webBody.className = "green";
//     // webBody.style.background = "green";
// }

// function changeForBlue() {
//     webBody.className = "blue";
//     // webBody.style.background = "blue";
// }

// function changeForYellow() {
//     webBody.className = "yellow";
//     // webBody.style.background = "yellow";
// }

// function changeForRed() {
//     webBody.className = "red";
//     // webBody.style.background = "red";
// }

function changeColor() {
    // const selectedColor = this.className;
    webBody.className = this.className;
}

items.forEach(function(item){
    item.addEventListener('click', changeColor);
})

// this.addEventListener('click', changeColor);

// orangeBtn.addEventListener('click', changeForOrange);
// greenBtn.addEventListener('click', changeForGreen);
// blueBtn.addEventListener('click', changeForBlue);
// yellowBtn.addEventListener('click', changeForYellow);
// redBtn.addEventListener('click', changeForRed);