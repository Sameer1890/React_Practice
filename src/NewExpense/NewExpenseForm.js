import React from "react";
import "./NewExpenseForm.css";

function NewExpenseForm() {

    return (
      <form className="form-container">
        <input
          type="date"
          value="{date}"
          // onChange={(e) => setDate(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Title"
          value="{title}"
          // onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Amount"
          value="{amount}"
          // onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">Submit</button>
      </form>
    );
  };

export default NewExpenseForm;
