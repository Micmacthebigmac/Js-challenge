const input = document.getElementById("input") ;
const display = document.getElementById("display") ;

document.getElementById('checkbox').addEventListener('click', function() {
    if (input.type== 'password') {
        input.type='text';
        display.innerHTML='show';
    } else {
        input.type='hide';
        display.innerHTML='hide';
    }
})