$.removeClass = (classes) => {
    classes.forEach(element => $.selector.classList.remove(element))
    return $
}