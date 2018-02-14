$.once = (handler, callback) => {
    listener = () => {
        callback.apply(callback)
        $.off(handler)
    }
    $.selector.addEventListener(handler, listener)
    $.listener[$.selector][handler] = listener
}