const regionList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

function Dropdown({ region, setRegion }) {
  return (
    <>
      <label className="visually-hidden" htmlFor="region-select">
        Select a region
      </label>
      <select
        name="regions"
        id="region-select"
        value={region}
        onChange={e => setRegion(e.target.value)}
      >
        <option value="">Filter by region </option>
        {regionList.map(region => (
          <option key={region} value={region.toLocaleLowerCase()}>
            {region}
          </option>
        ))}
      </select>
    </>
  )
}

export default Dropdown
