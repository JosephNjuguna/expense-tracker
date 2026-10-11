// i guess where data is stored
export let expenses = [
    {
        id:0,
        description: "uber",
        amount: 23,
        currency: "EUR",
        category: "Transport",
        convertedAmnt:3000
    },

    {
        id:1,
        description: "turkey palace",
        amount: 8500,
        currency: "KES",
        category: "Food",
        convertedAmnt:70
    },
    {   
        id:2,
        description: "claude 20x",
        amount: 100,
        currency: "USD",
        category: "Entertainment",
        convertedAmnt:13000
    }
]
export function addExpense(expense) {
    expenses= [...expenses,expense]
}



const homeCurrencySelect = document.getElementById("homeCurrency");
export let homeCurrency = homeCurrencySelect.value;
export function setHomeCurrency(currency) {
    homeCurrency = currency;
}

export function deleteExpense(id) {
    const index = expenses.findIndex(expense => expense.id === id);
    if (index !== -1){
        expenses.splice(index, 1);
    }
}