// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++){
//         total += i;
//     }
//     return total;
// }

// console.log(addUpTo(3));

//Find is it Prime

function isPrime(n) {
    if (n <= 1)
        return 0;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i == 0)
            return 0;
    }
    return 1;
}

console.log(isPrime(7));