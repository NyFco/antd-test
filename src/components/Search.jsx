const Search = () => {
  return (
    <section className="searchContainer">
      <img src="https://dl.dastyar.io/Img/Dynamic/google-logo.svg" alt="گوگل" />

      <form>
        <input type="text" placeholder="جستجو در گوگل" />

        <button type="submit">جستجو</button>
      </form>
    </section>
  );
};

export default Search;
