import React, {useState,useEffect} from 'react';
import './calculatorButtonUI.css';
import Clear from './utils/clear';
import EqualBtn from './utils/equal';
import Operations from './utils/operations';
import Numbers from './utils/numbers';
import Panel from './utils/panel';
import AddListItem from '../calculatorButtonUI/utils/addListItem';

 function CalculatorButtonUI (props) {

    const [panelExpression, setPanelExpression] = useState("");
    let historyExpression=[];
    return ( 
    <>
        <div className="calculatorGrid">
            <div className="calculatorContentWrapper">
                <Panel panelExpression={panelExpression} />
                <div className="CalculatorButtons">
                    <EqualBtn panelExpression={panelExpression} setPanelExpression={setPanelExpression} historyExpression={historyExpression} />
                    <Clear setPanelExpression={setPanelExpression}  panelExpression={panelExpression}/>
                    <Numbers setPanelExpression={setPanelExpression} />
                    <Operations  setPanelExpression={setPanelExpression}/>
                </div>
            </div>
         <div className="historyTab">
            <p>History Tab</p>
            <ul id='history'>
                <li>{panelExpression}</li>   
            </ul>
         </div>
        </div>
    </>
       )
}
export default CalculatorButtonUI;