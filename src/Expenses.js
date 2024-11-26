import './Expenses.css'
function Expenses() {
    let title ="Title";
    const date="date and time";
    const amount = 12222;
  
    
    return (
  <div className="expense" >
  <div className="">{date}</div>
  <div className=".expense-description">
    <h1>{title}</h1></div>
  <div className="expense-price">{amount}</div>
  </div>
    );
  }

  export default Expenses;