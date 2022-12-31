/**
 *
 * Given an integer n print the numbers from 1 to n recursively
 */

function recursivento1(n: number) {
  if (n === 0) return;
  console.log(n);
  recursivento1(n - 1);
}

recursivento1(5);
