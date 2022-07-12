export default class EventBus {
    _listeners = {}

    dispatch(event) {
        if (!(event in this._listeners)) {
            return;
        }
        for (let listener of this._listeners[event]) {
            try {
                listener();
            } catch (e) {
                console.error(e)
            }
        }
    }

    /**
     *
     * @param {string} event
     * @param {Function} callback
     */
    addEventListener(event, callback) {
        if (event in this._listeners) {
            this._listeners[event].push(callback);
            return;
        }
        this._listeners[event] = [callback]
    }
}
