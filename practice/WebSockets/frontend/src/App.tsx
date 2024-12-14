import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [message, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log("Connected")
      setSocket(socket)
    }

    socket.onmessage = (message) => {
      console.log("Recevied message: ", message.data)
      setMessages(message.data)
    }

    return (() => {
      socket.close()
    })
  }, [])

  if (!socket) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <>
      <input onChange={(e) => {
        setInputMessage(e.target.value)
      }} />
      <button onClick={() => {
        socket.send(inputMessage)
      }}>Send</button>
      {message}
    </>
  )
}

export default App
