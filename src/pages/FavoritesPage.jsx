import { Link } from "react-router-dom"
import { useState } from "react"

const FavoritesPage = ({favorites, updateFavorite, deleteFavorite}) => {

  const [editingId, setEditingId] = useState(null)
  const [editComment, setEditComment] = useState("")



  const handleSave = () => {
    updateFavorite(editingId, {
      comment: editComment
    })
    setEditingId(null)
  }

  return (
    <div>
        <h2>Your Favorite Movies</h2>
        {favorites.map((favorite) =>
        <div key={favorite.imdbID}>
            <Link to={`/movie/${favorite.imdbID}`}>
                <h3>{favorite.Title}</h3>
                <p>{favorite.Year}</p>

                <img src={favorite.Poster} alt={favorite.Title} />
            </Link>

            {editingId === favorite.imdbID ? (
              <div>
                <textarea 
                  placeholder="Comment..."
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                  onKeyDown={(e) => {
                    if(e.key === "Enter"){
                      handleSave()
                    }}}
                />

                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ): (
                <button
                  onClick={() => {
                    setEditComment(favorite.comment || "")
                    setEditingId(favorite.imdbID)
                  }}>Edit</button>
            )}

            <p>{favorite.comment}</p>

          <button onClick={() => deleteFavorite(favorite.imdbID)}>Delete favorite</button>
        </div>)}
    </div>)}

export default FavoritesPage