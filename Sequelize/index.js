const express = require('express');
const cors = require('cors');
const app = express();

const db = require('./models');

const managerRoutes = require('./routes/Manager')
const branchRoutes = require('./routes/Branch')
const customerRoutes = require('./routes/Customer')
const accountRoutes = require('./routes/Account')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/managers', managerRoutes);
app.use('/branches', branchRoutes);
app.use('/accounts', accountRoutes);
app.use('/customers', customerRoutes);


db.sequelize.sync({ force: false }).then( () => {
    console.log(`database is sync`);
    app.listen(8000, () => console.log(`server is running on port 8000`));
});