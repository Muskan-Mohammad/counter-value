

import React from 'react';
import {connect} from 'react-redux';
import { INCREMENT_ACTION } from '../counter.action';

 function CounterIncrement(props){
    console.log("CounterIncrement" , props)
    return <button onClick={() => props.dispatch(INCREMENT_ACTION)}>+</button>
}

export default connect()(CounterIncrement);