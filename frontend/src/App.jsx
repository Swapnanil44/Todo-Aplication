import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'
function App() {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/todos')
    .then(async function(res){
    const json = await res.json();
    setTodos(json.todos)
    })
  },[])
  return <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
  </div>
    
}

export default App
