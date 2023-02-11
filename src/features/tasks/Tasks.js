import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useRef } from "react";
import { Container } from "../../common/Container/styled";
import { useDispatch } from "react-redux";
import { Button } from "./Buttons/styled";
import { fetchExampleTasks } from "./tasksSlice";

function Tasks() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={
          <Button onClick={() => dispatch(fetchExampleTasks())}
           >
            Pobierz przykładowe zadania
          </Button>
        }
        body={<Form inputRef={inputRef} focusInput={focusInput} />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
