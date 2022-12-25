/**
 *
 * Given an integer 'n' find the factorial of n denoted as (n!)
 *
 * It is product of all the numbers from 1 to n. Eg. 5! = 120 => 5 * 4 * 3 * 2 * 1
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
/**
 *
 * Apprach:
 *
 * Keep multiplying each number starting from 1 to n and store the result in a variable
 * Use a temporary variable in this case "fact" to keep track of this product
 *
 * TimeComplexity: O(n) there is a single for loop
 */
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
