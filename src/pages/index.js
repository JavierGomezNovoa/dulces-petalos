import Layout from "@/components/layout";
import ProductList from "@/components/productList";
import SearchBar from "@/components/searchBar";
import { getAllProducts } from "@/lib/products.mjs";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export async function getStaticProps() {
  const allProducts = await getAllProducts();
  return {
    props: {
      allProducts,
    },
  };
}

export default function Home({ allProducts }) {
  const [products, setProducts] = useState(allProducts);

  const handleChange = (e) => {
    setProducts(
      allProducts.filter((product) => {
        if (
          product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          product.binomialName
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return product;
        }
      })
    );
  };

  return (
    <>
      <Layout>
        <SearchBar
          data-testid={"searchBar"}
          handleChange={handleChange}
        ></SearchBar>
        <ProductList
          data-testid={"productList"}
          allProducts={products}
        ></ProductList>
      </Layout>
    </>
  );
}
