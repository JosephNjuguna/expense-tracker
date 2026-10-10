// this is my entry point. 
// It’s the one file i link in the HTML, 
// and it’s where the form’s submit listener goes.

import { addExpense, expenses } from "./state.js";
import { getFormData, clearForm } from "./ui.js";

const form = document.getElementById("expense-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const expense = getFormData();
  if (!expense.description || isNaN(expense.amount))
    {
        alert("Please enter a description and a valid amount.");
        return;
    }
  addExpense(expense);
  clearForm();
  console.log(expenses);
});