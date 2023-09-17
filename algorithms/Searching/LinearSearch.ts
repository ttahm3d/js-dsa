/**
 * Usually used to search for elements in Unsorted arrays
 * @param nums Array of numbers | Array of strings
 * @param target element you are seaching for. type number if the array is number or string in the other case
 * @returns index of the element if found else -1
 */

function linearSearch(
  nums: number[] | string[],
  target: number | string
): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([1, 22, 64, 33, 11], 44));
console.log(linearSearch([63, 2, 64, 33, 11], 63));
console.log(linearSearch([1, 23, 44, 33, 11], 44));
