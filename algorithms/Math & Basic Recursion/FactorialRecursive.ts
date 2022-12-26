/**
 * Given a integer n find the factorial of that number recursively
 */

function recursiveFactorial(n: number): number {
  if (n < 0) return -1;
  else if (n === 0) return 1;
  else return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

/**
 *
 * consider the number 5
 *
 * 5! => 5 * 4!
 * 5! => 5 * 4 * 3!
 * 5! => 5 * 4 * 3 * 2!
 * 5! => 5 * 4 * 3 * 2 * 1!
 * 5! => 5 * 4 * 3 * 2 * 1 * 0!
 *
 * So for 5 =>  5 times
 *
 * O(n)
 */
