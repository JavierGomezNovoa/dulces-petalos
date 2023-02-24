import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function ProductDetails({ productData }) {
  return (
    <div className={styles.detailPageWrapper}>
      <div className={styles.backButton}>
        <Link data-testid={"backButtonLink"} href="/">
          <button>Back to home</button>
        </Link>
      </div>

      <section className={styles.section}>
        <div className={styles.image}>
          <Image
            src={productData.imgUrl}
            alt={productData.name}
            width={400}
            height={400}
          />
        </div>
        <div className={styles.description}>
          <h1>Desription</h1>
          <ul>
            <li>Name: {productData.name}</li>

            <li>Scientific name: {productData.binomialName}</li>
            <li>Price: {productData.price}€</li>
            <li>
              Water needs: {productData.wateringsPerWeek} watering(s) per week
            </li>
            <li>Fertilizer type: {productData.fertilizerType}</li>
            <li>Maximun height: {productData.heightInCm} cm</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
