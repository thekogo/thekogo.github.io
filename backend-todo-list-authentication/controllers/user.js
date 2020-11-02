const db = require('../models');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({
        where: {
            username: username
        }
    });

    if(!targetUser) return res.status(400).send({message: "username or password is wrong"});

    const isCorrectPass = bcryptjs.compareSync(password, targetUser.password)

    if(!isCorrectPass) return res.status(400).send({message: "username or password is wrong"});

    const payload = {
        id: targetUser.id,
        name: targetUser.name,
    }
    const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 })
    res.status(200).send({
        token: token,
        message: 'Login Successful'
    })
}

const registerUser = async (req, res) => {
    const { username, password, name } = req.body;
    const targetUser = await db.User.findOne({
        where: {
            username: username
        }
    });

    if(targetUser) return res.status(400).send({message: 'username already taken.'});
    
    const salt = bcryptjs.genSaltSync(12);
    const hashedPass = bcryptjs.hashSync(password, salt)

    await db.User.create({
        username: username,
        password: hashedPass,
        name: name
    })

    res.status(201).send({message: 'User created'})
}

module.exports = {
    loginUser,
    registerUser,
}