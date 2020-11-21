import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Section from "@components/Section";
import { roll, possibleProducts, possibleProductNames } from "../utils";
import BreadCrumbs from "@components/Breadcrumbs";

import styles from "../styles/Shopping.module.css";

export default function ShoppingCart() {
  let products = [...Array(5)].map((_, i) => {
    return {
      index: i,
      product: possibleProducts[roll(0, possibleProducts.length)],
      name: possibleProductNames[roll(0, possibleProductNames.length)],
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
      <BreadCrumbs />
      <main>
        <div className="container">
          <Section title="Shopping Cart 🛒">
            <p>
            Randomly generates a list of products, calculate the total price of the products and apply a tax rate.
            </p>
            <div className={styles.shopping__cart}>
              <div className={styles.products}>
                {products &&
                  products.map((prod) => {
                    return (
                      <div className={styles.product} key={prod.index}>
                        <div className={styles.product__image}>
                          {prod.product}
                        </div>
                        <div className={styles.product__details}>
                          <div className={styles.product__name}>
                            {prod.name}
                          </div>
                          <div className={styles.product__price}>
                            <span>Price: </span>${prod.price}
                          </div>
                          <div>
                            <span>Qty: </span>
                            {prod.count}x
                          </div>
                          <div>
                            <span>Weight: </span>
                            {prod.weight}oz
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className={styles.summary}>
                <div className={styles.summary__wrapper}>
                  <div><span>Total: $</span>{cartTotal.toFixed(2)}</div>
                  <div><span>Tax Rate:  </span>{taxRate}%</div>
                  <div><span>Taxed Total: </span>${taxTotal} </div>
                  <div><span>Total Weight: </span>{totalWeight.toFixed(2)}oz</div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
