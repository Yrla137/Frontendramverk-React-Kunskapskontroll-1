import { Link } from "react-router-dom"
import { useState } from "react"

const FavoritesPage = ({favorites, updateFavorite, deleteFavorite}) => {

  const [editingId, setEditingId] = useState(null)
  const [editComment, setEditComment] = useState("")



  const handleSave = () => {

    if (editingId === null) return;
    
    if (!editComment.trim()) {
      updateFavorite(editingId, { comment: "" });
      setEditingId(null);
      return;
    }
    updateFavorite(editingId, {
      comment: editComment
    })
    setEditingId(null)
  }


  return (
    <div>
        <h2>Your Favorite Movies</h2>
        {favorites.map((favorite) =>
        <div key={favorite.id}>
            <Link to={`/movie/${favorite.imdbID}`}>
                <h3>{favorite.Title}</h3>
                <p>{favorite.Year}</p>

                <img src={favorite.Poster} alt={favorite.Title} />
            </Link>


          {editingId === favorite.id ? (
              <div>
                <textarea 
                  placeholder="Your comment..."
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                />

                <button onClick={handleSave}>Save</button>
                <button onClick={() =>
                setEditComment(""),
                // Gör att texten man skrivit i kommentaren inte finns kvar om man inte sparat, nu resetas allt när man trycker på Cancel till det tidigare.
                setEditingId(null)}
                >Cancel</button>
              </div>
          ) : (
            (favorite.comment ? (
            <div>
              <p>{favorite.comment}</p>
              <button onClick={() => {
                    setEditComment(favorite.comment || "")
                    setEditingId(favorite.id)
              }}>Edit</button>
              <button onClick={() => updateFavorite(favorite.id, {comment: ""})}>Delete comment</button>
            
            </div>
            ) : (
                <button onClick={() => {
                  setEditComment("")
                  setEditingId(favorite.id)
                }}>Add a comment</button>
            ))
          )}

          <button onClick={() => deleteFavorite(favorite.id)}>Delete favorite</button>
        </div>)}
    </div>)}

export default FavoritesPage