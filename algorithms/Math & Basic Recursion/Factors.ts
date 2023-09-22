/**
 * Given  a number m find the factors of the given number
 *
 *
 */

function factorsSimple(n: number): number[] {
  if (n === 1) return [n];
  const result = [1];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) result.push(i);
  }
  return [...result, n];
}

console.log(factorsSimple(60));

/**
 * The last but one number is always less than or equal to n / 2
 * Eg: 400 -> last but one 200
 * @param n Number
 * @returns Array of factors of n
 */
function factorsImproved(n: number): number[] {
  if (n === 1) return [n];
  const result = [1];
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) result.push(i);
  }
  return [...result, n];
}
console.log(factorsImproved(60));

function factorsOptimised(n: number): number[] {
  if (n === 1) return [n];
  const result: number[] = [];
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i, Math.floor(n / i));
    }
  }
  return result;
}
console.log(factorsOptimised(60));
