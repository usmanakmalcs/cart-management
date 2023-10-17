import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get(
    "https://my-json-server.typicode.com/benirvingplt/products/products"
  );
  return response.data;
};
