import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const EqualBtn = (props) =>{
    let traceFigures=props.panelExpression
    if(props.condition==1){
        return <li> {props.historyExpression}</li>
    }
    else{
        return <Button onClick={
            (e)=>{
                var newVal = props.panelExpression.split(/([\+\-\*\/])/).map(a => parseFloat(a) || a).join('');
                props.historyExpression.push(traceFigures);
                //split
                //get last value of expression
                ///check if the [+,/,-,*]
                //delete
                //error show 
                let result=eval(newVal);
                props.setPanelExpression(prevState => {
                prevState=result
                console.log(result)
               
                return result;
                })
                }
                } 
            className="btn-equals btn btn-success">=</Button>
    }
 }
export default EqualBtn;





