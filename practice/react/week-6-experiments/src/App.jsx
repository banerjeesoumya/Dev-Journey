/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let id = 0;

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos)
      })
    }, 5000)
  }, [])

  return todos;
}

function App() {
  
 const todos = useTodos();

  return (
    <div>
     {todos.map((todo) => (
       <Todo key = {todo.id++} title={todo.title} description = {todo.description} />
     ))}
    </div>
   )
}

function Todo ({title, description}) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
  
}

export default App
