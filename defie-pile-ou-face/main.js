const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");

myBtn.addEventListener('click', headsOrTails);

function headsOrTails(max){
    let random= Math.floor(Math.random() * 2);
    console.log(random);
    if (random== 1) {
        result.innerHTML=' Heads';
    } else {
        result.innerHTML=' Tails';
    }
}