import React from 'react';
import {connect} from 'react-redux';
import { DECREMENT_ACTION } from '../counter.action';

function CounterDecrement(props){
    console.log("ConterDecrement" , props)
   return <button onClick={() => props.dispatch(DECREMENT_ACTION)}>-</button>
}

export default connect()(CounterDecrement);