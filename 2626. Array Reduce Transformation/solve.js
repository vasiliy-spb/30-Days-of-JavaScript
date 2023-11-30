/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // for (let i = 0; i < nums.length; i++) {
    //     let val = fn(init, nums[i]);
    //     init = val;
    // }
    // return init;

    // or

    nums.forEach( el => init = fn(init, el) );
    return init;
};

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

console.log(reduce(nums, fn, init));