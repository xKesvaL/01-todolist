import TodoList from "@/components/TodoList";
import TodoAdd from "@/components/TodoAdd";

import Head from "next/head";
import Hamburger from "@/lib/svg/Hamburger";
import Todos from "@/lib/handlers/Todos";
import { useEffect } from "react";

export default function Home() {

  const { todos, addTodo, deleteTodo, setTodos } = Todos();

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, [setTodos]);
  return (
    <>
      <Head>
        <title>01 - Todo List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <button>
          <Hamburger />
        </button>
        <h1>Todo List</h1>
        <div></div>
      </header>
      <main>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <TodoAdd addTodo={addTodo} />
      </main>
    </>
  );
}
