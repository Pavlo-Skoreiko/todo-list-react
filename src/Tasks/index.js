import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li key={task.id}
        className={`tasks__saction 
           ${task.done && hideDone ? "tasks__hideShowDoneTask" : ""}`}
        >
        <button className="tasks__button tasks__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`tasks__taskName 
            ${task.done ? " tasks__taskName--done" : ""}`}
        >
          {task.content}
        </span>
        <button className="tasks__button">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
