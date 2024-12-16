// import React {useState} from 'react';
import './Expenses.css'
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Cards';
import { useState } from 'react';
function Expenses(props) {
 
  
  const [title, setTitle] = useState(props.title);
  const [newTitle, setNewTitle] = useState();

  let clickHandler = () => {
    setTitle(newTitle);

  }
  const changeHandler = (event) => { 
    setNewTitle(event.target.value);
  }

    return (

  <Card className='expense'>
  <ExpensesDate date={props.date}/>
  <div className=".expense-description">
    <h1>{title}</h1>
  </div>
  <div className="expense-price">{props.amount}</div>
  <input  type='text' value={newTitle} onChange={changeHandler}/>
  <button onClick={clickHandler}>Change title</button>
  </Card>
    );
  }

  export default Expenses;