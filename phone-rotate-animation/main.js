let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation) ;
    detectOrientation() ;
  });
  
  function detectOrientation(){

    if(screen.availHeight > screen.availWidth){
      console.log("LANDSCAPE.");
      document.getElementById('rotateScreen').style.display='block';
      document.getElementById('displayContent').style.display='none';
    } else if(screen.availHeight < screen.availWidth){
        console.log("PORTRAIT.");
        document.getElementById('rotateScreen').style.display='none';
        document.getElementById('displayContent').style.display='block';
    }
  }