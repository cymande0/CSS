let counter = 0;

const addBtn = document.querySelector("body>button");
const substractBtn = document.querySelector("body>button+button");
const result = document.querySelector('.counter');


addBtn.addEventListener('click', function(){
    counter += 1;
    result.textContent = counter;
})

substractBtn.addEventListener('click', function(){
    counter -= 1;
    result.textContent = counter;   
})