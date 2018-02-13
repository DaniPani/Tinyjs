$.hide = (type) => {
    if (type) {
        $.selector.style['visibility'] = 'hidden'
    } else {
        $.selector.style['display'] = 'none'
    }
    return $
}