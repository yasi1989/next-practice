import { Todo } from "../page";

export function TodoPagePresentation({ todo }: { todo: Todo }) {
  return (
    <>
      <h1>{todo.title}</h1>
      <pre>
        <code>{JSON.stringify(todo, null, 2)}</code>
      </pre>
    </>
  );
}
