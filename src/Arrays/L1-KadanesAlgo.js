// Find the contiguous sub-array(containing at least
// one number) which has the maximum sum and
// return its sum.

// https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/0/
function Kadanes(arr) {
  let sum = 0;
  let ans = Number.MIN_SAFE_INTEGER;
  for (let num of arr) {
    sum += num;
    ans = Math.max(ans, sum);
    if (sum < 0) {
      sum = 0;
    }
  }

  return ans;
}
Kadanes(1, 2, 3, -2, 5);
// 9
