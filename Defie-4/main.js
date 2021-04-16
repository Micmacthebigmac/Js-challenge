const password = document.getElementById("password") ;
const checkPassword = document.getElementById("check-password") ;
const alert = document.getElementById("alert") ;

checkPassword.addEventListener('keyup', function() {
     if (password.value==checkPassword.value) {
         alert.style.color="green";
         alert.innerHTML=" c' est OK !";
         console.log(alert);
     } else {
         alert.style.color="red";
         alert.innerHTML=" c' est PAS OK !";
         console.log(alert);
     }
})