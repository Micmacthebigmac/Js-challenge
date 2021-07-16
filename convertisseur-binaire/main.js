const convert = document.getElementById('convert') ;
let result = document.getElementById('convert') ;
let initial = 0 ;

convert.addEventListener('click', function() {
    let stringConverted = [];
    let stringForm = document.getElementById('msgToCode').value ;
    for (let index = 0; index < stringForm.length; index++) {
        stringConverted = stringForm[index].charCodeAt(0).toString(2);
        console.log(stringConverted);
    }
/*     let stringFinish = stringConverted.join();
    console.log(stringFinish); */
});