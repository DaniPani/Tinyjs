$.off = (handler) => {
    $.selector.removeEventListener(handler, $.listener[$.selector][handler])
}