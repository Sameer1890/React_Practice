import { useState } from "react";
import "./NewExpenseForm.css";


function NewExpenseForm() {
  const [data,setDate]=useState();
  const [title,setTitle]=useState();
  const [amount, setAmount]=useState();

const handleSubmit =(e)=>{
 e.preventDefault();
 const expense={title, amount, date:new Date(data)};
 console.log(expense);

 setAmount();
 setTitle();
 setDate();
};

    return (
      <form className="form-container" onSubmit={(handleSubmit)} >
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">Submit</button>
      </form>
    );
  };

export default NewExpenseForm;
