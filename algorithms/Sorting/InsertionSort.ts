/**
 * Insertion sort starts with considering array of size 1 and increasing the size by 1 everytime in loop
 * if the value of element to right is less than the value of its previous element, we swap the values.
 *
 *
 * @param nums array of numbers
 * @returns Sorted array of numbers
 */

function insertionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      let temp = nums[j - 1];
      nums[j - 1] = nums[j];
      nums[j] = temp;
    }
  }
  return nums;
}

console.log(insertionSort([4, -5, -2, 12, 9]));
