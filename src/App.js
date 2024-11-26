import './App.css';
import Expenses from './Expenses';

function App() {

  let expensesdata=[
    {
      name:'Ali',
      amount:2300,
      title:'school fees',
      date: new Date(),
    },
    {
      name:'moiz',
      amount:2300,
      title:'tution fees',
      date: new Date(),
    },
    {
      name:'Sameer',
      amount:2300,
      title:'university fees',
      date: new Date()
    },
    {
      name:'Zeehan',
      amount:2300,
      title:'school fees',
      date: new Date()
    }
  ]

  return (<>
    <Expenses 
    name={expensesdata[0].name}
    title={expensesdata[0].title}
    date={expensesdata[0].date} 
    amount={expensesdata[0].amount} >
    </Expenses>

    <Expenses 
    name={expensesdata[0].name}
    title={expensesdata[0].title}
    date={expensesdata[0].date} 
    amount={expensesdata[0].amount} >
    </Expenses>

    <Expenses 
    name={expensesdata[1].name}
    title={expensesdata[1].title}
    date={expensesdata[1].date} 
    amount={expensesdata[1].amount} >
    </Expenses>

    <Expenses 
    name={expensesdata[2].name}
    title={expensesdata[2].title}
    date={expensesdata[2].date} 
    amount={expensesdata[2].amount} >
    </Expenses>

    <Expenses 
    name={expensesdata[3].name}
    title={expensesdata[3].title}
    date={expensesdata[3].date} 
    amount={expensesdata[3].amount} >
    </Expenses>
    
    </>)
}
export default App;
