const SearchBar = ({searchTerm, setSearchTerm, onSearch}) => {

  return (
    <div>
          <div className='search-container'>
                <input
                    className='search-input'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    onKeyDown={(e) => {
                    if (e.key === "Enter") {
                    onSearch()}}}
                />
                <button onClick={onSearch}>
                Search</button>
            </div>
    </div>
  )
}

export default SearchBar