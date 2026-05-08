import { useState } from "react";

// Styling //
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../CSS/FavoriteBtn.css";

const FavoriteBtn = ({movie, favorites, addToFavorites}) => {

    const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);

    const [animate, setAnimate] = useState(false);
    // Endast till för att trigga CSS-animationen när knappen klickas, och inte varje gång komponenten renderas.

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
        ${isFavoriteLoading ? "btn--loading" : ""}
        ${animate ? "btn--animate" : ""}`}
        
        disabled={isFavoriteLoading}
        onClick={ async (e) => {
            e.stopPropagation()
            // För att förhindra event bubbling, vilket är när ett klick på knappen också triggar klickhändelsen på länken som omger den.
            // använder vi e.stopPropagation() som stoppar att klicket på knappen också triggar länken, vilket gör att användaren inte oavsiktligt navigeras bort från sidan när de försöker lägga till eller ta bort en favorit.

            setAnimate(true);

            setIsFavoriteLoading(true)
            try {
            await addToFavorites(movie)}
            finally{
            setIsFavoriteLoading(false);

            setTimeout(() => {
                setAnimate(false);
                }, 350);
            // Endast till för att återställa animate-state efter att CSS-animationen har spelats klart, så att den kan triggas igen nästa gång knappen klickas.

            }}}>
                {isFavoriteLoading ? (
                <>
                    Updating...
                </>
                ) : isFavorite ? (
                <>
                    <FaHeart className="favorite-btn-icon favorite-btn-icon--active" />
                    <span>Remove favorite</span>
                </>
                ) : (
                <>
                    <FaRegHeart className="favorite-btn-icon" />
                    <span>Add to favorites</span>
                </>
                )}
        </button>
    </div>
  )
}

export default FavoriteBtn