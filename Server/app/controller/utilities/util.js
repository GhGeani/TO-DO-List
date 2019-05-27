const Todo = require('../../model/todo.model.js');
const util = {};

util.createTodo = function(req, res){
    //res.send('create-todo');
    let todo = new Todo(req.body);
    todo.save()
        .then((result) => {
            res.send('TODO added in database');
        })
        .catch((err) => {
            res.send(err);
        })

} 

util.getAllTodos = function (req,res) {  
    Todo.find({}).sort({status: 1}).then((result) =>{
        if(result) {
            res.json(result);
        }
    })
}

util.getTodos = function(req, res){
    //res.send('get-all-todos-from ' + req.params.folder);
    Todo.find({category: req.params.category})
        .then((result) => {
            if(result) {
                res.json(result);
            }
        })
        .catch((err) => {
            res.send(err);
        })

}

util.getTodo = function(req, res){
    //res.send('get-a-todo-with-id ' + req.params.todo);
    Todo.findById(req.params.id).then((result) => {
        res.json(result);
    })
}

util.editTodo = function (req, res){
    //res.send('edit-a-todo-with-id' + req.params.todo);

    Todo.findById(req.params.id, function(err, result) {
        if (!result)
            res.status(404).send('data is not found');
        else
            result.name = req.body.name;
            result.description = req.body.description;
            result.status = req.body.status;
            result.category = req.body.category;
            result.priority = req.body.priority;

            result.save().then(result => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });

}

util.finishTodo = function(req, res) {
    Todo.findById(req.params.id, function(err, result) {
        if (!result)
            res.status(404).send('data is not found');
        else
            result.status = true;

            result.save().then(result => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
    
}

util.deleteTodo = function(req, res){
    //res.send('delete-a-todo-with-id ' + req.params.todo);
    Todo.findByIdAndDelete(req.params.id)
        .then(() =>{
            res.send('TODO deleted.')
        })

}
module.exports = util;