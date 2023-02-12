import { takeLatest, call, put, delay, select, takeEvery } from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasks, } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInlocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
      yield delay(2000);
      const exampleTasks = yield call(getExampleTasks);
      yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
      yield put(fetchExampleTasksError())
      yield call(alert, "Coś poszło nie tak przy pobieraniu przykładowych zadań");   
}
};

function* saveTasksInlocalStorageHandler() {
   const tasks = yield select(selectTasks);
   yield call(saveTasksInlocalStorage, tasks);
};

export function* tasksSaga() {
   yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
   yield takeEvery("*", saveTasksInlocalStorageHandler);
};
