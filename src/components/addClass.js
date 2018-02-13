$.addClass = classes => {
    $.selector.classList.add(classes.split(' ').map(v => v.replace(' ', '')))
    return $
}