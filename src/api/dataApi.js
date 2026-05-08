import apiClient from "./axiosConfig";
import axios from "axios";

// GET //
export const getAllMovies = async (searchTerm) => {

  const cleanSearch = searchTerm.trim().toLowerCase();
  try {
    if (cleanSearch === "") {
      return [];
    }
    const response = await apiClient.get(`/`, {
      params: { s: cleanSearch }
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


// FAVORITES (EGEN JSON SERVER) //

const FAVORITES_URL = "http://localhost:3001/favorites";


// GET all favorites
export const getFavorites = async () => {
  try {
    const response = await axios.get(FAVORITES_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch favorite movie`, { cause: error });
  }
};


// ADD favorite
export const addFavoriteApi = async (movie) => {
  try {
    const response = await axios.post(FAVORITES_URL, movie);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to add favorite movie`, { cause: error });
  }
};


// DELETE favorite
export const deleteFavoriteApi = async (id) => {
  try {
    await axios.delete(`${FAVORITES_URL}/${id}`);
  } catch (error) {
    throw new Error(`Failed to delete favorite movie`, { cause: error });
  }
};


// UPDATE favorite (comment section)
export const updateFavoriteApi = async (id, updatedData) => {
  try {
    const response = await axios.patch(`${FAVORITES_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update favorite movie`, { cause: error });
  }
};
