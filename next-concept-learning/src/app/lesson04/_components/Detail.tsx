import { products } from "../_lib/fetcher/products";

const Detail = async () => {
  const res = await products();
  return <div>{res.title}</div>;
};

export default Detail;
