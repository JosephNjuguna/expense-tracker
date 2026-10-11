// this is my entry point. 
// It’s the one file i link in the HTML, 
// and it’s where the form’s submit listener goes.

import { addExpense, expenses, homeCurrency, setHomeCurrency } from "./state.js";
import { getFormData, clearForm, displayExpenses } from "./ui.js";
import { ExchangeRates } from "./api.js";

const form = document.getElementById("expense-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const expense = getFormData();
  if (!expense.description || isNaN(expense.amount)) {
    alert("Please enter a description and a valid amount.");
    return;
  }
  const rates = await ExchangeRates(homeCurrency);
  const homeCurrencySelect = document.getElementById("homeCurrency");
  if (expense.currency === homeCurrencySelect.value) {
    expense.convertedAmnt = Number(expense.amount).toFixed(2)
  } else {
    expense.convertedAmnt = Number(expense.amount/rates[expense.currency]).toFixed(2)
  }
  addExpense(expense);
  clearForm();
  updatePage();
});

function updatePage() {
  displayExpenses(expenses, homeCurrency, function (id) {
    deleteExpense(id);
    updatePage();
  });

  const total = expenses.reduce(function (sum, expense) {
    return sum + (Number(expense.convertedAmnt) || 0);
  }, 0);

  const totalAmount = document.getElementById("total-amnt");
  totalAmount.textContent = `${homeCurrency} ${total}`;

  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.textContent = `Total Spent, ${expenses.length} expenses.`;
}



updatePage();