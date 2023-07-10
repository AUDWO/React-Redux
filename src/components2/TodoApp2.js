import { useState } from "react";

const TodoApp2 = () => {
  const { todoItems, addTodo, removeTodo, removeAll } = props;
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h3>오늘 할 일</h3>
      <ul>
        {todoItems.map((todoItem, index) => {
          return <li key={index}>{todoItem}</li>;
        })}
      </ul>
      <div>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button
          onClick={() => {
            addTodo(newTodo);
            setNewTodo("");
          }}
        >
          {" "}
          할 일 추가
        </button>
        <button onClick={removeTodo}>할 일 삭제</button>
        <button onClick={removeAll}>할 일 모두 삭제</button>
      </div>
    </div>
  );
};

export default TodoApp2;
