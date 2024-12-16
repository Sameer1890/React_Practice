import './App.css';
import ExpensesItem from './Expenses/ExpensesItem';
import NewExpense from './NewExpense/NewExpense';


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

  return (
    <div>
    <NewExpense>{console.log("asas")}</NewExpense>
    <ExpensesItem item={expensesdata} />
    </div>
    )
}
export default App;
