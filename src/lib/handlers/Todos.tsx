import { Todo } from "@/typings";
import { useState } from "react";
import { v4 } from "uuid";

export default function Todos() {
  const [todos, setTodos] = useState([] as Todo[]);

  const addTodo = (text: string) => {
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    let id = v4();
    let idDuplicate = false;

    function checkForDuplicateId() {
      todos.forEach((todo: Todo) => {
        if (todo.id === id) {
          idDuplicate = true;
        } else {
          idDuplicate = false;
        }
      });
    }

    while (idDuplicate) {
      id = v4();
      checkForDuplicateId();
    }

    let newTodos = [...todos, { id, text, date: new Date() }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id: string) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return { todos, addTodo, deleteTodo, setTodos };
}
