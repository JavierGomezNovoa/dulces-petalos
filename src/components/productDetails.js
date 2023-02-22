import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function ProductDetails({ productData }) {
  return (
    <>
      <div className={styles.backButton}>
        <Link href="/">
          <button>Back to home</button>
        </Link>
      </div>

      <section className={styles.section}>
        <Image
          src={productData.imgUrl}
          alt={productData.name}
          width={400}
          height={400}
        />
        <div className={styles.description}>
          <h1>Desription</h1>
          <h2>Name: {productData.name}</h2>
          <h2>Scientific name: {productData.binomialName}</h2>
          <h2>Price: {productData.price}€</h2>
          <h2>
            Water needs: {productData.wateringsPerWeek} watering(s) per week
          </h2>
          <h2>Fertilizer type: {productData.fertilizerType}</h2>
          <h2>Maximun height: {productData.heightInCm} cm</h2>
        </div>
      </section>
    </>
  );
}