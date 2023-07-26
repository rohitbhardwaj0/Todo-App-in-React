//import mangoose to create new Schema
const mongoose = require('mongoose');

//create Schema
const TodoItemsSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true
    }
})

//export this schema
module.exports = mongoose.model('todo', TodoItemsSchema);
