import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

let id = 1;

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  

  useEffect(() => {
   setExchange1Data({
    returns : 100
   })
  }, [])

  useEffect(() => {
    setExchange2Data({
      returns : 100
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBankData({income: 100});
    }, 5000)
  }, [])

const cryptoReturns = useMemo(() => {
  console.log("Reached here")
  return exchange1Data.returns + exchange2Data.returns
}, [exchange1Data, exchange2Data]);

const incomeTax = (bankData.income + cryptoReturns) * 0.3; 

// console.log(bankData.income);
// console.log(exchangeData.income);
  return (
    <div>
      hi there, your income tax returns are {incomeTax};
    </div>
  )
}

export default App
