'use strict';

module.exports = function(app, mySQL) {
  const todoList = require('../controllers/todoListController');

  // todoList Routes
  app.get('/tasks', (req, res) => {
    console.log('mySQL');
    console.log(mySQL);
    todoList.list_all_tasks(req, res, mySQL)
  }) 
   
   app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
    };