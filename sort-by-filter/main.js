const filterTous = document.getElementById('all');
const filterSummer = document.getElementById('summer');
const filterAutumn = document.getElementById('autumn');
const filterSpring = document.getElementById('spring');
const filterWinter = document.getElementById('winter');

const summerImg = document.getElementsByClassName('summer');
const autumnImg = document.getElementsByClassName('autumn');
const springImg = document.getElementsByClassName('spring');
const winterImg = document.getElementsByClassName('winter');


filterWinter.addEventListener('click', function sortWinter() {
    summerImg.style.display = "none";
    autumnImg.style.display = 'none';
    springImg.style.display = 'none';
    console.log(" c' est sensé fonctionné");
});
