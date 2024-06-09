import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(1);

  let value = useMemo(() => {
    let value = 0;
    for (let i = 0; i <= inputValue; i ++) {
      value = value + i;
    }
    return value;
  }, [inputValue])
  
  
  
  
  
return (
    <div>
      <input onChange={(e) => {
        setInputValue(e.target.value);
      }} />
      <br />
      Sum from 1 to {inputValue} is {value}
      <br />
      <button onClick={function () {
        setCount(counter + 1)
      }}>Counter is {counter}</button>
    </div>
  )
}

export default App
