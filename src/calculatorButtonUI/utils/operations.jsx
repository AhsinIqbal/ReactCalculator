import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const Operations = (props) =>{
    
    const operations = [
    { symbol: "+", letter: "add" ,operation:"+"},
    { symbol: "-", letter: "subtract" ,operation:"-" },
    { symbol: "x", letter: "multiply",operation:"*" },
    { symbol: "÷", letter: "divide" ,operation:"/"}
  ];
    return (
      
        operations.map(({ letter, symbol,operation}) => (
        <button onClick={(e)=> {
          props.setPanelExpression(prevState => {
            console.log(prevState)
            if(String(prevState).includes(operation) && String(prevState).indexOf(operation)!==0 && String(prevState).length!==0 ){
              return prevState; 
            }
            if (String(prevState).length===1 && String(prevState).includes(operation)){
              return prevState;
            }
            if(String(prevState) === '+' ) {
              return prevState;
            }
            if( String(prevState) === '-') {
              return prevState
            }
            if (String(prevState) === "" && (operation === '/' || operation === '*')){
              return "";
            }
              return prevState + e.target.getAttribute("operatorvalue") ;
            })
            }}
            key={letter} value={symbol} {...{ "operatorvalue": `${operation}` }} className={`btn btn-warning btn-${letter}`}>
            {symbol}
        </button>
        ))
    )
 }
export default Operations;