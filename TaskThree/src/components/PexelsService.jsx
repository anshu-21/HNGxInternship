import axios from "axios";

const PEXELS_API_KEY =
  "xIbFbQMccbUht6tX7l5PWnV8SvQGnHSONyhy453L1jNQn0pUZUF7Zy3T";

export const fetchPexelsImages = async () => {
  try {
    const response = await axios.get(
      "https://api.pexels.com/v1/search?query=sports",
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error("Error fetching Pexels images:", error);
    throw error;
  }
};

export const fetchSearchResults = async (tag) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${tag}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error("Error fetching Pexels images:", error);
    throw error;
  }
};
