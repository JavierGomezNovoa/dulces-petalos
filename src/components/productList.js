import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ allProducts }) {
  return (
    <section className={styles.section}>
      {allProducts.map(({ id, name, binomialName, price, imgUrl }) => (
        <div className={styles.item} key={id}>
          <Link className={styles.link} href={`/${id}`}>
            <Image src={imgUrl} alt={name} width={233} height={233} />
            <div className={styles.itemInfo}>
              <div className={styles.name}>{name}</div>
              <div className={styles.binomialName}>{binomialName}</div>
              <div className={styles.price}>{price}€</div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}

//make a search bar component that filters all products based on the input
