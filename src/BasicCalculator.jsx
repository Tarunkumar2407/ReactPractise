import React from 'react'

const BasicCalculator = () => {
    // const a = +prompt("Enter your first Number");
    // const b = +prompt("Enter your second Number");

    function add(a, b){
        return a+b;
    }
    function sub(a, b){
        return a-b;
    }
    function mult(a, b){
        return a*b;
    }
    function divi(a, b){
        return (a/b).toFixed(2);
    }
  return (
    <div>
       <h2>Sum of two number is {add(40, 4)}</h2>
       <h2>Subtraction of two number is {sub(40, 4)}</h2>
       <h2>Multiply of two number is {mult(10, 3)}</h2>
       <h2>Division of two number is {divi(10, 3)}</h2>
    </div>
  )
}

export default BasicCalculator
