// establish different page variables
var Income_Page = document.getElementById("Income_Page");
var Expenses_Page = document.getElementById("Expenses_Page");
var Budget_Page = document.getElementById("Budget_Page");
var How_It_Works_Page = document.getElementById("How_It_Works_Page");
var pages = [Income_Page, Expenses_Page, Budget_Page, How_It_Works_Page];

// establish variables to print out HTML
var total_income_space = document.getElementById("Total_Income_Space");
var total_expenses_space = document.getElementById("Total_Expenses_Space");
var leftover_money_space = document.getElementById("Leftover_Money_Space");
var leftover_after_savings_space = document.getElementById("Leftover_After_savings_Space");
var savings_space = document.getElementById("Savings_Space");

// establish variables that will be needed in global scope
let total_income = 0;
let total_expenses = 0;
let leftover_money = 0;
let savings = 0;
let leftover_after_savings = 0;


function hideAllPages(visible_page) {
    for (i = 0; i < pages.length; i++) {
        if (pages[i] == visible_page) {
            pages[i].style.visibility = 'visible';
        }
        else {
            pages[i].style.visibility = 'hidden';
        }
    }
}


// show income page
function incomePage() {
    hideAllPages(Income_Page);
    console.log("Showing Income Page")
}

// show expenses page
function expensesPage() {
    hideAllPages(Expenses_Page);
    console.log("Showing Expenses Page")
}

// show budget page
function budgetPage() {
    hideAllPages(Budget_Page);
    console.log("Showing Budget Page")
}

// show how it works page
function howItWorksPage() {
    hideAllPages(How_It_Works_Page);
    console.log("Showing How It Works Page")
}

function submit_income_variables() {
    var hourly_income = Number(document.getElementById("Hourly").value);
    var salary_income = Number(document.getElementById("Salary").value);
    var hours = Number(document.getElementById("Hours").value);

    // turn salary income into an hourly income
    if (salary_income != 0) {
        hourly_income += (salary_income / 26) / hours;
    }
    total_income = hours * hourly_income;
    updateBudget();
}

function submitExpensesVariables() {
    // get all expenses
    var expense1 = Number(document.getElementById("expense1").value)
    var expense2 = Number(document.getElementById("expense2").value)
    var expense3 = Number(document.getElementById("expense3").value)
    var expense4 = Number(document.getElementById("expense4").value)
    var expense5 = Number(document.getElementById("expense5").value)
    var expense6 = Number(document.getElementById("expense6").value)
    var expense7 = Number(document.getElementById("expense7").value)
    var expense8 = Number(document.getElementById("expense8").value)
    var expense9 = Number(document.getElementById("expense9").value)
    var expense10 = Number(document.getElementById("expense10").value)
    var allExpensesArr = [expense1, expense2, expense3, expense4, expense5, expense6, expense7, expense8, expense9, expense10]
    total_expenses = 0
    // add expenses together
    for (i = 0; i < allExpensesArr.length; i++) {
        total_expenses += allExpensesArr[i];
    }
    updateBudget();
}

function submitSavingsPercentage() {
    var savings_percentage = Number(document.getElementById("savings_percentage").value)
    // find percentage
    switch (savings_percentage) {
        case 0:
            savings = 0
            break;
        case 5:
            savings = leftover_money * 0.05;
            break;
        case 10:
            savings = leftover_money * 0.1;
            break;
        case 15:
            savings = leftover_money * 0.15;
            break;
        case 20:
            savings = leftover_money * 0.2;
            break;
        case 25:
            savings = leftover_money * 0.25;
            break;
        case 30:
            savings = leftover_money * 0.3;
            break;
        case 35:
            savings = leftover_money * 0.35;
            break;
        case 40:
            savings = leftover_money * 0.4;
            break;
        case 45:
            savings = leftover_money * 0.45;
            break;
        case 50:
            savings = leftover_money * 0.5;
            break;
        case 55:
            savings = leftover_money * 0.55;
            break;
        case 60:
            savings = leftover_money * 0.6;
            break;
        case 65:
            savings = leftover_money * 0.65;
            break;
        case 70:
            savings = leftover_money * 0.7;
            break;
        case 75:
            savings = leftover_money * 0.75;
            break;
        case 80:
            savings = leftover_money * 0.8;
            break;
        case 85:
            savings = leftover_money * 0.85;
            break;
        case 90:
            savings = leftover_money * 0.9;
            break;
        case 95:
            savings = leftover_money * 0.95;
            break;
        case 100:
            savings = leftover_money * 1;
            break;
    }
    updateBudget();
}

function updateBudget() {
    total_income_space.innerHTML = `Total Income: ${total_income}`;
    total_expenses_space.innerHTML = `Total Expenses: ${total_expenses}`;
    leftover_money = total_income - total_expenses;
    leftover_money_space.innerHTML = `Leftovers: ${leftover_money}`
    savings_space.innerHTML = `Savings: ${savings}`;
    leftover_after_savings = leftover_money - savings;
    leftover_after_savings_space.innerHTML = `Leftovers after savings: ${leftover_after_savings}`
}

updateBudget();