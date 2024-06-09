import { useContext, useState } from "react"
import { CountContext } from './context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, evenSelector } from "./store/count"
// import { Navigate } from "react-router-dom";


function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count( ) {
  console.log("count re rendered")
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    <b>
    {count}
    </b>
    <EvenRenderer />
  </div>
}

function EvenRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      {isEven ? "It is Even" : null}
    </div>
  )
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom)

  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount((count) => {
        return (count + 1);
      })
    }}>Increase</button>

    <button onClick={() => {
      setCount((count) => {
        return (count - 1);
      })
    }}>Decrease</button>
  </div>
}

export default App
