import React from 'react'
import "./index.css";

const Greeting = () => {

  let greet = "";
  const date = new Date();
  let currHour = date.getHours(); 
  let cssStyle = {};
  if(currHour > 0 && currHour < 12 ){
    greet = "Good Morning";
    cssStyle.color = "Yellow";
  }else if(currHour >12 && currHour < 18){
    greet = "Good Evening";
    cssStyle = "orange";
  }else{
    greet = "Good Night";
    cssStyle = "black";
  }

  return (
    <div className='greet-box'>
       <h1 style={{color: "red"}}>Hello sir, <span style={cssStyle}>{greet}</span> </h1>
    </div>
  )
}

export default Greeting
