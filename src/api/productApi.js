import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("API Error while fetching products:", error);
    throw error;
  }
};
