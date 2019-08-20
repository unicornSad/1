'use strict';
//ОБОЗНАЧЕНИЕ РАБОТЫ С js6
let start = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),

    expensesItems = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item"),

    chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

// let str = "gbr -value";

// let mass = [],
//     strValue = str.slice(-6);

// let pp = document.getElementsByClassName("*-value");
// console.log(pp);


// if (strValue === "-value") {
//     mass.push(strValue);
// } else {
//     alert("no");
// }
// console.log(mass);



// //получить конец строки. если он равен... то занести эллемент в массив
