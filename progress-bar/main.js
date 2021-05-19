window.addEventListener('scroll', function () {
    let a = document.documentElement.scrollTop;
    console.log('a=', a);
    let b = document.documentElement.scrollHeight;
    console.log('b=', b);

    let c = document.documentElement.clientHeight;
    console.log('c=', c);

    let d = b - c;
    console.log(d);
    let e = (a / d) * 100;
    console.log(e);

    document.getElementById('bar').style.width =e + '%';
})