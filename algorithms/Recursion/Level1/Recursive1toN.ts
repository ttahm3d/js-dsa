/**
 *
 * Given an integer n print the numbers from 1 to n recursively
 */

/**
 *
 * @param n integer n in the sequence
 * @param i initial value default value starting 1
 * @returns prints values does not return anything
 */
function recursive1ton(n: number, i: number = 1) {
  if (i > n && i !== 1) return;
  console.log(i);
  recursive1ton(n, i + 1);
}

recursive1ton(5);
