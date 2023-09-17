/**
 * Used to search in sorted arrays.
 * @param nums Array of numbers
 * @param target Number being searched for
 * @returns index of the found number if not found returns -1
 */

function binarySearch(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) right = mid - 1;
    else if (target > nums[mid]) left = mid + 1;
  }

  return -1;
}

/**
 * Time Complexity is O(log n) -> size of array reduces in half every pass
 */

console.log(binarySearch([-5, 2, 4, 24, 33, 71], 71));
console.log(binarySearch([-5, 2, 4, 24, 33, 71], 63));
