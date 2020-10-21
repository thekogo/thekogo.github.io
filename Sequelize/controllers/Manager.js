const db = require('../models');
const { Sequelize } = require('../models');

const Op = Sequelize.Op;

const getAllManagers = async (req, res) => {
    const allManagers = await db.Manager.findAll();
    res.status(200).send(allManagers);
}

const getManagerById = async (req, res) => {
    const targetId = req.params.targetId;
    const targetManager = await db.Manager.findOne({ where: {id: targetId }});
    res.status(200).send(targetManager)
}

const createManager = async (req, res) => {
    const { name, experience } = req.body
    const newManager = await db.Manager.create({
        name: name,
        experience: experience
    });
    res.status(200).send(newManager);
}

const updateManager = async (req, res) => {
    const { name, experience } = req.body;
    const targetId = req.params.targetId
    await db.Manager.update({
        name: name,
        experience: experience
    }, {
        where: {
            id: targetId
        }
    })
    res.status(200).send({message: `Manager Id ${targetId} has been updated`})
}

const deleteManager = async (req, res) => {
    const targetId = req.params.targetId;
    await db.Manager.destroy({
        where: {
            id: targetId
        }
    })
    res.status(204).send();
}


module.exports = {
    getAllManagers,
    getManagerById,
    createManager,
    updateManager,
    deleteManager
}