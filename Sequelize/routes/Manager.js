const express = require('express');
const router = express.Router();
const managerController = require('../controllers/Manager')

router.get('/', managerController.getAllManagers)
router.get('/:targetId', managerController.getManagerById)
router.post('/', managerController.createManager)
router.put('/:targetId', managerController.updateManager)
router.delete('/:targetId', managerController.deleteManager)


module.exports = router