import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Section from "@components/Section";
import Hint from "@components/Hint";
import { roll } from "utils";
import BreadCrumbs from '@components/Breadcrumbs';

export default function WeeklySchedular() {
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  let firstDay = new Date("3/1/2020");

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
        name: `Task ${roll(1, 60)}`,
        complete: roll(0, 2) ? true : false,
      };
    });
  }

  // Returns an array of days representing the week
  // Generate Tasks for each day
  function buildWeek(day) {
    return [...Array(7)].map((_, i) => {
      let weekday = {
        index: i,
        date: day,
        tasks: generateTasks(),
      };
      day = getNextDay(day);
      return weekday;
    });
  }

  let week = buildWeek(firstDay);

  let taskToHtml = (tasks) => {
    return tasks.reduce((acc, task) => {
      return (
        acc +
        `<div class="circle-container ${task.complete ? "checked" : ""}">
          <div class="circle"></div>
        <label>${task.name}</label>
        </div>`
      );
    }, "");
  };

  let getDayTasksComplete = (dayTask) => {
    return dayTask.reduce((acc, currentTask) => {
      if (currentTask.complete) {
        return acc + 1;
      }
      return acc;
    }, 0);
  };

  let getWeekTasksComplete = (week) => {
    return week.reduce((acc, currentDay) => {
      return acc + getDayTasksComplete(currentDay.tasks);
    }, 0);
  };

  let scheduledWeek = week.reduce((acc, currentDay) => {
    return (
      acc +
      `<div class="day">
      <div class="task-header">${weekdays[currentDay.date.getDay()]} -  ${getDayTasksComplete(
        currentDay.tasks
      )} complete</div>
      <div class="tasks">${taskToHtml(currentDay.tasks)}</div>
      </div>`
    );
  }, " ");

  

  return (
    <>
      <Head>
        <title>Weekly Schedule ✅</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <BreadCrumbs />
      <main>
        <Section title="Weekly Schedule ✅">
          <Hint>{getWeekTasksComplete(week)} Tasks completed</Hint>
          <div id="WeeklySchedule">
            <div dangerouslySetInnerHTML={{ __html: scheduledWeek }}></div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </>
  );
}
