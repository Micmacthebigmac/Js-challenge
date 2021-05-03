let counter = 0;

for (counter=1; counter <= 100; counter++) {
    if (!(counter%5) && !(counter%3)) {
        console.log('fizzbuzz');
    }else if (!(counter%3)) {
        console.log('Fizz');
    } else if (!(counter%5)) {
        console.log('Buzz');
    } else {
        console.log(counter);
    }
}

