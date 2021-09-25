const btn = document.querySelector('button');
const square = document.querySelector('div');
const deg = 10;
let rotate = 0;

// square.style.transition = '0.5s';


// /** @type {HTMLElement} */
// var squ = document.querySelector('.square');

btn.addEventListener('click', function(){
    rotate += deg;
    square.style.transform = 'rotate(' + rotate + 'deg)';
    square.classList.add('animation');
    
})