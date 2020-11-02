import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Section from "@components/Section";
import Hint from "@components/Hint";
import { roll } from "utils";
import styles from '../styles/Weeklyschedule.module.css';


export default function WeeklySchedular() {
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let firstDay = new Date("3/1/2020")

  // Write a getNextDay Function
  // Takes in a Date object and
  // returns the following day
  function getNextDay(day) {
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    return nextDay;
  }

  // Generate a list of random tasks,
  // names can simply be "Task 54"/"Task 23"/etc
  // Must have index and Boolean to check for completion
  function generateTasks() {
    return [...Array(roll(2, 3))].map((_, i) => {
      return {
        index: i,
        name: `Task ${roll(1, 100)}`,
        complete: roll(0, 2) ? true : false
      }
    })
  }

  // Returns an array of days representing the week
  // Generate Tasks for each day
  function buildWeek(day) {
    return [...Array(7)].map((_, i) => {
      let weekday = {
        index: i,
        date: day,
        tasks:  generateTasks()
      }
      day = getNextDay(day);
      return weekday;
    })
  }

  console.log(buildWeek(firstDay))
  return (
    <>
      <Head>
        <title>Weekly Schedule ✅</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <main>
        <Section title="Weekly Schedule ✅">
          <Hint>For people that love to plan</Hint>
          <div className="">
            {weekdays && weekdays.map((day, index) => {
              return (
              <div className={styles.day} key={index}>{day}</div>
              )
            })}
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </>
  );
}
