import { useState } from "react";
import "../FavoriteBtn.css"

const FavoriteBtn = ({movie, favorites, addToFavorites}) => {

    const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);

    const isFavorite = favorites.some(
        (favorite) => favorite.imdbID === movie?.imdbID
        );


  return (
    <div className="favorite-btn-container">
        <button
        type="button"
        data-state={isFavorite ? "remove" : "add"}
        data-loading={isFavoriteLoading ? "true" : "false"}
        className={`btn
            ${isFavorite ? "btn--remove" : "btn--add"}
            ${isFavoriteLoading ? "btn--loading" : ""}`}
        
        disabled={isFavoriteLoading}
        onClick={ async (e) => {
            e.stopPropagation()
            // För att förhindra event bubbling, vilket är när ett klick på knappen också triggar klickhändelsen på länken som omger den.
            // använder vi e.stopPropagation() som stoppar att klicket på knappen också triggar länken, vilket gör att användaren inte oavsiktligt navigeras bort från sidan när de försöker lägga till eller ta bort en favorit.

            setIsFavoriteLoading(true)
            try {
            await addToFavorites(movie)}
            finally{
            setIsFavoriteLoading(false)
            }}}>
            {isFavoriteLoading
            ? "Updating..."
            : isFavorite
            ? "Remove favorite❤️"
            : "Add to favorites❤️"}
        </button>
    </div>
  )
}

export default FavoriteBtn