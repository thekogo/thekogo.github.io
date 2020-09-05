const express = require('express');
const router = express.Router();

const todoListController = require('../controllers/todoList');

router.get('/', todoListController.getTodoList);
router.post('/', todoListController.createTodoList);
router.put('/:id', todoListController.updateTodoList);
router.delete('/:id', todoListController.deleteTodoList);

module.exports = router;