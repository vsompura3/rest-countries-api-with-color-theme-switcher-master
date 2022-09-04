function SearchBar({ searchedCountry, setSearchedCountry }) {
  return (
    <input
      type="search"
      name="search-country"
      id="search-country"
      value={searchedCountry}
      placeholder="Search for a country..."
      onChange={e => setSearchedCountry(e.target.value)}
    />
  )
}

export default SearchBar
