import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timeNow, setTimeNow] = useState(format(new Date(), 'MM/dd/yyyy hh:mm:ss'))
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNow(format(new Date(), 'MM/dd/yyyy hh:mm:ss'))
    }, 1000)
  
    return () => clearInterval(timer)
  }, [])
  return (
    <p placeholder="current time">{timeNow}</p>
  )
}

export default App
