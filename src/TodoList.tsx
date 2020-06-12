import React, { useEffect } from "react";

import { TodoItem } from "./types/TodoItem";

type Props = {
  items: Array<TodoItem>;
  addItem: (item: TodoItem) => void;
};

export function TodoList(props: Props) {
  let { items, addItem } = props;
  let [newItemName, setNewItemName] = React.useState("");

  useEffect(() => {
    addItem({ id: Date.now().toString(), name: "Do Laundry", isDone: false });
  }, []);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        addItem({
          id: Date.now().toString(),
          name: newItemName,
          isDone: false
        });
        setNewItemName("");
      }}
    >
      <ul>
        {items.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItemName}
        onChange={event => setNewItemName(event.target.value)}
      />
    </form>
  );
}
