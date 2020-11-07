import Head from "next/head";
import Header from "@components/Header";
import Section from "@components/Section";
import Footer from "@components/Footer";
import BreadCrumbs from "@components/Breadcrumbs";
import Hint from "@components/Hint";
import { roll } from "utils";

export default function MonthlyExpenseSheet() {
  let startDay = new Date("3/15/2020");

  function getNextDay(day) {
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    return nextDay;
  }

  // Generate a Monthly Budget (Subtract Rent/Utils)
  let annualIncome = roll(31000, 40000, 1).toFixed(2);
  let monthlyIncome = parseFloat(annualIncome) / 12;
  let rent = roll(1200, 1800, 1).toFixed(2);
  let utilities = roll(300, 500).toFixed(2);

  let monthlyBudget = monthlyIncome - parseFloat(rent) - parseFloat(utilities);
  
  function generateExpenses() {
    let expenseCount = roll(0, 4);
    return [...Array(expenseCount)].map((_, i) => {
      return {
        index: i,
        value: roll(1, 30, 1),
      };
    });
  }

  

  // Generate an Array of all Days in the Month of a given date
  function buildMonth(day) {
    let daysInMonth = getDaysInMonth(day.getMonth() + 1, day.getFullYear());
    let iterableDate = new Date(day);
    iterableDate.setDate(1);
    let month = [...Array(daysInMonth)].map((_, i) => {
      let monthDay = {
        index: i,
        day: iterableDate,
        expenses: generateExpenses(),
      };
      iterableDate = getNextDay(iterableDate);
      return monthDay;
    });
    return month;
  }

  // Write a function to get the number of days in a given month
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  let month = buildMonth(startDay);

  // Calculate / Display Leftover Cash
  function getMonthNetValue() {
    let monthlyExpenseTotal = month.reduce((acc, simpleDay) => {
      return acc + getDailyCost(simpleDay)
    }, 0)

    return monthlyBudget - monthlyExpenseTotal;
  }


  function getDailyCost(day) {
    return day.expenses.reduce((acc, expense) => {
      return acc + parseFloat(expense.value)
    }, 0)
  }

  let displayExpenses = (expenses) => {
    return expenses.reduce((acc, expense) => {
      return acc + `<div class="expense"> -\$${expense.value.toFixed(2)}</div>`;
    }, "");
  };

  let monthlyNetValue = getMonthNetValue()

  console.log(monthlyNetValue, 'monthlyNetValue')

  // Write a function to display the month
  let printMonth = month.reduce((acc, currentDay) => {
    return (
      acc +
      `
      <div class="day">
      ${currentDay.day.getDate()}
      ${displayExpenses(currentDay.expenses)}
      </div>
     `
    );
  }, "");



  return (
    <>
      <Head>
        <title>Monthly Expense Sheet</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <BreadCrumbs />
      <main>
        <Section title="Monthly Expense Sheet 📅">
          <Hint>Monthly Expense Sheet</Hint>
          <div className="month-schedule">
            <div className="monthly-summary">
              Monthly Budget ${monthlyBudget.toFixed(2)} | Net Value ${monthlyNetValue.toFixed(2)}
            </div>
            <div dangerouslySetInnerHTML={{ __html: printMonth }}></div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </>
  );
}
