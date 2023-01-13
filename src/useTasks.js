import { useEffect, useState, useRef } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (content) => {
    if (content !== "")
      setTasks((tasks) => [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        },
      ]);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const inputRef = useRef(null);

  const focusInrut = () => {
    inputRef.current.focus();
  };

  return {
    tasks,
    addNewTask,
    removeTask,
    setAllDone,
    toggleTaskDone,
    inputRef,
    focusInrut,
  };
};

export default useTasks;
