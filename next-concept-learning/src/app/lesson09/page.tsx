"use client";
import React, { useActionState } from 'react'
import { searchProducts } from './_lib/action';

const Page = () => {
  const [products, formAction] = useActionState(searchProducts, []);
  return (
    <>
      <form action={formAction}>
        <label htmlFor="query">Search Product：</label>
        <input type="text" name="query" id="query" className='ml-1' />
        <button>Submit</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Page