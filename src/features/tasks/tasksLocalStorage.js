const localStorageKey = "tasks";

export const saveTasksInlocalStorage = tasks => 
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || [];   