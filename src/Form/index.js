import { useState } from "react";
import { Field, Input, Button } from "./styled"


const Form = ({addNewTask, focusInrut, inputRef}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <Field onSubmit={onFormSubmit} >
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInrut} >Dodaj zadanie</Button>
    </Field>
  );
};

export default Form;
