import { createActions, handleActions } from "redux-actions";

const initialState = {
  pending: false,
  data: [],
  error: null,
};

export const { fetchTodosRequested, fetchTodosSucceeded, fetchTodosFailed } =
  createActions({
    FETCH_TODOS_REQUESTED: () => ({}),
    FETCH_TODOS_SUCCEEDED: (data) => ({ data }),
    FETCH_TODOS_FAILED: (error) => ({ error }),
  });

const reducer = handleActions(
  {
    [fetchTodosRequested]: (state, action) => {
      return {
        ...state,
        pending: true,
        //data: [],
        error: null,
      };
    },

    [fetchTodosSucceeded]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: state.concat(action.payload.data),
      };
    },

    [fetchTodosFailed]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    },
  },
  initialState
);

export default reducer;
