// i guess where data is stored
export const expenses = [
    {
        description: "uber",
        amount: 23,
        currency: "usd",
        category: "transport",
    },

    {
        description: "turkey palace",
        amount: 8500,
        currency: "ksh",
        category: "food",
    },
    {
        description: "claude 20x",
        amount: 100,
        currency: "usd",
        category: "entertainment",
    }
]
export function addExpense(expense) {
    expenses.push(expense)
}