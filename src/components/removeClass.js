$.removeClass = (classes) => {
    $.selector.classList.remove(classes.split(' ').map(v => v.replace(' ', '')))
    return $
}