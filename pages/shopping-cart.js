import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Section from "@components/Section";

export default function ShoppingCart() {
  const roll = (minValue, maxValue) => {

  }

  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <link rel="icon" href="" />
      </Head>
      <Header></Header>
      <main>
        <Section title="Shopping Cart" />
      </main>
      <Footer></Footer>
    </>
  );
}
