/**
 * Given an positive integer n, check whether given number is power of 2
 *
 * An integer is power of 2, if there exists a integer x such that n = 2**x
 */

/**
 * Pseudocode
 * 1. Divide given number n repeatedly by 2
 * 2. If remainder is 0 continue
 * 3. If remainder is not 0 - break - not a power of two
 * 4. Else  it is power of two
 */

function isPowerOfTwo(n: number): boolean {
  if (n < 1) return false;
  while (n !== 0) {
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    if (n % 2 === 0) {
      n = Math.floor(n / 2);
    }
  }
  return true;
}

function isPowerOfTwoRefined(n: number): boolean {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;

    n = Math.floor(n / 2);
  }
  return true;
}

// O(log n to base 2)

function isPowerOfTwoBitWise(n: number): boolean {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoRefined(512));
console.log(isPowerOfTwoRefined(4));
console.log(isPowerOfTwoRefined(7));
