/**
 * Selection sort - sorts the array in increasing order
 * It selects the minmum of array from positions 1 - n-1, 2 - n-2 .....
 * in each pass and places them at the indices 0, 1, 2...so on till the array is sorted
 *
 * Complexity
 *
 * For all cases - O(n ** 2)
 *
 * @param nums array of numbers
 * @returns Sorted array of numbers
 */

function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) minIndex = j;
    }
    let temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }
  return nums;
}

console.log(selectionSort([4, -5, -2, 12, 9]));
