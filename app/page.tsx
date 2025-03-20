"use server"

import { addTask, getTasks } from "./_actions/auth";

type Task = {
  id: string;
  title: string;
};

export default async function Home() {

  const tasks = getTasks()


  return <div className="bg-zinc-200 flex min-h-screen flex-col items-center pt-10">
    <h1 className="text-3xl font-medium">All Tasks: </h1>
    <ul>
      {(await tasks).map((task: Task) => (<li key={task.id}>{task.title}</li>))}
    </ul>

    <form action={addTask} className="space-x-2">
      <input type="text" name="title" className="px-3 py-1 rounded " />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 mt-3 rounded">Add Task</button>
    </form>

  </div>;
}
