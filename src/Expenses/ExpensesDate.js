import './ExpensesDate.css';


function ExpensesData(props) {
    let day = props.date.getDay();
    let month = props.date.getMonth();
    let year = props.date.getFullYear();
      return (
        <div className='date'>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
      )
    }

    export default ExpensesData;