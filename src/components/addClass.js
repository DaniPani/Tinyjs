$.addClass = classes => {
    classes.forEach(element => $.selector.classList.add(element))
    return $
}