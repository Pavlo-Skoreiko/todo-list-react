import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { Field, Input, Button } from "./styled"


const Form = ({ focusInput, inputRef}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask({
      content: newTaskContent.trim(),
      done: false,
      id: nanoid(),
    }));
    
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
      <Button onClick={focusInput} >Dodaj zadanie</Button>
    </Field>
  );
};

export default Form;
