import React, { useState } from "react";

import { MdDelete, MdCheck } from "react-icons/md";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (!inputValue) return; // preventing empty input from being added to the list
    if (tasks.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTasks((prev) =>  ([...prev, inputValue]));
    setInputValue("");
  };
  return (
    <>
      <section className="flex flex-col gap-5 text-center">
        <header>
          <h1 className=" text-4xl font-bold">Todo List</h1>
        </header>
        <div className="flex flex-col gap-5">
          <form className="flex ">
            <div>
              <input
                type="text"
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className=" h-10 rounded-tl-lg rounded-bl-lg w-[15rem] outline-none text-black px-2 "
              />
            </div>
            <div className="bg-blue-600 flex items-center justify-center h-10 w-[5rem] rounded-tr-lg rounded-br-lg ">
              <button type="submit" onClick={handleSubmitButton}>
                Add Task
              </button>
            </div>
          </form>
          <div>
            <ul className="flex gap-5 flex-col ">
              {tasks.map((task, index) => (
                <li key={index} className="bg-slate-800   rounded-md text-xl capitalize py-2 flex justify-around px-4 truncate
                 ">
                  <span>{task}</span>
                  <div className="flex gap-5">

                  <button>
                    <MdCheck fill="green" />
                  </button>
                  <button>
                    <MdDelete fill="blue" />
                  </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;
