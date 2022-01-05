function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}
console.log (divide("7", "3"));

console.log (add(7, 3));

console.log (subtract("7", "3"));

function increment(n) {
    return n += 1
}

function decrement(n) {
    return n -= 1
}
 console.log (increment(20));

 function makeInt(string) {
     return parseInt(string, 10);
 }

 function preserveDecimal(string) {
     return parseFloat(string);
 }