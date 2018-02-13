$.addClass = classes => {
    if (typeof classes == 'array') {
        Array.from(classes).forEach(element => $.selector.classList.add(element))
    } else {
        $.selector.classList.add(classes)
    }
    return $
}