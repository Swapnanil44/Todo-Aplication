import React, { useState } from 'react';

export const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCreateTodo = () => {
    fetch('http://localhost:3000/todo',{
      method: "POST",
      body:JSON.stringify({
        title: title,
        description: description
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async function(res){
      const json = await res.json();
      alert("todo added")
    })
    console.log('hello')
  };

  return (
    <div className="p-4 bg-gray-800 shadow-md text-white">
      <h2 className="text-lg font-semibold mb-2">Create Todo</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 bg-gray-700 border rounded-md mb-2 text-white"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 bg-gray-700 border rounded-md mb-2 text-white"
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleCreateTodo}
      >
        Create Todo
      </button>
    </div>
  );
};

