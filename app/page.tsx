import * as actions from "./_actions";

// type Task = {
//   id: string;
//   title: string;
// };

export default async function Home() {

  const data = await actions.getData();
  // const ref = useRef<HTMLFormElement>(null);

  return (
    <div className=" w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">3 Streets</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">List Maker</h1>
      <div className="flex justify-center flex-col items-center">
        <div>
          <form action={actions.createTask} className="space-x-2">
            <input type="text" name="title" className="border-2 px-3 py-1 rounded " />
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 mt-3 rounded">Add Task</button>
          </form>
        </div>

        <div className="flex flex-col gap-5  mt-10">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <p className=" mx-auto  text-center">
                {todo.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
