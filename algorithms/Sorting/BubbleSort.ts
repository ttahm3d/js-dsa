/**
 * Bubble sort - sorts a give list of numbers in ascending order.
 * In each pass, it 'bubbles' out the largest number and places it at the end of the array
 *
 * Time Complexities
 * - Best case - n
 * - Average and worst case - O(n ** 2)
 * @param nums Array of numbers
 * @returns Sorted array of numbers
 */

function bubbleSort(nums: number[]): number[] {
  let swapped;
  for (let i = 0; i < nums.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return nums;
}

function bubbleSortDoWhile(nums: number[]): number[] {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
}

console.log(bubbleSort([4, -5, -2, 12, 9]));
console.log(bubbleSortDoWhile([4, -5, -2, 12, 9]));
