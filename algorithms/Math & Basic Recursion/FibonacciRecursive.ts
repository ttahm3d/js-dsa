/**
 *
 * Given a integer n find "n"th fibonacci number recursively
 */

function recursiveFibo(n: number): number {
  if (n < 2) return n;
  return recursiveFibo(n - 1) + recursiveFibo(n - 2);
}

console.log(recursiveFibo(2));
console.log(recursiveFibo(7));

/**
 *
 * Calculate for 7
 *               7         -> 2^0
 *           6      5      -> 2^1
 *        5   4   4   3
 *       4 3 3 2 3 2 2 1
 *
 *
 *
 * so the complexity is 2^n
 */
