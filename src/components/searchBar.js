import styles from "@/styles/Home.module.css";

export default function SearchBar({ handleChange }) {
  return (
    <div className={styles.searchBar}>
      <input
        data-testid="searchBar"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}
