import styles from "./Search.module.css";

const Search = () => {
  return (
    <section className={styles.container}>
      <img
        className={styles.googleImg}
        src="https://dl.dastyar.io/Img/Dynamic/google-logo.svg"
        alt="گوگل"
      />

      <form className={styles.searchForm}>
        <input
          className={styles.searchFormInput}
          type="text"
          placeholder="جستجو در گوگل"
        />

        <button className={styles.searchFormSubmit} type="submit">
          جستجو
        </button>
      </form>
    </section>
  );
};

export default Search;
