import Head from "next/head";
import Link from "next/link";
import Header from "@components/Header";
import Section from "@components/Section";
import Footer from "@components/Footer";

import { roll } from "../utils";
import styles from "../styles/Home.module.css";

export default function Home() {
  const randomColors = ["purple", "indianred", "darkslategray"];
  return (
    <>
      <Head>
        <title>Practial Maths For frontend developers</title>
        <link rel="icon" href="" />
      </Head>
      <Header></Header>
      <main>
        <Section title="Practical Maths For Frontend Developers">
          <ul className={styles.cards}>
            <li
              className={styles.card}
              style={{
                backgroundColor: randomColors[roll(0, randomColors.length)],
              }}
            >
              <Link href="/shopping-cart">
                <a>Shopping Cart</a>
              </Link>
            </li>
            <li
              className={styles.card}
              style={{
                backgroundColor: randomColors[roll(0, randomColors.length)],
              }}
            >
              <Link href="/weekly-schedule">
                <a> Weekly Schedule</a>
              </Link>
            </li>
            <li
              className={styles.card}
              style={{
                backgroundColor: randomColors[roll(0, randomColors.length)],
              }}
            >
              <Link href="/monthly-expense-sheet">
                <a> Monthly Expense Sheet</a>
              </Link>
            </li>
          </ul>
        </Section>
      </main>
      <Footer></Footer>
    </>
  );
}
