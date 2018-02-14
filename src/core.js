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