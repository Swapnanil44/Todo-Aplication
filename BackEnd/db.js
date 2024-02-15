const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:4Too9AXe9Hn3j21C@cluster0.iozucmj.mongodb.net/todos')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports ={
    todo
}