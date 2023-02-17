import Link from "next/link";
import React from "react";

const todos = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=20"
  );
  const todo_list = await res.json();
  //   console.log(todo_list);
  return todo_list;
};

const page = async () => {
  const todo = await todos();
  return (
    <div className="px-[20px] flex flex-col">
      {todo.map((elem) => {
        return (
          <Link href={`/todoId/${elem.id}`} className="block" key={elem.id}>
            todo : {elem.id}
          </Link>
        );
      })}
    </div>
  );
};

export default page;
