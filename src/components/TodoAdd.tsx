import Close from "@/lib/svg/Close";
import { TodoAddInterface } from "@/typings";
import { useState } from "react";

export default function TodoAddButton({ addTodo }: TodoAddInterface) {
  const [isVisible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <>
      <button
        className="todo-add-button"
        onClick={() => {
          if (isVisible) {
            return;
          }
          setVisible(!isVisible);
        }}
      >
        +
      </button>
      <div className={"todo-add-interface " + (isVisible ? "" : "hidden")}>
        <button
          className="todo-add-interface-close"
          onClick={() => {
            if (!isVisible) {
              return;
            }
            setVisible(!isVisible);
          }}
        >
          <Close />
        </button>
        <form onSubmit={handleSubmit} className="todo-form">
          <textarea
            name=""
            id=""
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your ToDo here..."
          ></textarea>
          <button
            type="submit"
            onClick={() => {
              if (!isVisible) {
                return;
              }
              setVisible(!isVisible);
            }}
          >
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
}
