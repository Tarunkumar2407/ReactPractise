import React, { useState } from 'react'

const ClickCounter = () => {

    const [count , setCount] = useState(0);
    // let count = 0;
    const handleClick = () => {
        setCount(count + 10);
        // count++;
        console.log("clicked", count);
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ClickCounter
