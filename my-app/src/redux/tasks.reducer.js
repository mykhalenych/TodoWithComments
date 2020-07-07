import { TASK_LIST_RECIVED, GET_TASK } from "./tasks.actions";

const initialState = {
  tasksList: [],
  selectedTask: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_LIST_RECIVED:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };
    case GET_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };
    default:
      return state;
  }
};


