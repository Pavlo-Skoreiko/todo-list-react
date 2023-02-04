import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  // const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button onClick={() => dispatch(setAllDone())} 
            disabled={isEveryTaskDone}>
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  );
}

export default Buttons;
