let test = [];
test[0] = "" + 1 + 0 // "10"
test[1] = "" - 1 + 0 // -1
test[2] = true + false // 1
test[3] = 6 / "3" // 2
test[4] = "2" * "3" // 6
test[5] = 4 + 5 + "px" // "9px"
test[6] = "$" + 4 + 5 // "$45"
test[7] = "4" - 2 // 2
test[8] = "4px" - 2 // NaN
test[9] = 7 / 0 // Infinity
test[10] = "  -9  " + 5 // "  -9  5"
test[11] = "  -9  " - 5 // -14
test[12] = null + 1 // 1
test[13] = undefined + 1 // NaN
test[14] = " \t \n" - 2 // -2

test.forEach(test => {
    console.log(typeof test, test);
})