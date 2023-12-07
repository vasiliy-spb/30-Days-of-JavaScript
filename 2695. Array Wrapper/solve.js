/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let sum = 0;
    this.nums.forEach(el => sum += el)
    return sum;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    if (this.nums.length == 0) return '[]';
    let result = '[';
    this.nums.forEach(el => result += el + ',');
    result = result.slice(0, result.length - 1) + ']';
    return result;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
