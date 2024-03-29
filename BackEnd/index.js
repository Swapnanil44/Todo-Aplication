const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"something up with your inputs"
        })
        return;
    }

    await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed:false
    })

    res.json({
        msg:"todo created successfully"
    })
})
app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})
app.put('/completed',async function(req,res){
    const updatePaylaod = req.body;
    const parsedPayload = updateTodo.safeParse(updatePaylaod);
    if(! parsedPayload.success){
        res.status(411).json({
            msg:"input is wrong"
        })
        return
    }

    await todo.update({
        _id: req.body.id,
    },{
        completed: true,
    })

    res.json({
        msg:"todo marked as done",
    })
})
app.listen(3000)