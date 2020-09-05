const express = require('express');
const todoList = require('./controllers/todoList');
const app = express();
const cors = require('cors');

const todoListRoutes = require('./routes/todoList');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false }))

app.use('/todo-list', todoListRoutes)

app.listen(8000, () => console.log(`server is running on port 8000`));