import Head from "next/head";
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
          <div className={styles.cards}>
            <div
              className={styles.card}
              style={{
                backgroundColor: randomColors[roll(0, randomColors.length)],
              }}
            >
              Shopping Cart
            </div>
            <div
              className={styles.card}
              style={{
                backgroundColor: randomColors[roll(0, randomColors.length)],
              }}
            >
              Weekly Schedule
            </div>
            <div
              className={styles.card}
              style={{
                backgroundColor: randomColors[roll(0, randomColors.length)],
              }}
            >
              Monthly Expense Sheet
            </div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </>
  );
}
