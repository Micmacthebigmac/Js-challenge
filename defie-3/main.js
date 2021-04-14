const containerWarning=document.getElementById("warning");
document.getElementById("input").addEventListener("keyup", function(event) {

   if (event.getModifierState("CapsLock")) {
      containerWarning.style.display='block';
    } else {
      containerWarning.style.display='none';
    }


  });