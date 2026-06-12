function eqAll(iterable) {
    let arr;

    // detect array
    if (Array.isArray(iterable)) {
        arr = iterable;
    } else {
        arr = iterable.split("");
    }

    // empty case
    if (arr.length === 0) return true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            return false;
        }
    }

    return true;
}