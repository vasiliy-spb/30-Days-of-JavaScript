/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function(arr1, arr2) {
    let result = [];
    arr1 = arr1.sort((el1, el2) => el1.id > el2.id ? 1 : -1);
    arr2 = arr2.sort((el1, el2) => el1.id > el2.id ? 1 : -1);
    for (let i1 = 0, i2 = 0; i1 < arr1.length || i2 < arr2.length; i1++, i2++) {
        if (i1 >= arr1.length) {
            result.push(arr2[i2]);
            console.log('line 12')
            continue;
        }
        if (i2 >= arr2.length) {
            result.push(arr1[i1]);
            console.log('line 17')
            continue;
        }
        if (arr1[i1].id === arr2[i2].id) {
            console.log('line 21')
            for (let el in arr2[i2]) {
                arr1[i1][el] = arr2[i2][el];
            }
            result.push(arr1[i1]);
        } else if (arr1[i1].id > arr2[i2].id) {
            console.log('line 27')
            result.push(arr2[i2]);
            i1--;
        } else {
            console.log('line 31')
            result.push(arr1[i1]);
            i2--;
        }
    }
    return result;
};

// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ], 
// arr2 = [
//     {"id": 3, "x": 5}
// ]

arr1 = [
    {"id":2,"x":9},{"id":1,"x":1}
], 
arr2 = [
    {"id": 3, "x": 5}
]

console.log(join(arr1, arr2))



// var join = function(arr1, arr2) {
//     let currentEl = null;
//     for (let i = 0; i < arr1.length; i++) {
//         let currentId = arr1[i].id;
//         if (currentEl == null) 
//             currentEl = arr2.shift();
//         if (currentEl && currentId === currentEl.id) {
//             for (let el in currentEl) {
//                 arr1[i][el] = currentEl[el];
//             }
//             currentEl = null;
//         } else if (currentEl && currentId > currentEl.id) {
//             if (currentId == 0) {
//                 arr1.unshift(currentEl);
//             } else {
//                 arr1.splice(currentId + 1, 0, currentEl);
//             }
//         }
//     }
//     if (currentEl) {
//         arr1.push(currentEl);
//     }
//     while (arr2.length > 0) {
//         arr1.push(arr2.shift());
//     }
//     return arr1;
// };


// let x1 = {q: 1, w: 2, e: 3, r: 4};
// let x2 = {q: 5, w: 6, e: 7};

// for (let el in x2) {
//     x1[el] = x2[el];
// }

// console.log(x1) // { q: 5, w: 6, e: 7, r: 4 }