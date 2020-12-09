// loop through the numbers 1 - 100
// if the number is a multiple of 5 console.log "fizz"
// if the number is a multiple of 3 console.log "buzz"
// if its a multiple of both console.log "fizzbuzz"
// if its a multiple of neither 3 nor 5 we simply print the number itself.

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("buzz");
    } else if (i % 5 === 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}