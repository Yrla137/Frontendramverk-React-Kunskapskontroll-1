const SearchBar = ({searchTerm, setSearchTerm, onSearch}) => {

  return (
    <div>
          <div className='search-container'>

            <form onSubmit={(e) => {

              e.preventDefault();
              if(!searchTerm.trim()) return;
              onSearch(searchTerm.trim());}}>

                <input
                    className='search-input'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>

            </form>
            </div>
    </div>
  )
}

export default SearchBar





// FEL – körs direkt vid render
// <button onClick={handleClick()}>
// Varför fel?
// - handleClick() körs direkt när komponenten renderas
// - resultatet (oftast undefined) sätts som onClick
// - inget händer vid klick


// ✔ RÄTT – skicka funktionen
// <button onClick={handleClick}>
// Varför rätt?
// - du skickar själva funktionen
// - React kör den först när användaren klickar


// ✔ RÄTT – arrow function (när du behöver logik)
// <button onClick={() => handleClick()}>
// Varför?
// - du skapar en funktion som körs VID klick
// - bra när du vill styra exakt vad som händer


// ✔ RÄTT – med argument
// <button onClick={() => handleClick("batman")}>
// Varför?
// - annars skulle handleClick("batman") köras direkt
// - arrow function "skjuter upp" körningen



// // ✔ RÄTT – med villkor
// <button onClick={() => {
//   if (!searchTerm.trim()) return;
//   handleClick(searchTerm);
// }>
// Varför?
// - du behöver logik → kräver funktion
// - arrow function gör att det körs vid klick, inte innan


// FEL – villkor direkt
// <button onClick={condition ? handleClick() : null}>
// Varför fel?
// - handleClick() körs direkt
// - samma problem som tidigare


// ✔ RÄTT – villkor i funktion
// <button onClick={() => {
//   if (condition) handleClick();
// }}>
