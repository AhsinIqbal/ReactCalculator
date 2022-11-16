import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const Operations = (props) =>{
    
    const operations = [
    {  symbol: "+", letter: "add" ,operation:"+"},
    { symbol: "-", letter: "subtract" ,operation:"-" },
    { symbol: "x", letter: "multiply",operation:"*" },
    { symbol: "÷", letter: "divide" ,operation:"/"}
  ];
    return (
      
        operations.map(({ letter, symbol,operation}) => (
        <button onClick={(e)=> {
          props.setPanelExpression(prevState => {
            if(String(prevState).includes(operation) && String(prevState).indexOf(operation)!==0 ){
              return prevState; 
            }
            else{
              return prevState + e.target.getAttribute("operatorvalue") ;
            }
            })
            }}
            key={letter} value={symbol} {...{ "operatorvalue": `${operation}` }} className={`btn btn-warning btn-${letter}`}>
            {symbol}
        </button>
        ))
    )
 }
export default Operations;