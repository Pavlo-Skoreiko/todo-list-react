import { useState } from "react";
import "./style.css";

const Form = ({addNewTask, focusInrut, inputRef}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button onClick={focusInrut} className="form__addButton">Dodaj zadanie</button>
    </form>
  );
};
export default Form;
