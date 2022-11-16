import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const Clear = (props) =>{
    return <Button onClick={(e)=>{
            props.setPanelExpression(prevState => {
            prevState="";
            return prevState;
            })
            }} 
             accessKey='c' value="C" className="calculatorClear btn btn-danger">C</Button>
 }
export default Clear;