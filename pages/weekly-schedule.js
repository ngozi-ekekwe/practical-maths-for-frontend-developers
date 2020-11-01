import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@components/Hero";

export default function WeeklySchedular() {
  return (
    <>
      <Head>
        <title>Weekly Schedular</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <main>
        <Hero title="Weekly Schedular" />
      </main>
      <Footer></Footer>
    </>
  )
}