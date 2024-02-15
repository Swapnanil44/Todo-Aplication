export function Todo({todo}){
    return <div className="p-4 bg-gray-800 shadow-md  text-white">
    <h2 className="text-lg font-semibold mb-2">{todo.title}</h2>
    <p className="text-gray-400 mb-2">{todo.description}</p>
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
    >
        {todo.completed == true ? "Completed" : "Mark As Done"}
      </button>
    </div>
}