import { products } from "../_lib/fetcher/products";

const Header = async () => {
  const res = await products();
  return <div className="border-b-2">{res.title}</div>;
};

export default Header;
