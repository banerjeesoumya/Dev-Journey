/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    description: "Go to Gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA from 4-6",
    completed: true
  }, {
    title: "Study Development",
    description: "Study Development from 10-12",
    completed: false
  }]); // [0, 1] => [1, 2] => [2, 3] => so on....
  // console.log(count);
  // console.log(setCount);
  
   

  // 👇 the below codebase returns the dynamic html
  return (
    <div>
      <button onClick={addTodo}>Add a Random Todo</button>
      {todos.map(function(todo){
        // eslint-disable-next-line react/jsx-key
        return <Todo title = {todo.title} description = {todo.description} />
      })}
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    </div>
}

export default App
