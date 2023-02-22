import Layout from "@/components/layout";
import ProductList from "@/components/productList";
import SearchBar from "@/components/searchBar";
import { getAllProducts } from "@/lib/products.mjs";

export async function getStaticProps() {
  const allProducts = await getAllProducts();
  return {
    props: {
      allProducts,
    },
  };
}

export default function Home({ allProducts }) {
  return (
    <>
      <Layout>
        <SearchBar></SearchBar>
        <ProductList allProducts={allProducts}></ProductList>
      </Layout>
    </>
  );
}
