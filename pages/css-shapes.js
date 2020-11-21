import Head from "next/head";
import Header from "@components/Header";
import Section from "@components/Section";
import BreadCrumbs from "@components/Breadcrumbs";
import Footer from "@components/Footer";

export default function CSSShapes() {
  return (
    <>
      <Head>
        <title>CSS SHAPES</title>
        <link rel="icon" href="" />
      </Head>

      <Header></Header>
      <BreadCrumbs />
      <main>
        <div className="container">
          <Section title="🔺 CSS Shapes 🔵" />
          <p>
            Shapes derived from HTML tags and CSS
          </p>
          <div className="shape-container">
            <div>
              <div class="square"></div>
            </div>
            <div>
              <div class="circle"></div>
            </div>
            <div>
              <div class="diamond"></div>
            </div>
            <div>
              <div class="triangle"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
