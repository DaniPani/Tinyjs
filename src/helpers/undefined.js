$.undefined = (check, callback, callaback2) => {
    if (typeof check == "undefined") {
        return callback
    } else {
        callaback2()
        return $
    }
}