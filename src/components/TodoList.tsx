import CheckCirle from "@/lib/svg/CheckCircle";
import { Todo, TodoListInterface } from "@/typings";
export default function TodoList({ todos, deleteTodo }: TodoListInterface) {
  return (
    <ul className="todo-list">
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <button onClick={() => deleteTodo(todo.id)} aria-label="Delete ToDo">
            <CheckCirle width={24} height={24} />
          </button>
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}
