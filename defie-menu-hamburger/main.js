let navbarMobile = document.getElementById('navbar-mobile');
let transBurger = document.getElementsByClassName('menu-mobile');

navbarMobile.addEventListener('click' ,transBurger);

    function transBurger () {
        transBurger.classlist.add('show');
    }