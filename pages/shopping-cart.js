import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Section from "@components/Section";
import Hint from "@components/Hint";
import { roll, possibleProducts } from "../utils";
import styles from "../styles/ShoppingCart.module.css"

export default function ShoppingCart() {
  let products = [...Array(5)].map((_, i) => {
    return {
      index: i,
      product: possibleProducts[roll(0, possibleProducts.length)],
      price: roll(1, 10, 1).toFixed(2),
      // weight between 6oz and 20oz
      // round to the nearest 100th
      weight: roll(6, 21, 1).toFixed(2),
      count: roll(1, 6),
    };
  });

  let cartTotal = products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.count;
  }, 0);

  let totalWeight = products.reduce((acc, currentProduct) => {
    return acc + currentProduct.weight * currentProduct.count;
  }, 0);

  // roll() for a random Tax Rate between 5% and 9%
  // rounding to the nearest 10th

  let taxRate = roll(5, 9, 1).toFixed(1);

  let taxed = (cartTotal) => {
    return (taxRate / 100) * cartTotal + parseFloat(cartTotal);
  };

  let taxTotal = taxed(cartTotal).toFixed(1);

  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <link rel="icon" href="" />
      </Head>
      <Header></Header>

      <main>
        <Section title="Shopping Cart 🛒">
          <Hint>
            <p>Randomly generates a shopping cart with different products, price and total price including tax rate</p>
          </Hint>
          {/* <div className={styles.products}>
            {products &&
              products.map((prod) => {
                return (
                  <div className={styles.product} key={prod.index}>
                    <div>{prod.product}</div>
                    <div>{prod.price}</div>
                    <div>x{prod.count}</div>
                    <div>{prod.weight}oz</div>
                  </div>
                );
              })}
          </div> */}
          <div className={styles.summary}>
            {/* <div>Total: ${cartTotal.toFixed(2)}</div>
            <div>Tax Rate: {taxRate}%</div>
            <div>Taxed Total: ${taxTotal} </div>
            <div>Total Weight : {totalWeight.toFixed(2)}oz</div> */}
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </>
  );
}
