import { connect } from "react-redux";
/*
import {
  addTodoActionCreator,
  removeTodoActionCreator,
  removeAllActionCreator,
} from "../actions";*/

/*
import {
  addTodoActionCreator,
  removeTodoActionCreator,
  removeAllActionCreator,
} from "../ducks/todoDuck";*/

import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
  addTodo,
} from "../actions/todoAction";
import addTodoThunkActionCreator from "../thunks/addTodoThunk";
import TodoApp from "../../components/TodoApp";

function mapStateToProps(state, ownProps) {
  return {
    todoItems: state.todo,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      //dispatch(addTodoActionCreator(text));
      dispatch(addTodoThunkActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
    triggerAsyncFunction: (asyncFunction) => {
      dispatch(asyncFunction);
    },
  };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
