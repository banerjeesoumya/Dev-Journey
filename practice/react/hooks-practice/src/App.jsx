/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'

function useDebounce(value, delay) {
  const [debounceValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return (() => {
      clearTimeout(timer);
      console.log("reached here")
    })
  }, [value, delay])

  return debounceValue
}

function App() {

  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500)
  
  return (
    <>
      Debounced value is {debouncedValue}
      <input type="text" onChange={(e) => {
        setValue(e.target.value)
      }}/> 
    </>
  )
}


export default App