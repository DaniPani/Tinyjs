$.removeClass = (classes) => {
    Array.from(classes).forEach(element => $.selector.classList.remove(element))
    return $
}