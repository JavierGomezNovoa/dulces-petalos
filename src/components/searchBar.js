import styles from "@/styles/Home.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search" />
      <input type="submit" value="Search" />
    </div>
  );
}
