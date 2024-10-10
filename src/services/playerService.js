import axios from 'axios';

const API_URL = 'http://localhost:8080/api/player';

// Fetch all players
export const fetchPlayers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};

// Fetch player by ID
export const fetchPlayerById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching player with ID ${id}:`, error);
    throw error;
  }
};

// Add a new player
export const addPlayer = async (playerData) => {
  try {
    const response = await axios.post(API_URL, playerData);
    return response.data;
  } catch (error) {
    console.error('Error adding player:', error);
    throw error;
  }
};

// Update a player
export const updatePlayer = async (id, playerData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, playerData);
    return response.data;
  } catch (error) {
    console.error(`Error updating player with ID ${id}:`, error);
    throw error;
  }
};

// Delete a player
export const deletePlayer = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting player with ID ${id}:`, error);
    throw error;
  }
};
