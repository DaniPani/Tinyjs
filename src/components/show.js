$.show = (type) => {
    if (type) {
        $.selector.style['visibility'] = 'visible'
    } else {
        $.selector.style['display'] = 'block'
    }
    return $
}