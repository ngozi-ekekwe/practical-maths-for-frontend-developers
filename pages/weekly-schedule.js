import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Section from "@components/Section";

export default function WeeklySchedular() {
  return (
    <>
      <Head>
        <title>Weekly Schedule ✅</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <main>
        <Section title="Weekly Schedule ✅" />
      </main>
      <Footer></Footer>
    </>
  )
}