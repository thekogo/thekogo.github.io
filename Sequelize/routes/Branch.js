const express = require('express');
const router = express.Router();
const branchController = require('../controllers/Branch')


router.get('/', branchController.getAllBranches)
// router.get('/:targetId', branchController.getBranchById)
router.post('/', branchController.createNewBranchAndManager)
// router.put('/:targetId', branchController.updateBranch)
// router.delete('/:targetId', branchController.deleteBranch)

module.exports = router