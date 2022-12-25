/**
 * Problem Statement:
 * Given a number "N" find the first N elements of fibonacci sequence
 *
 * explaination: Each number in the sequence are sum of two preceeding numbers. First two numbers are 0 and 1
 */
/**
 *
 * @param n number
 *
 *
 */
function fibonacci(n) {
    var fSequence = [0, 1];
    if (n === 1) {
        return fSequence[0];
    }
    else if (n === 2) {
        return fSequence;
    }
    else {
        for (var i = 2; i < n; i++) {
            fSequence[i] = fSequence[i - 1] + fSequence[i - 2];
        }
        return fSequence;
    }
}
/**
 *
 * Apprach:
 *
 * When n = 2, we return the first two elements
 * In any other case, we calculate the next fibonacci number using the current fibonacci numbers and update the array
 * fib[n] = fib[n - 1] + fib[n - 2]
 */
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
