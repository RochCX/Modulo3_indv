function numeroPrimo(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Este numero no es primo";
        }
    }
    return "Este numero es primo";
}

console.log(numeroPrimo(10));
console.log(numeroPrimo(11));
console.log(numeroPrimo(12));
console.log(numeroPrimo(13));
console.log(numeroPrimo(7));
console.log(numeroPrimo(4));