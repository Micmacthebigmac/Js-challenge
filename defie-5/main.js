const buttonCopy = document.getElementById("button-copy") ;
const text= document.getElementById("copy-text") ;

buttonCopy.addEventListener("click", function() {
    text.select();
    document.execCommand( 'copy' );
});