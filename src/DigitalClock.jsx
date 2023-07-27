import React, {useState} from 'react'

const DigitalClock = () => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString())
    setInterval(() => {
        setClock(new Date().toLocaleTimeString())
    },1000)
  return (
    <div>
      <h1>{clock}</h1>
    </div>
  )
}

export default DigitalClock
