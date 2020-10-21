const fs = require('fs');

fs.readFile(process.argv[2], (err ,data) => {
    const str = data.toString();
    const count = str.split("\n");
    console.log(count.length - 1)
})