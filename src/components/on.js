$.on = (handler, callback) => {
    $.selector.addEventListener(handler, callback)
    $.listener[$.selector][handler] = callback
}