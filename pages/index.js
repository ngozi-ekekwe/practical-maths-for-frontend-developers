import Head from "next/head";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import Card from "@components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Practial Maths For frontend developers</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <main>
        <Hero title="Practical Maths For Frontend Developers" />
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <Footer>

      </Footer>
    </>
  );
}
