/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

var sortBy = function(arr, fn) {
    return arr.sort((el1, el2) => fn(el1) - fn(el2));
};

//$ ———————————————————————————
// Wrong way:

// var sortBy = function(arr, fn) {
//     const obj = {};
//     arr.forEach(el => {
//         let key = fn(el);
//         obj[key] = el;
//     })
//     return Object.values(obj);

//     const result = [];
//     arr.forEach(el => getIndexForCurrentElement(fn(el), arr, 0))

//     for (let i = 0; i < arr.length; i++) {
//         let key = fn(arr[i]);
//         let currentIndex = getIndexForCurrentElement(key, arr, 0);
//     }
    
//     function getIndexForCurrentElement(num, arr, firstIndex) {
//         console.log(`arr = ${arr}, firstIndex = ${firstIndex}`)
//         if (arr.length == 0) return firstIndex > 0 ? firstIndex+1 : 0;
//         if (num < arr[0]) return firstIndex;
//         if (num > arr[arr.length - 1]) return firstIndex + arr.length;
    
//         if (num < arr[Math.floor(arr.length / 2) + arr.length % 2 - 1]) {
//             return getIndexForCurrentElement(num, subarray(arr, 0, Math.floor(arr.length / 2) + arr.length % 2 - 1), firstIndex);
//         } else {
//             return getIndexForCurrentElement(num, subarray(arr, Math.floor(arr.length / 2) + arr.length % 2, arr.length - 1), firstIndex + Math.floor(arr.length / 2) + arr.length % 2);
//         }
//     }
    
//     function subarray(sourceArray, fromIndex, toIndex) {
//         const resArray = [];
//         for (let i = fromIndex; i <= toIndex; i++) {
//             resArray.push(sourceArray[i])
//         }
//         return resArray;
//     }

//     return result;
// };



// function getIndexForCurrentElement(num, arr, firstIndex) {
//     console.log(`arr = ${arr}, firstIndex = ${firstIndex}`)
//     if (arr.length == 0) return firstIndex > 0 ? firstIndex+1 : 0;
//     if (num < arr[0]) return firstIndex;
//     if (num > arr[arr.length - 1]) return firstIndex + arr.length;

//     if (num < arr[Math.floor(arr.length / 2) + arr.length % 2 - 1]) {
//         // return getIndexForCurrentElement(num, arr.subarray(0, Math.floor(arr.length / 2) + arr.length % 2 - 1), firstIndex);
//         return getIndexForCurrentElement(num, subarray(arr, 0, Math.floor(arr.length / 2) + arr.length % 2 - 1), firstIndex);
//     } else {
//         return getIndexForCurrentElement(num, subarray(arr, Math.floor(arr.length / 2) + arr.length % 2, arr.length - 1), firstIndex + Math.floor(arr.length / 2) + arr.length % 2);
//     }
// }

// function subarray(sourceArray, fromIndex, toIndex) {
//     const resArray = [];
//     for (let i = fromIndex; i <= toIndex; i++) {
//         resArray.push(sourceArray[i])
//     }
//     return resArray;
// }

// let a = [1,3,5,9,11,13,15,17,19];

// let ind = getIndexForCurrentElement(7, a, 0) // 3
// let ind = getIndexForCurrentElement(0, a, 0) // 0
// let ind = getIndexForCurrentElement(20, a, 0) // 9
// let ind = getIndexForCurrentElement(18, a, 0) // 8
// let ind = getIndexForCurrentElement(16, a, 0) // 7

// console.log(ind)



// let a2 = [1,3,5,9,11,13,15,17,19];

// console.log(a2.splice(0, 4))
// console.log(a2)

// console.log(binarySearch(a2, 7))


// function binarySearch(arr, x)
// {    
//     let l = 0;
//     let r = arr.length - 1;
//     let mid;
//     while (r >= l) {
//          mid = l + Math.floor((r - l) / 2);
  
//         // If the element is present at the middle
//         // itself
//         if (arr[mid] == x)
//             return mid;
  
//         // If element is smaller than mid, then
//         // it can only be present in left subarray
//         if (arr[mid] > x)
//             r = mid - 1;
             
//         // Else the element can only be present
//         // in right subarray
//         else
//             l = mid + 1;
//     }
  
//     // We reach here when element is not
//     // present in array
//     return -1;
// }


// let i = {a: 12, x: 3, z: 1, b: 8};
// console.log(Object.values(i).sort())

// let a3 = [3,4]
// a3.sort((key1, key2) => key1 - key2)