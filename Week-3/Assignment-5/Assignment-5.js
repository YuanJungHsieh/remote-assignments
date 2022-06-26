function twoSum(nums, target) {
  // your code here
  for (let i = 0; i < nums.length; i++) {
    let ind = nums.indexOf(target - nums[i]);
    if (ind !== -1 && i < ind) {
      console.log([i, ind]);
    }
  }
}
/*
   For example:
   twoSum([2, 7, 11, 15], 9);
   Should returns:
   [0, 1]
   Because:
   nums[0]+nums[1] is 9
  */
