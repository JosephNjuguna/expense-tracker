# Project title:
Expense Tracker

## Description:
Multi-Currency Expense Tracker is a lightweight web app for anyone who travels, freelances internationally, or shops from foreign stores and struggles to keep track of spending across different currencies. 

Log each expense in the currency you actually paid in, and the app instantly converts everything into a single base currency of your choice, so your total spending is always clear at a glance. 

Conversions use live exchange rates fetched from a public REST API, keeping your numbers accurate without any manual lookups or calculations.

 ![Expense Tracker overview](./images/Multi-Currency%20Expense%20Tracker%20-%20slide%201.png)

## Live Demo link
https://josephnjuguna.github.io/expense-tracker/

## Features:
- Multi-currency expense logging: Record each expense in the currency you actually paid in (USD, EUR, KES, GBP, JPY, and more).

- Live exchange rates: Pulls real-time rates from a REST API, so conversions reflect current market values.

- Instant conversion: See every expense converted into your chosen base currency as soon as it’s added.

- Selectable base currency: Pick the one currency you understand best and view all totals in it, and switch at any time.

- Running total: A summary showing your combined spending in the base currency.
- Expense details: Add a description, amount, currency, category for each entry.
- Category tagging and filtering: Group expenses (food, transport, shopping, etc.) and filter the list to see where your money goes.

- Delete: Remove entries, with totals updating automatically.

- Original and converted amounts: Each entry shows both what you paid and its converted value, with the rate used.

## Tech stack used:
- HTML
- JAVASCRIPT
- CSS

## How to run this locally.
- 1. open terminal, change directory to Documents.

- 2. clone this repo to you machine using 'git clone git@github.com:JosephNjuguna/expense-tracker.git'

- 3. once cloned to you machine. type "ls" to see your directory and change directory to the cloned repo usng : 'cd expense-tracker'. and then type : 'code . ' to open the repo in vs code.

- 4. once vs code is open, open index.html file using the live server in order to view webage locally 

## what I'd improve with more time
1. Add persistent data storage
2. Add a way to see the actual conversion rate.
3. Add unit tests.