var express = require('express');
var router = express.Router();
const toDoController = require("../controllers/todo_controller.js")
const {sequelize} = require("../models/index");
const {QueryTypes} = require("sequelize");

/* GET home page. */
router.get('/', toDoController.homeRoute);

router.get('/add', toDoController.addForm)

router.post('/add', toDoController.addItem);

router.get('/complete/:id', toDoController.markAsComplete);

router.get('/incomplete/:id', toDoController.markAsIncomplete);

router.get('/delete/:id', toDoController.deleteItem);

router.get('/edit/:id', toDoController.renderEditForm);

router.post('/edit/:id', toDoController.makeEdit);

module.exports = router;

