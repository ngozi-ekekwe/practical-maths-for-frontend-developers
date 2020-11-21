import Head from "next/head";
import Link from "next/link";
import Header from "@components/Header";
import Section from "@components/Section";
import Footer from "@components/Footer";

import { roll } from "../utils";
import styles from "../styles/Home.module.css";

export default function Home() {
  const randomColors = ["lightsteelblue", "indianred"];
  return (
    <>
      <Head>
        <title>Practial maths for frontend developers</title>
        <link rel="icon" href="" />
      </Head>
      <Header></Header>
      <main>
        <div className="container">
          <Section title="Practical maths for frontend developers">
            <p>
              Projects built from interactive course with{" "}
              <a href="https://scrimba.com/learn/practicalmath">
                Scrimba & Ryan Gonyon
              </a>
            </p>
            <ul className={styles.cards}>
              <li className={styles.card}>
                <Link href="/shopping-cart">
                  <a>
                    <div
                      className={styles.cardbackground}
                      style={{
                        backgroundColor:
                          randomColors[roll(0, randomColors.length)],
                      }}
                    >
                      S
                    </div>
                    <div className={styles.cardcontent}>
                      <h3>Shopping Cart</h3>
                      <p>
                      Randomly generates a shopping cart with different products, price and total price including tax rate.
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li className={styles.card}>
                <Link href="/weekly-schedule">
                  <a>
                    <div
                      className={styles.cardbackground}
                      style={{
                        backgroundColor:
                          randomColors[roll(0, randomColors.length)],
                      }}
                    > W </div>
                    <div className={styles.cardcontent}>
                      <h3>Weekly Schedule</h3>
                      <p>
                        Randomly generates a shopping cart with different products, price and total price including tax rate
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li className={styles.card}>
                <Link href="/monthly-expense-sheet">
                  <a>
                    <div
                      className={styles.cardbackground}
                      style={{
                        backgroundColor:
                          randomColors[roll(0, randomColors.length)],
                      }}
                    >M</div>
                    <div className={styles.cardcontent}>
                      <h3>Monthly Expense sheet</h3>
                      <p>
                        Randomly generates a shopping cart with different products, price and total price including tax rate
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li className={styles.card}>
                <Link href="/css-shapes">
                  <a>
                    <div
                      className={styles.cardbackground}
                      style={{
                        backgroundColor:
                          randomColors[roll(0, randomColors.length)],
                      }}
                    >C</div>
                    <div className={styles.cardcontent}>
                      <h3>CSS Shapes</h3>
                      <p>A mobile app for climbers that provides
                      workouts and tracking.</p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </Section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
