import { TodoPagePresentation } from "./_components/TodoPagePresentaision";

export type Todo = {
  id: string;
  todo: string;
  title: string;
};

const Page = async () => {
  const res = await fetch("https://dummyjson.com/todos/random", {
    next: { revalidate: 0 },
  });
  const todo = (await res.json()) as Todo;
  return <TodoPagePresentation todo={todo} />;
};

export default Page;
