import React from "react";

type ProductTitleProps = {
  id: string;
};

export async function ProductTitle({ id }: ProductTitleProps) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  const product = await res.json();
  return <div>{product.title}</div>;
}
