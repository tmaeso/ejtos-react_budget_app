import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import {TiDelete} from 'react-icons/ti';
import { FcPlus } from "react-icons/fc";

const ExpenseItem = (props) =>{
    const {currency, dispatch} = useContext(AppContext);
    const increaseAllocation = (name) => {
        const expense = {
            name: name, 
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE', 
            payload: expense
        });
    };
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE', 
            payload: props.id
        });
    };
    
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency} {props.cost}</td>
            <td><FcPlus size='2em' onClick={(event) => increaseAllocation(props.name)}/></td>
            <td><button style={{width:'2em', borderRadius: '50%', backgroundColor: 'red', color: 'white', fontStyle: 'bold', borderColor: 'red'}} onClick={(event) => decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;