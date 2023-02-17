import React from "react";
const fetchData = async (todo) => {
  const res = await (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`, {
      cache: "no-cache",
    })
  ).json();
  return res;
};

const page = async ({ params: { todo } }) => {
  const data = await fetchData(todo);
  return (
    <div>
      <h1>{todo}</h1>
      <p>task: {data.title}</p>
    </div>
  );
};

export default page;
