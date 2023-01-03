import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
<ul className="tasks__section">
    {tasks.map(task => (
        <li
        className={`tasks 
        ${task.done && hideDoneTasks 
            ? "tasks__hideShowDoneTask" 
            : ""}`
            }
        > 
          <button className="tasks__button tasks__button--done">
               {task.done ? "✔" : ""}
          </button>
          <span className= {`tasks__taskName 
               ${task.done ? " tasks__taskName--done" : ""}`
            }>
               {task.content}
          </span>
          <button className="tasks__button">
          🗑
          </button>
        </li>
    ))}
</ul>
);

export default Tasks;
