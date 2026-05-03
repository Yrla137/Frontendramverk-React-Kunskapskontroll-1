import apiClient from "./axiosConfig";

// GET //
export const getAllMovies = async (searchTerm) => {

  const cleanSearch = searchTerm.trim().toLowerCase()
  try {
    if (cleanSearch === "") {
      return [];
    }
    const response = await apiClient.get(`/`, {
        params: { s : cleanSearch }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch movies: ${error.message}`, { cause: error });
}
};

// GET by id //
export const getMovieById = async (id) => {
  try {
    const response = await apiClient.get(`/`, {
      params: { i: id }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch movie ${id}: ${error.message}`, { cause: error });
  }
};


// FAVORITES (JSON SERVER) //

const FAVORITES_URL = "http://localhost:3001/favorites";

// GET all favorites
export const getFavorites = async () => {
  const res = await fetch(FAVORITES_URL);
  return res.json();
};

// ADD favorite
export const addFavoriteApi = async (movie) => {
  const res = await fetch(FAVORITES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  return res.json();
};

// DELETE favorite
export const deleteFavoriteApi = async (id) => {
  await fetch(`${FAVORITES_URL}/${id}`, {
    method: "DELETE",
  });
};

// UPDATE favorite (comment etc)
export const updateFavoriteApi = async (id, updatedData) => {
  const res = await fetch(`${FAVORITES_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};



// // CREATE //
// export const createMovie = async (movieData) => {
//   try {
//     const response = await apiClient.post("/=s", movieData);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Failed to create movie: ${error.message}`, { cause: error });
//   }
// };

// // PATCH (UPDATE) //
// export const updateMovie = async (id, movieData) => {
//   try {
//     const response = await apiClient.patch(`/i=${id}`, movieData);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Failed to update movie ${id}: ${error.message}`, { cause: error });
//   }
// };

// // PUT (REPLACE) //
// export const replaceMovie = async (id, movieData) => {
//   try {
//     const response = await apiClient.put(`/i=${id}`, movieData);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Failed to replace movie ${id}: ${error.message}`, { cause: error });
//   }
// };

// // DELETE //
// export const deleteMovie = async (id) => {
//   try {
//     const response = await apiClient.delete(`/i=${id}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Failed to delete movie ${id}: ${error.message}`, { cause: error });
//   }
// };
