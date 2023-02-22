import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ allProducts }) {
  return (
    <section className={styles.section}>
      {allProducts.map(({ id, name, price, imgUrl }) => (
        <div className={styles.item} key={id}>
          <Link href={`/pages/${id}`}>
            <Image src={imgUrl} alt={name} width={200} height={200} />
          </Link>
          <p>
            {name}, {price}$
          </p>
        </div>
      ))}
    </section>
  );
}
