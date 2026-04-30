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

// CREATE //
export const createMovie = async (movieData) => {
  try {
    const response = await apiClient.post("/=s", movieData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create movie: ${error.message}`, { cause: error });
  }
};

// PATCH (UPDATE) //
export const updateMovie = async (id, movieData) => {
  try {
    const response = await apiClient.patch(`/i=${id}`, movieData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update movie ${id}: ${error.message}`, { cause: error });
  }
};

// PUT (REPLACE) //
export const replaceMovie = async (id, movieData) => {
  try {
    const response = await apiClient.put(`/i=${id}`, movieData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to replace movie ${id}: ${error.message}`, { cause: error });
  }
};

// DELETE //
export const deleteMovie = async (id) => {
  try {
    const response = await apiClient.delete(`/i=${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to delete movie ${id}: ${error.message}`, { cause: error });
  }
};
