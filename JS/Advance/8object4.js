function sum(obj) {
    let sumValue = 0;
    for (let name in obj) {
        sumValue += obj[name];
    }
    return sumValue;
}