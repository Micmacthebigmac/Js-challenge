const title = document.getElementById('title');
let i = 0;
function changeTitle() {
     if ( i==0 ) {
         title.innerText= "haha";
         i=1;
     } else if ( i==1){
        title.innerText= "bb";
        i=0;
     }
}

setInterval(changeTitle, 3000);
