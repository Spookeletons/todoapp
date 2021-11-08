const {sequelize} = require("../models/index");
const {QueryTypes} = require("sequelize");
const {ToDo} = require('../models/index');

module.exports.homeRoute = async function(req, res, next) {
    let toDoItems = await ToDo.findAll();
    res.render('index', {toDoItems});
};
module.exports.addForm = function(req,res){
    res.render('create_todo');
};
module.exports.addItem = async function(req, res) {
    await ToDo.create({
        description: req.body.description
    });
    res.redirect('/');
};
module.exports.markAsComplete = async function(req, res) {
    await ToDo.update({completed: true}, {
        where: {
            id: req.params.id
        }
    });
    res.redirect('/');
};
module.exports.markAsIncomplete = async function(req, res) {
    await ToDo.update({completed: false}, {
        where: {
            id: req.params.id
        }
    });
    res.redirect('/');
};
module.exports.deleteItem = async function(req, res) {
    await ToDo.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/');
};
module.exports.renderEditForm = async function(req, res) {
    let todo = await ToDo.findByPk(req.params.id);
    res.render('edit_todo', {
        item: {
            description: todo.description,
            id: todo.id
        }
    });
    res.redirect('/');
};
module.exports.makeEdit = async function(req, res) {
    await ToDo.update({description: req.body.description}, {
        where: {
            id: req.params.id
        }
    });
    res.redirect('/');
};