$ = {}
$.one = (selector) => {
    $.selector = document.querySelector(selector)
    $.listener = {}
    $.listener[$.selector] = {}
    return $
}
$.all = (selector) => {
    $.selector = document.querySelectorAll(selector)
    return $
}
$.addClass = classes => {
    if (typeof classes == 'array') {
        Array.from(classes).forEach(element => $.selector.classList.add(element))
    } else {
        $.selector.classList.add(classes)
    }
    return $
}
$.removeClass = (classes) => {
    if (typeof classes == 'array') {
        Array.from(classes).forEach(element => $.selector.classList.remove(element))
    } else {
        $.selector.classList.remove(classes)
    }
    return $
}
$.allClass = classes => {
    return $.selector.classList.value.split(' ')
}
$.on = (handler, callback) => {
    $.selector.addEventListener(handler, callback)
    $.listener[$.selector][handler] = callback
}
$.once = (handler, callback) => {
    listener = () => {
        callback.apply(callback)
        $.off(handler)
    }
    $.selector.addEventListener(handler, listener)
    $.listener[$.selector][handler] = listener
}
$.off = (handler) => {
    $.selector.removeEventListener(handler, $.listener[$.selector][handler])
}
$.text = text => $.undefined(text, $.selector.innerText, () => $.selector.innerText = text)
$.val = text => $.undefined(text, $.selector.value, () => $.selector.value = text)
$.width = width => $.undefined(width, $.style(width), () => $.selector.style['width'] = width)
$.height = height => $.undefined(height, $.style(height), () => $.selector.style['height'] = height)
$.show = (type) => {
    if (type) {
        $.selector.style['visibility'] = 'visible'
    } else {
        $.selector.style['display'] = 'block'
    }
    return $
}
$.hide = (type) => {
    if (type) {
        $.selector.style['visibility'] = 'hidden'
    } else {
        $.selector.style['display'] = 'none'
    }
    return $
}
$.css = (read, set) => $.undefined(set, $.style(read), () => $.selector.style[read] = set)
$.style = property => window.getComputedStyle($.selector, null).getPropertyValue(property)
$.undefined = (check, callback, callaback2) => {
    if (typeof check == "undefined") {
        return callback
    } else {
        callaback2()
        return $
    }
}