/**
 *
 * Given a integer n find "n"th fibonacci number
 */

function recursiveFibo(n: number): number {
  if (n < 2) return n;
  return recursiveFibo(n - 1) + recursiveFibo(n - 2);
}

console.log(recursiveFibo(2));
console.log(recursiveFibo(7));
