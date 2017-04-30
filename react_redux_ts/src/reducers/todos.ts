import { Todo } from '../reducers/index';
import { AddTodoAction, ToggleTodoAction, ADD_TODO, TOGGLE_TODO } from '../actions';

const todo = (state: Todo, action: AddTodoAction & ToggleTodoAction): Todo => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

const todos = (state: Todo[] = [], action: AddTodoAction & ToggleTodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo({
          id: action.id,
          text: action.text,
          completed: false
        }, action)
      ];
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;
