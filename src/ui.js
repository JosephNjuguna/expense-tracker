// its for anything that touches the DOM
export function getFormData() {
  return {
    description: document.getElementById("addexpense").value.trim(),
    amount: parseFloat(document.getElementById("amount").value),
    currency: document.getElementById("currency").value,
    category: document.getElementById("category").value,
  };
}

export function clearForm() {
  document.getElementById("expense-form").reset();
}
