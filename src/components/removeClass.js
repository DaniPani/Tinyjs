$.removeClass = (classes) => {
    if (typeof classes == 'array') {
        Array.from(classes).forEach(element => $.selector.classList.remove(element))
    } else {
        $.selector.classList.remove(classes)
    }
    return $
}