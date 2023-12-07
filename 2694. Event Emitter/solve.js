class EventEmitter {

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */

    events = {};

    subscribe(eventName, callback) {

        if (!this.events[eventName]) {
            this.events[eventName] = [callback];
        } else {
            this.events[eventName].push(callback);
        }


        return {
            unsubscribe: () => {
                const subArray = [];
                this.events[eventName].forEach(el => {
                    if (el != callback) {
                        subArray.push(el);
                    }
                })
                this.events[eventName] = subArray;
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const ans = [];
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => ans.push(callback(...args)))
        }
        return ans;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
