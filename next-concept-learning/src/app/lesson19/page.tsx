"use client";

import { createTodo } from "./_lib/actions";

const Page = () => {
  return (
    <form action={createTodo}>
        <input type="text" name="query" id="query" />
        <button>Create Todo</button>
    </form>
  )
}

export default Page