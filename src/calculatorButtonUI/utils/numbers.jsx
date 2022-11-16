import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const Numbers = (props) =>{
    
     const numbers = [
    { number: "0", letter: "zero" },
    { number: "1", letter: "one" },
    { number: "2", letter: "two" },
    { number: "3", letter: "three" },
    { number: "4", letter: "four" },
    { number: "5", letter: "five" },
    { number: "6", letter: "six" },
    { number: "7", letter: "seven" },
    { number: "8", letter: "eight" },
    { number: "9", letter: "nine" },
    { number: ".", letter: "decimal" }
  ];
    
    
    return (
        numbers.map(({ letter, number }) => (
        <button onClick={(e)=> {
          props.setPanelExpression(prevState => {
          return prevState + e.target.value;
          })
        }}
        value={number} key={letter} accessKey={number} className={`btn btn-secondary btn-${letter}`}>
        {number}
        </button>
      ))
    )
 }
export default Numbers;