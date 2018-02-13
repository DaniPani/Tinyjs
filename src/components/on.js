$.on = (handler, callback) => {
    $.selector.addEventListener(handler, callback)
    $.listener[handler] = callback
}