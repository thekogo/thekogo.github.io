const express = require('express');
const app = express();

const port = 3000;

// Lab 1
app.get('/', (req, res) => {
    res.send("Hello World Server is running");
})
// End Lab 1

// Lab 2
app.get('/bye', (req, res) => {
    res.send("Good Bye");
})

app.post('/post', (req, res) => {
    res.send("This is post request");
})

app.put('/put', (req, res) => {
    res.send("This is put request");
})

app.delete('/delete', (req, res) => {
    res.send("This is delete request");
})

// End Lab 2


app.listen(port, () => console.log(`Server is running on port ${port}`));