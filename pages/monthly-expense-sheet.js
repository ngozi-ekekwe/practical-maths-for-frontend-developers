import Head from "next/head";
import Header from "@components/Header";
import Hero from "@components/Hero";
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
        <Hero title="Monthly Expense Sheet" />
      </main>
      <Footer></Footer>
    </>
  );
}
