import Dropdown from '../components/Dropdown'
import SearchBar from '../components/SearchBar'

function Navbar({ searchedCountry, setSearchedCountry, region, setRegion }) {
  return (
    <div className="search-and-navigate">
      <SearchBar
        searchedCountry={searchedCountry}
        setSearchedCountry={setSearchedCountry}
      />
      <Dropdown region={region} setRegion={setRegion} />
    </div>
  )
}

export default Navbar
