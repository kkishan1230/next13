import React from "react";

const tasks = async (todo) => {
  const res = await (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`)
  ).json();
  return res;
};

const page = async ({ params: { todo } }) => {
  //   console.log(params);
  const dt = await tasks(todo);
  return <div className="p-[20px]">{dt.title}</div>;
};

export default page;
