const expenseBtn = document.querySelector(".expense-btn");
const list = document.querySelector(".list");
const expenseAmount = document.querySelector(".expense-amount");

let expenses = [];
let total = 0;

function renderExpenses() {
    let html = "";
    expenses.forEach(expense => {
        html += `
            <div class="item">
                <div class="item-description">${expense.description}</div>
                <div class="item-amount">$${expense.amount}</div>
                <button class="delete-btn">&times;</button>
            </div>
        `;
    });

    list.innerHTML = html;
    expenseAmount.innerText = `Total Expenses: $${total}`; 
}

function addExpense() {
    const description = prompt("Enter Expense Description: ");
    const amount = parseFloat(prompt("Enter Expense Amount: "));

    if (description && amount) {
        const expense = {
            description:description,
            amount:amount
        };

        expenses.push(expense);
        total += amount;
        renderExpenses();
    }
   
}

expenseBtn.addEventListener("click", addExpense);

function deleteExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);
    renderExpenses();
}

list.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const index = Array.from(event.target.parentNode.parentNode.children)
        .indexOf(event.target.parentNode);
        
        deleteExpense(index);
    }
})