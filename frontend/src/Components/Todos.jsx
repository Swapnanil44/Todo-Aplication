import { Todo } from "./Todo"

export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div key={todo.title}>
            <Todo todo={todo} ></Todo>
            </div>
        })}
    </div>
}