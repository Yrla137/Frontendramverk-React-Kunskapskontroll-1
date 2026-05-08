import { Link } from "react-router-dom"
import { useState } from "react"

// Styling //
import "../FavoritesPage.css"

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
  <div className='favorites-page'>

    <h2 className='favorites-page-title'>
      Your Favorite Movies
    </h2>

    <div className='favorites-page-list'>

      <h2 className='favorites-page-subtitle'>
        Here are the movies you've added to your favorites!
      </h2>

      {favorites.map((favorite) =>

        <div
          key={favorite.id}
          className='favorite-card'
        >

          <Link
            to={`/movie/${favorite.imdbID}`}
            className='favorite-movie-link'
          >

            <h3 className='favorite-movie-title'>
              {favorite.Title}
            </h3>

            <p className='favorite-movie-year'>
              {favorite.Year}
            </p>

            <img
              src={favorite.Poster}
              alt={favorite.Title}
              className='favorite-movie-poster'
            />

          </Link>


          {editingId === favorite.id ? (

            <div className='favorite-comment-section'>

              <textarea
                className='favorite-comment-textarea'
                placeholder="Your comment..."
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
              />

              <div className='favorite-actions'>

                <button
                  type="button"
                  className='btn favorite-comment-save-btn'
                  onClick={handleSave}
                >
                  Save
                </button>

                <button
                  type="button"
                  className='btn favorite-comment-cancel-btn'
                  onClick={() => {
                    setEditComment("")
                    // Gör att texten man skrivit i kommentaren inte finns kvar om man inte sparat, nu resetas allt när man trycker på Cancel till det tidigare.
                    setEditingId(null)
                  }}
                >
                  Cancel
                </button>

              </div>

            </div>

          ) : (

            favorite.comment ? (

              <div className='favorite-comment-display'>

                <p className='favorite-comment-text'>
                  {favorite.comment}
                </p>

                <div className='favorite-actions'>

                  <button
                    type="button"
                    className='btn favorite-comment-edit-btn'
                    onClick={() => {
                      setEditComment(favorite.comment || "")
                      setEditingId(favorite.id)
                    }}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className='btn favorite-comment-delete-btn'
                    onClick={() =>
                      updateFavorite(favorite.id, { comment: "" })
                    }
                  >
                    Delete comment
                  </button>

                </div>

              </div>

            ) : (

              <div className='favorite-actions'>

                <button
                  type="button"
                  className='btn favorite-comment-add-btn'
                  onClick={() => {
                    setEditComment("")
                    setEditingId(favorite.id)
                  }}
                >
                  Add a comment
                </button>

              </div>

            )
          )}

          <div className='favorite-delete-section'>

            <button
              type="button"
              className='btn favorite-delete-btn'
              onClick={() => deleteFavorite(favorite.id)}
            >
              Delete favorite
            </button>

          </div>

        </div>
      )}

    </div>

  </div>
)}

export default FavoritesPage