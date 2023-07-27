import React, { useState } from 'react'

const IncDecCounter = () => {
  
    const [counter, setCounter] = useState(10);

    const handleInc = () => {
        setCounter(counter + 1)
    }

    const handleDec = () => {
        // setCounter(counter -1)
        if(counter > 0){
            setCounter(counter - 1)
        }else if( counter <= 0){
            alert("Zero Limit Reached");
            setCounter(0);
        }
    }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Decrease</button>
    </div>
  )
}

export default IncDecCounter
