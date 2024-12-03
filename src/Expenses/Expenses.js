// import React {useState} from 'react';
import './Expenses.css'
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Cards';
import { useState } from 'react';
function Expenses(props) {

  let clickHandler = () => {
    alert("checked");

  }

    return (
  <Card className='expense'>
  <ExpensesDate date={props.date}/>
  <div className=".expense-description">
    <h1>{props.title}</h1></div>
  <div className="expense-price">{props.amount}</div>
  <button onClick={clickHandler}>Change title</button>
  </Card>
    );
  }

  export default Expenses;