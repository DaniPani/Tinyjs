$.addClass = classes => {
    Array.from(classes).forEach(element => $.selector.classList.add(element))
    return $
}