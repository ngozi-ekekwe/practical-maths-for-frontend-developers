import Head from "next/head";
import Header from "@components/Header";
import Section from "@components/Section";
import Footer from "@components/Footer";

export default function CSSShapes() {
  return (
    <>
      <Head>
        <title>CSS SHAPES</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <main>
        <Section title="CSS SHAPES" />
      </main>
      <Footer></Footer>
    </>
  );
}
