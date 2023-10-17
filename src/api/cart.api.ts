import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const fetchProducts = async () => {
  const response = await axios.get(
    "https://my-json-server.typicode.com/benirvingplt/products/products"
  );
  return response.data;
};

export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};
