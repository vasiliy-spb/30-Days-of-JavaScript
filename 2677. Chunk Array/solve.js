/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res = [];
    while (arr.length > 0) {
        res.push(arr.splice(0,size));
    }
    return res;
};


let a = [1,2,3,4,5,6,7,8,9,10,11]

console.log(chunk(a, 3))