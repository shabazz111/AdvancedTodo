import React, { useState } from "react";
import UpperHead from "../components/UpperHead";
import BottomSection from "../components/BottomSection";

const Home = () => {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodo = (todo) => {
    if (!todo) {
      return alert("Please enter valid data");
    }
    const newData = [...todoData, todo];
    setTodoData((prev) => [...prev, todo]);
    localStorage.setItem("todos", JSON.stringify(newData));
  };

  const onChangeCrossHandler = (id) => {
    const newTodoData = todoData.map((todo) => {
      if (todo.Id === id) {
        return { ...todo, isCross: !todo.isCross };
      }
      return todo;
    });
    setTodoData(newTodoData);
    localStorage.setItem("todos", JSON.stringify(newTodoData));
  };

  const onDeleteHandler = (id) => {
    const action = confirm("Do you really wanna delete this todo?");
    if (!action) {
      return;
    }

    const newTodoData = todoData.filter((todo) => todo.Id !== id);
    setTodoData(newTodoData);
    localStorage.setItem("todos", JSON.stringify(newTodoData));
  };

  const onSearchHandler = (term) => {
    if (term.length === 0) {
      const data = JSON.parse(localStorage.getItem("todos"));
      setTodoData(() => [...data]);
    } else {
      const newTodoData = todoData.filter((todo) => todo.title.includes(term));
      setTodoData(newTodoData);
    }
  };
  
  return (
    <section className="w-full min-h-screen overflow-y-auto bg-gray-100 flex flex-col items-center h-fit ">
      <span className="mt-5 text-2xl font-medium text-gray-600 underline">
        Sh-Todo-Builder
      </span>
      <UpperHead addTodo={addTodo} />
      <BottomSection
        onChangeCrossHandler={onChangeCrossHandler}
        todoData={todoData}
        onDeleteHandler={onDeleteHandler}
        onSearchHandler={onSearchHandler}
      />
    </section>
  );
};

export default Home;
