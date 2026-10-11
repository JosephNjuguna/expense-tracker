// its for anything that touches the DOM

import { ExchangeRates } from "./api.js";
import { addExpense, expenses } from "./state.js";

export function getFormData() {
  // if (!rate) {
  //   throw new Error("Currency conversion is unavailable.");
  // }
  return {
    id: expenses.length,
    description: document.getElementById("addexpense").value.trim(),
    amount: parseFloat(document.getElementById("amount").value),
    currency: document.getElementById("currency").value.toUpperCase(),
    category: document.getElementById("category").value,
  };
}

export function clearForm() {
  document.getElementById("expense-form").reset();
}

export function displayExpenses(expenses, homeCurrency, onDelete) {
  const expensesContainer = document.getElementById("expenselist");
  expensesContainer.innerHTML = "";
  if (expenses.length === 0) {
    const card = document.createElement("div");
    card.className = "no-expenses";
    card.innerHTML = `
            <div class="no-expenses">
              <h4>There are no logged expenses</h4>
              <p>add expenses using form on the left</p>
             </div>
        `;
    return;
  } else {
    expenses.forEach(expense => {
      const card = document.createElement("div");
      card.className = "expense-card";
      card.innerHTML = `
              <div class="item">
                <h3>${expense.description}</h3>
                <p>${expense.category}</p>
              </div>
              <div class="money">
                <h3>${expense.amount},${expense.currency}</h3>
                <p>${expense.convertedAmnt},${homeCurrency}</p>
              </div>
              <div class="delete" id="no-expenses">
                <span class="material-symbols-outlined">delete</span>
              </div>
          `;
      // const deleteButton = document.getElementById("delete-expense");
      // deleteButton.addEventListener("click", function () {
      //   onDelete(expense.id);
      // });

      expensesContainer.appendChild(card);
    });
  }
}
