
window.onscroll = slideDown;
function slideDown() {
    const html = document.documentElement;
    let hasScrolled = html.scrollTop;
    let navbar = document.getElementById('navbar');
    if (hasScrolled > 0) {
        navbar.style.top= "0";
    } else {
        navbar.style.top= "";
    }
}