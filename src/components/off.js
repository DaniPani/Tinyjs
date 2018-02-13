$.off = (handler, callback) => {
    $.selector.removeEventListener(handler, $.listener[handler])
}