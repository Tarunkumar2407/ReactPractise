import React, { useState } from 'react'

const FormHandling2 = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submit")

  }

  const handleInput  = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)

    const value = e.target.value;
    const name = e.target.name;

    setFullName((preValue) => {
        return {
            ...preValue,
            [name] : value,
        }

        // if(name === "fname"){
        //       return {
        //         fname: value,
        //         lname: preValue.lname,
        //         email: preValue.email,
        //         phone: preValue.phone,
        //     };
        // }else if(name === "lname"){
        //     return {
        //         fname: preValue.fname,
        //         lname: value,
        //         email: preValue.email,
        //         phone: preValue.phone,
        //     };
        // }
        // else if(name === "email"){
        //     return {
        //         fname: preValue.fname,
        //         lname: preValue.lname,
        //         email: value,
        //         phone: preValue.phone,
        //     };
        // }
        // else if(name === "phone"){
        //     return {
        //         fname: preValue.fname,
        //         lname: preValue.lname,
        //         email: preValue.email,
        //         phone: value,
        //     };
        // }
    })
  }

 
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
       <div>
         <h1>Hello {fullName.fname} {fullName.lname}</h1>
         <p>{fullName.email}</p>
         <p>{fullName.phone}</p>
         <input type='text' 
         onChange={handleInput} 
         placeholder='Enter First Name' 
         name="fName" 
         value={fullName.fname}
         ></input><br />

         <input type='text' 
         onChange={handleInput} 
         placeholder='Enter Last Name' 
         name='lName' 
         value={fullName.lname}
          ></input><br />

         <input type='email' 
         onChange={handleInput} 
         placeholder='Enter Email' 
         name='email' 
         value={fullName.email}
          ></input><br />

         <input type='text' 
         onChange={handleInput} 
         placeholder='Enter Phone Number' 
         name='phone' 
         value={fullName.phone}
          ></input><br />
         <button type='submit'>Submit Me</button>
       </div>
    </form>
    </div>
  )
}

export default FormHandling2
