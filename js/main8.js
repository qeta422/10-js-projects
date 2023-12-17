const expenseBtn = document.querySelector(".expense-btn");
const list = document.querySelector(".list");
const expenseAmount = document.querySelector(".expense-amount");

let expenses = [];
let total = 0;

function renderExpenses() {
    let html = "";
    expenses.forEach(expense => {
        hrml += `
            <div class="item">
                <div class="item-description"></div>
                <div class="item-amount"></div>
                <button class="delete-btn">&times;</button>
            </div>
        `;
    });
    list.innerHTML = html;
    expenseAmount.innerHTML = `Total Expenses: $`; 
}

function addExpense() {
    
}

function deleteExpense() {
    
}