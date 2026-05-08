// Styling //
import "../CSS/SearchBar.css"

const SearchBar = ({searchTerm, setSearchTerm, onSearch}) => {

  return (
    <div className='search-bar'>
          <div className='search-bar-container'>

            <form className='search-form'
            onSubmit={(e) => {

              e.preventDefault();
              if(!searchTerm.trim()) return;
              onSearch(searchTerm.trim());}}>

                <input
                    className='search-input'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                />
                <button className="search-bar-btn" type="submit">Search</button>

            </form>
            </div>
    </div>
  )
}

export default SearchBar
