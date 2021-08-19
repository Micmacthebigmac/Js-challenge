let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation) ;
    detectOrientation() ;
  });
  
  function detectOrientation(){

    if (orientation === "landscape-primary") {
      console.log("That looks good.");
    } else if (orientation === "landscape-secondary") {
      console.log("Mmmh... the screen is upside down!");
    } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
      console.log("Mmmh... you should rotate your device to landscape");
    } else if (orientation === undefined) {
      console.log("The orientation API isn't supported in this browser :(");
    }
  }
  