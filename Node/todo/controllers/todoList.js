const db = require("../models");

const getTodoList = async (req, res) => {
    const todolist = await db.TodoList.findAll()
    res.status(200).send(todolist);
}

const createTodoList = async (req, res) => {
    const newTodo = await db.TodoList.create({
        task: req.body.task
    })
    res.status(201).send(newTodo);
}

const updateTodoList = async (req, res) => {
    const targetId = Number(req.params.id);
    const newTask = req.body.task;
    await db.TodoList.update({
        task: newTask
    }, {
        where: {
            id: targetId
        }
    })
    
    res.status(200).send({ message: "Updating us success"});
}

const deleteTodoList = async (req, res) => {
    const targetId = Number(req.params.id);
    await db.TodoList.destroy({
        where: {
            id: targetId
        }
    });
    res.status(204).send();
}

module.exports = {
    createTodoList,
    getTodoList,
    updateTodoList,
    deleteTodoList
}