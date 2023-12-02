
var TimeLimitedCache = function () {
    

};

TimeLimitedCache.prototype.cache = new Map();

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (this.cache.has(key)) {
        let currentKey = this.cache.get(key);
        let isActive = currentKey.duration > (performance.now() - currentKey.creationTime);
        currentKey.value = value;
        currentKey.duration = duration;
        currentKey.creationTime = performance.now();
        return isActive;
    } else {
        let currentKey = {key, value, duration, creationTime: performance.now()};
        this.cache.set(key, currentKey);
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let currentKey = this.cache.get(key);
        return currentKey.duration > (performance.now() - currentKey.creationTime) 
            ? this.cache.get(key).value : -1;
    } else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let accessibleCount = 0;
    for (let el of this.cache.values()) {
        if (el.duration > (performance.now() - el.creationTime)) accessibleCount++;
    }
    return accessibleCount;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

const timeLimitedCache = new TimeLimitedCache()

console.log(TimeLimitedCache) // null

console.log(timeLimitedCache.set(1, 42, 50)); // false
console.log(timeLimitedCache.set(1, 50, 100)); // true
console.log(timeLimitedCache.get(1)) // 50
console.log(timeLimitedCache.get(1)) // 50

// следующий вызов выполнялся в проверке литкода с задержкой
console.log(timeLimitedCache.get(1)) // -1

console.log(timeLimitedCache.count()) // 0




// console.log()
// console.log()
// console.log()
//  console.log(timeLimitedCache.get(1)) 








//$ ———————————————————————————————————————————————————— 

// class TimeCacheKey {

//     constructor(key, value, duration) {
//         this.key = key;
//         this.value = value;
//         this.duration = duration;
//         this.accessible = true;
//         this.creationTime = performance.now();
//         this.timer = this.startTimer();

//     }

//     startTimer() {
//         return setTimeout(this.unaccessible, this.duration);
//     }

//     unaccessible() {
//         this.accessible = false;
//     }

// }

// class TimeLimitedCache {
//     keyMap = new Map();

//     set(key, value, duration) {
//         if (this.keyMap.has(key)) {
//             let currentKey = this.keyMap.get(key);
//             clearTimeout(currentKey.timer);
//             currentKey.duration = duration;
//             this.accessible = true;
//             currentKey.startTimer();
//         } else {
//             let currentKey = new TimeCacheKey(key, value, duration);
//             this.keyMap.set(key, currentKey);
//         }

//     }

//     get(key) {
//         if (this.keyMap.has(key)) {
//             return this.keyMap.get(key).value;
//         } else {
//             return -1;
//         }
//     }

//     count() {
//         let accessibleCount = 0;
//         this.keyMap.values().forEach(el => {
//             if (el.accessible == true) accessibleCount++;
//         })
//         return accessibleCount;
//     }

// }

