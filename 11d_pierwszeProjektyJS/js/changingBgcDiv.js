
const firstDiv = document.querySelector('.s1');
const secondDiv = document.querySelector('.s2');
const space = document.body;

function changeColor() {
    // firstDiv.classList.toggle('red');
    // secondDiv.classList.toggle('red');
    this.classList.toggle('red');
}

firstDiv.addEventListener('click', changeColor);
secondDiv.addEventListener('click', changeColor);



// function changeColor() {
//     secondDiv.style.background = "red";
//     firstDiv.style.background = "white";
// } 

// space.addEventListener('click', changeColor);

