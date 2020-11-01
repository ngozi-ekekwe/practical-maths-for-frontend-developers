import Head from "next/head";
import Header from "@components/Header";
import Section from "@components/Section";
import Footer from "@components/Footer";

export default function MonthlyExpenseSheet() {
  return (
    <>
      <Head>
        <title>Monthly Expense Sheet</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <main>
        <Section title="Monthly Expense Sheet" />
      </main>
      <Footer></Footer>
    </>
  );
}
