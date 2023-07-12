import { useState } from "react";

const TodoApp = (props) => {
  const { todoItems, addTodo, removeTodo, removeAll, triggerAsyncFunction } =
    props;
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <h3>오늘 할 일</h3>$
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
          할 일 추가
        </button>
        <button onClick={removeTodo}>할 일 삭제</button>
        <button onClick={removeAll}>모두 삭제</button>
      </div>
      <button
        onClick={() => {
          triggerAsyncFunction((dispatch, getState) => {
            console.log("비동기 함수 실행", getState());

            new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            })
              .then(() => {
                console.log("비동기 함수 성공", getState());
              })
              .finally(() => {
                console.log("비동기 함수 종료", getState());
              });
          });
        }}
      >
        비동기 함수 테스트
      </button>
    </div>
  );
};

export default TodoApp;
