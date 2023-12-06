/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    console.log(this)
    if (this.length == 0) return -1;
    return this.pop();
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

const arr = [1, 2, 3];
console.log(arr.last()); // 3