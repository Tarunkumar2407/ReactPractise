import React, { useState } from 'react'

const TimeChange = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const handleClick = () => {
        setTime(new Date().toLocaleTimeString());
    }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleClick}>Get Time</button>
    </div>
  )
}

export default TimeChange
