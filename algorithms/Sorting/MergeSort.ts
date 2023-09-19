/**
 * Merge sort sorts a given array using - Divide and Merge method
 *
 * Division
 *
 * The array is divided into two halves
 * Left half -> indexed from 0 to mid
 * right half -> indexed from mid to end
 *
 * These halves are further divided into sub-halves until each half contains a single element
 * Single element on its own is sorted array
 *
 * Merging
 *
 * To merge, we need to combine two halves.
 *
 * @param nums Array of numbers
 * @returns Sorted array of numbers
 */

function mergeSort(nums: number[]): number[] {
  if (nums.length < 2) return nums;
  let mid = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, mid);
  const rightArray = nums.slice(mid, nums.length);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

/**
 * We take a temp array
 *
 * loop through the arrays till there are elements
 * Compare the 0th elements of both the arrays add the lesser element and remove it from the array
 * Add the rest of the elements from left array followed by right array in the temp array and return it
 *
 * @param leftArray Left sub array
 * @param rightArray right sub array
 * @returns sorted array combined with left and right sub arrays
 */

function merge(leftArray, rightArray): number[] {
  const sorted: number[] = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sorted.push(leftArray.shift());
    } else {
      sorted.push(rightArray.shift());
    }
  }
  return [...sorted, ...leftArray, ...rightArray];
}

console.log(mergeSort([4, 99, 1, 32, 16, 8]));

function test(arr, n) {
  if (n === 0) return arr;
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) acc.push(...test(cur, n - 1));
    else acc.push(cur);
  }, []);
}
