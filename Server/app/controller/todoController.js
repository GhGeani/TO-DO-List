const router = require('express').Router();
const util = require('./utilities/util.js');


router.get('/', util.getAllTodos);
router.post('/', util.createTodo);
router.get('/:folder', util.getTodos);
router.get('/update/:id', util.getTodo);
router.post('/update/:id', util.editTodo);
router.post('/delete/:id', util.deleteTodo);
router.get('/finish/:id', util.finishTodo);

module.exports = router;