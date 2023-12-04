/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    
    return function(...args) {
        let previousCall = this.lastCall;
        this.lastCall = performance.now();
        if (previousCall && this.lastCall - previousCall <= t) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(fn, t, ...args);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */