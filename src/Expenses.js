import './Expenses.css'
import ExpensesDate from './ExpensesDate';
function Expenses(props) {
    
    return (
  <div className="expense">
  <ExpensesDate date={props.date}/>
  <div className=".expense-description">
    <h1>{props.title}</h1></div>
  <div className="expense-price">{props.amount}</div>
  </div>
    );
  }

  export default Expenses;