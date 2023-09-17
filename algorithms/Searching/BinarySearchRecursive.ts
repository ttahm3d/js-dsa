/**
 * Used to search in sorted arrays.
 * This is recursive implementation
 * @param nums Array of numbers
 * @param target Number being searched for
 * @returns index of the found number if not found returns -1
 */

function binarySearchRecursive(
  nums: number[],
  target: number,
  left: number = 0,
  right: number = nums.length - 1
): number {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    else if (target < nums[mid])
      return binarySearchRecursive(nums, target, left, mid - 1);
    else if (target > nums[mid])
      return binarySearchRecursive(nums, target, mid + 1, right);
  }

  return -1;
}

/**
 * Time Complexity is O(log n) -> size of array reduces in half every pass
 */

console.log(binarySearchRecursive([-5, 2, 4, 24, 33, 71], 71));
console.log(binarySearchRecursive([-5, 2, 4, 24, 33, 71], 63));
