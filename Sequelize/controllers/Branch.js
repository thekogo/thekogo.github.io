const db = require('../models');
const { Sequelize } = require('../models');

const Op = Sequelize.Op;

const getAllBranches = async (req, res) => {
    const allBranch = await db.Branch.findAll({ include: [db.Manager] });
    res.status(200).send(allBranch);
}

const getBranchById = async (req, res) => {
    const targetId = req.params.targetId;
    const targetBranch = await db.Branch.findOne({ where: {id: targetId }});
    res.status(200).send(targetBranch)
}

const createNewBranchAndManager = async (req, res) => {
    const { managerName, managerExperience } = req.body
    const { branchName, branchSize } = req.body
    const newManager = await db.Manager.create({
        name: managerName,
        experience: managerExperience
    })
    const newBranch = await db.Branch.create({
        name: branchName,
        size: branchSize,
        manager_id: newManager.id
    })
    res.status(200).send(newBranch);
}

const updateBranch = async (req, res) => {
    const { name, experience } = req.body;
    const targetId = req.params.targetId
    await db.Branch.update({
        name: name,
        experience: experience
    }, {
        where: {
            id: targetId
        }
    })
    res.status(200).send({message: `Branch Id ${targetId} has been updated`})
}

const deleteBranch = async (req, res) => {
    const targetId = req.params.targetId;
    await db.Branch.destroy({
        where: {
            id: targetId
        }
    })
    res.status(204).send();
}


module.exports = {
    getAllBranches,
    createNewBranchAndManager,
    getBranchById,
    updateBranch,
    deleteBranch
}