import React from "react";
import Todo from "./Todo";

const TodoList = ({ data = [], onChangeCrossHandler, onDeleteHandler }) => {
  return (
    <div className="w-full mt-24 overflow-y-auto flex flex-col">
      {data &&
        data.map((todo) => (
          <Todo
            onDeleteHandler={onDeleteHandler}
            onChangeCrossHandler={onChangeCrossHandler}
            key={todo.Id}
            todo={todo}
          />
        ))}
    </div>
  );
};

export default TodoList;
