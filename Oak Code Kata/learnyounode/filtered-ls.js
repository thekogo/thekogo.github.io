const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, file) => {
    file.forEach(name => {
        if(path.extname(name) == '.'+process.argv[3]) {
            console.log(name)
        }
    })
})