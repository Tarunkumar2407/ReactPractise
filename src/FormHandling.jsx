import React, { useState } from 'react'

const FormHandling = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  }

  const handleFirstName  = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName  = (e) => {
    setLastName(e.target.value)
  }
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
       <div>
         <h1>Hello {fullName}</h1>
         <input type='text' placeholder='Enter First Name' value={firstName} onChange={handleFirstName}></input><br />
         <input type='text' placeholder='Enter Last Name' value={lastName} onChange={handleLastName}></input><br />
         <button type='submit'>Submit Me</button>
       </div>
    </form>
    </div>
  )
}

export default FormHandling
