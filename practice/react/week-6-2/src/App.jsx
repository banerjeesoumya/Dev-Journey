import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';



function App() {
    
  const [button, setButton] = useState(1)
  return (
    <div>
      <button onClick={() => {
        setButton(1);
      }}>1</button>
      <button onClick={() => {
        setButton(2);
      }}>2</button>
      <button onClick={() => {
        setButton(3);
      }}>3</button>
      <button onClick={() => {
        setButton(4);
      }}>4</button>
      <Todo id={button}/>
    </div>
    
  )
}

// eslint-disable-next-line react/prop-types
function Todo ({id}) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id).then(function (res) {
      setTodo(res.data.todo)
    })
  }, [id])

  return (
    <div>
      <h3>
        {todo.id}
      </h3>
      <h1>
        {todo.title}
      </h1>
      <h5>
        {todo.description}
      </h5>
    </div>
  )
}

export default App
