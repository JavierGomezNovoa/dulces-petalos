import { getProductById, getAllProducts } from "@/lib/products.mjs";
import Layout from "@/components/layout";
import ProductDetails from "@/components/productDetails";

export async function getStaticPaths() {
  const allProducts = await getAllProducts();
  const paths = await allProducts.map((product) => ({
    params: { id: product.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = await getProductById(params.id);
  return {
    props: {
      productData,
    },
  };
}

export default function ProductDetailsPage({ productData }) {
  return (
    <Layout>
      <ProductDetails productData={productData}></ProductDetails>
    </Layout>
  );
}
