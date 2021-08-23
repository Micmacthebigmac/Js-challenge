const logo = document.getElementById('logo');
let value = 0 ;
function animLogo(){

if (value > 240) {
    value++;
    logo.style.height= 'calc(0 + 50px)';
    logo.style.width= 'calc(0 + 50px)';
    logo.style.fontSize= 'calc(20px + 50px)';
    console.log(value);
}

    }

setInterval(animLogo, 10);
