import { useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";
import { Header } from ".";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/todo/todoSlice";
import { RootState } from "../app/store";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo.todoList);

  const [newTodoTitle, setNewTodoTitle] = useState("");
  useEffect(() => {
    console.log("TodoList HAZER");
    return () => {
      console.log("TodoList QAYEB");
    };
  }, []);

  return (
    <>
      <Header title="Todo List"></Header>
      <button onClick={() => dispatch(add(newTodoTitle))}>➕</button>
      <button
        onClick={() => dispatch({ type: "todo/add", payload: newTodoTitle })}
      >
        ➕➕
      </button>
      <input
        value={newTodoTitle}
        type="text"
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <div className="title">TODO LIST</div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>done</th>
            <th>id</th>
            <th>title</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item) => (
            <TodoItem key={item.id} todo={item}></TodoItem>
          ))}
        </tbody>
      </table>
    </>
  );
}
