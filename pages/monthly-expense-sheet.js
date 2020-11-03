import Head from "next/head";
import Header from "@components/Header";
import Section from "@components/Section";
import Footer from "@components/Footer";
import BreadCrumbs from '@components/Breadcrumbs';

export default function MonthlyExpenseSheet() {
  return (
    <>
      <Head>
        <title>Monthly Expense Sheet</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <BreadCrumbs />
      <main>
        <Section title="Monthly Expense Sheet" />
      </main>
      <Footer></Footer>
    </>
  );
}
