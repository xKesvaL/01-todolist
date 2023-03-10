export interface Todo {
  id: string;
  text: string;
  date: Date;
}

export interface TodoFormInterface {
  addTodo: (text: string) => void;
}

export interface TodoListInterface {
  todos: Todo[];
  deleteTodo: (id: string) => void;
}

export interface TodoAddInterface {
  addTodo: (text: string) => void;
}

export interface SvgItem {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}
