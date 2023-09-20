/**
 * Quick sort works on makes use of pivot
 * 1. Select the pivot element
 *      a -> It can be first element
 *      b -> It can be last element
 *      c -> It can be median element
 *      d -> It can be element in the given array
 * 2. Check if the elements starting from index 0 and ending at index n -1
 *    If the element is less than the pivot, add it to left array
 *    If the element is greater than the pivot, add it to right array
 * 3. This places the pivot element at its right position
 * 4. call the function for left array and right array and place pivot in between
 *
 * Complexity
 * - O(n logn)
 *
 *
 * @param nums array of numbers
 * @returns sorte array of numbers
 */

function quickSort(nums: number[]): number[] {
  if (nums.length < 2) return nums;
  let pivot = nums.length - 1;
  let pivotValue = nums[pivot];
  const leftArray: number[] = [];
  const rightArray: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i !== pivot) {
      pivotValue > nums[i] ? leftArray.push(nums[i]) : rightArray.push(nums[i]);
    }
  }
  return [...quickSort(leftArray), pivotValue, ...quickSort(rightArray)];
}

console.log(quickSort([12, 68, 25, -4, -63, -44, 77]));
