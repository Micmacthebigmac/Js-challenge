let awenserSentenceElle = document.getElementById('awenser-elle');
let awenserSentenceCoucou = document.getElementById('awenser-coucou');


let elle = ['e','l','l','e'];
let coucou = ['c','o','u','c','o','u'];

let elleReverse = ['e','l','l','e'].reverse();
let coucouReverse = ['c','o','u','c','o','u'].reverse();

let coucouWord = coucou.join('');
let elleWord = elle.join('');

let coucouReverseWord = coucouReverse.join('');
let elleReverseWord = elleReverse.join('');


if (elleWord == elleReverseWord) {
    awenserSentenceElle.innerHTML= 'est ';
    awenserSentenceElle.style.color= 'green'; 
} else {
    awenserSentenceElle.innerHTML= "n'est pas ";
    awenserSentenceElle.style.color= 'red'; 
}
console.log(coucouWord, coucouReverseWord);
if (coucouWord == coucouReverseWord) {
    awenserSentenceCoucou.innerHTML= 'est ';
    awenserSentenceCoucou.style.color= 'green'; 
} else {
    awenserSentenceCoucou.innerHTML= "n'est pas ";
    awenserSentenceCoucou.style.< ddddddddddcolor= 'red'; 
}