// this is my entry point. 
// It’s the one file i link in the HTML, 
// and it’s where the form’s submit listener goes.

const form = document.getElementById("expense-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const expense = {
    description: document.getElementById("addexpense").value.trim(),
    amount: parseFloat(document.getElementById("amount").value),
    currency: document.getElementById("currency").value,
    category: document.getElementById("category").value,
  };
  console.log(expense);
});