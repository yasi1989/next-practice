import { products } from "../_lib/fetcher/products";

const Footer = async () => {
  const res = await products();
  return <div className="border-t-2">{res.title}</div>;
};

export default Footer;
