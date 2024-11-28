import './ExpensesItem.css';
import Expenses from './Expenses';

function ExpensesItem(props){
    console.log(props.amount);
return (
<div >
<Expenses 
    name={props.item[0].name}
    title={props.item[0].title}
    date={props.item[0].date} 
    amount={props.item[0].amount} >
    </Expenses>

    <Expenses 
    name={props.item[0].name}
    title={props.item[0].title}
    date={props.item[0].date} 
    amount={props.item[0].amount} >
    </Expenses>

    <Expenses 
    name={props.item[1].name}
    title={props.item[1].title}
    date={props.item[1].date} 
    amount={props.item[1].amount} >
    </Expenses>

    <Expenses 
    name={props.item[2].name}
    title={props.item[2].title}
    date={props.item[2].date} 
    amount={props.item[2].amount} >
    </Expenses>

    <Expenses 
    name={props.item[3].name}
    title={props.item[3].title}
    date={props.item[3].date} 
    amount={props.item[3].amount} >
    </Expenses>
    
</div>
);
}
export default ExpensesItem;