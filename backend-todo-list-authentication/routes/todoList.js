const express = require('express');
const router = express.Router();
const todoListControllers = require('../controllers/todoList');
const passport = require('passport');

const auth = passport.authenticate("jwt", { session: false });

router.get('/', auth, todoListControllers.getTodoList);
router.post('/', auth, todoListControllers.addTodoList);
router.put('/:id', auth, todoListControllers.updateTodoList);
router.delete('/:id', auth, todoListControllers.deleteTodoList);

module.exports = router;