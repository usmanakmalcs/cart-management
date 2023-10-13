import useFetch from "../../hooks/useFetch";

const ShoppingCart = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch(
    "https://my-json-server.typicode.com/benirvingplt/products/products"
  );

  console.log(products);

  return (
    <div>
      {loading && <p>{loading}</p>}
      {products && <p>{JSON.stringify(products)}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ShoppingCart;
