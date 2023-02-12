import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useRef } from "react";
import { Container } from "../../../common/Container/styled";
import { useDispatch, useSelector } from "react-redux";
import Button from "../TasksPage/Button";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";
import Search from "./Search";

function TasksPage() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={
          <Button
            disabled={loading}
            onClick={() => dispatch(fetchExampleTasks())}
          >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
          </Button>
        }
        body={<Form inputRef={inputRef} focusInput={focusInput} />}
      />
      <Section title="Wyszukiwarka zadań" body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
