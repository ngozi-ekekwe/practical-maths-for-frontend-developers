import Head from "next/head";
import Header from "@components/Header";
import Section from "@components/Section";
import BreadCrumbs from "@components/Breadcrumbs";
import Hint from "@components/Hint";
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
        <Section title="🔺 CSS Shapes 🔵" />
        <Hint>
          <p>Shapes you can make with CSS</p>
        </Hint>
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
      </main>
      <Footer></Footer>
    </>
  );
}
