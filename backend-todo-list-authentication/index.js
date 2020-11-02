require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const todoListRoutes = require('./routes/todoList');
const userRoutes = require('./routes/user');
const db = require('./models');

require('./config/passport/passport');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo-list', todoListRoutes);
app.use('/users', userRoutes);

const port = process.env.PORT
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
});