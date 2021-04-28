const carrousel = document.getElementById('carrousel');
const btnRight = document.getElementById('button-right');
const btnLeft = document.getElementById('button-left');
let counterNumber = document.getElementById('counter-number')
let counter= 0;
btnRight.addEventListener('click', rightClick);
function rightClick() {
    
    if (counter == 0) {
        carrousel.style.backgroundColor = 'red';
        counter = 1;
        counterNumber.innerHTML = ' 1';
    } else if (counter == 1) {
        carrousel.style.backgroundColor = 'yellow';
        counter = 2;
        counterNumber.innerHTML = ' 2';
    } else if (counter == 2) {
        carrousel.style.backgroundColor = 'green';
        counter = 3;
        counterNumber.innerHTML = ' 3';
    } else if (counter == 3) {
        carrousel.style.backgroundColor = 'pink';
        counter = 4;
        counterNumber.innerHTML = ' 4';
    } else {
        carrousel.style.backgroundColor = 'blue'; 
        counter = 0;
        counterNumber.innerHTML = ' 0';
    }
}

btnLeft.addEventListener('click', leftClick);
function leftClick() {
    
    if (counter == 0) {
        carrousel.style.backgroundColor = 'red';
        counter = 4;
        counterNumber.innerHTML = ' 4';
    } else if (counter == 1) {
        carrousel.style.backgroundColor = 'yellow';
        counter = 3;
        counterNumber.innerHTML = ' 3';
    } else if (counter == 2) {
        carrousel.style.backgroundColor = 'green';
        counter = 2;
        counterNumber.innerHTML = ' 2';
    } else if (counter == 3) {
        carrousel.style.backgroundColor = 'pink';
        counter = 1;
        counterNumber.innerHTML = ' 1';
    } else {
        carrousel.style.backgroundColor = 'blue'; 
        counter = 0;
        counterNumber.innerHTML = ' 0';
    }
}
