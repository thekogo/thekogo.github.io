let test = [];
test[0] = 5 > 4 //true
test[1] = "apple" > "pineapple" //false
test[2] = "2" > "12" // true
test[3] = undefined == null // true
test[4] = undefined === null // false
test[5] = "bee" < "be" // false
test[6] = "bee" > "Bee" // true
test[7] = "Bee" < "be" // true

test.forEach(test => {
    console.log(test)
})