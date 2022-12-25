/**
 * Given a number n check if it is a prime number or not
 */
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    // Loop from 2 to n. if the number is divisible by any other number, return false
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(12));
console.log(isPrime(13));
function isPrimeOptimized(n) {
    if (n < 2)
        return false;
    // A number can be exactly divisible by numbers less than its square root
    // eg: 16 can be divided by 2,4 and 8. Square root of 16 = 4. Since it is already divisible by 4
    // it is not required to check if it is divisible by 8
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
console.log(isPrimeOptimized(12));
console.log(isPrimeOptimized(21));
console.log(isPrimeOptimized(14));
console.log(isPrimeOptimized(41));
