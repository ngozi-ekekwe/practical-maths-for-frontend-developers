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

  // Generate an Array of all Days in the Month of a given date
  function buildMonth(day) {
    let daysInMonth = getDaysInMonth(day.getMonth() + 1, day.getFullYear());
    let iterableDate = new Date(day);
    iterableDate.setDate(1);
    let month = [...Array(daysInMonth)].map((_, i) => {
      let monthDay = {
        index: i,
        day: iterableDate,
        expense: []
      }
      iterableDate = getNextDay(iterableDate);
      return monthDay
    })
    return month
  }

  // Write a function to get the number of days in a given month
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate(); 
  }

  let month = buildMonth(startDay)

  // Write a function to display the month
  let printMonth = month.reduce((acc, currentDay) => {
    return acc + `<div class="day">${currentDay.day.getDate()}</div>`
  }, '')

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
            <div dangerouslySetInnerHTML={{ __html: printMonth }}></div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </>
  );
}
