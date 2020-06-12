import React, { useState } from "react";
import "./styles.css";

import { TodoList } from "./TodoList";
import { TodoItem } from "./types/TodoItem";

export default function App() {
  let [items, setItems] = useState<Array<TodoItem>>([]);
  return (
    <TodoList
      items={items}
      addItem={(item: TodoItem) => setItems([...items, item])}
    />
  );
}
