function multiplyNumeric(obj, times) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= times
        }
    }
}