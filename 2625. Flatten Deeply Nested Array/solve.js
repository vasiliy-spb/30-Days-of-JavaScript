/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
    let tempArray = [];
    let findArray = false;
    let deep = 0;
    while (deep < n) {
        for (let el of arr) {
            if (Array.isArray(el)) {
                el.forEach(e => tempArray.push(e))
                findArray = true;
            } else {
                tempArray.push(el);
            }
        }
        if (findArray) {
            arr = tempArray;
            tempArray = [];
            deep++;
            findArray = false;
        } else {
            break;
        }
    }
    return arr;
};


// let a = [3, [2, 2, [4, [8, 8], 4], 2, 2], 5, 6,];
// let b = [];
// let findArray = false;
// let n = 1;
// let deep = 0;
// while (deep < n) {
//     console.log('start while')
//     for (let el of a) {
//         if (Array.isArray(el)) {
//             el.forEach(e => b.push(e))
//             findArray = true;
//         } else {
//             b.push(el);
//         }
//     }
//     if (findArray) {
//         a = b;
//         b = [];
//         console.log('a = ')
//         console.log(a)
//         console.log('b = ')
//         console.log(b)
//         deep++;
//         findArray = false;
//     } else {
//         break;
//     }
// }

// console.log(a)