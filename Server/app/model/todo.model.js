const mongoose = require('mongoose');

/* Un task trebuie sa aiba:

    - nume
    - descriere
    - status
    - prioritate (low, medium, high -> ordonam dupa prioritate
    - project // folder // root

*/

const todoSchema = mongoose.Schema({
    name: String,
    description: String,
    status: Boolean,
    priority: String,
    category: String
})

module.exports = Todo = mongoose.model('todo', todoSchema);