$ = {}
$.listener = {}
$.one = (selector) => {
    $.selector = document.querySelector(selector)
    return $
}
$.all = (selector) => {
    $.selector = document.querySelectorAll(selector)
    return $
}