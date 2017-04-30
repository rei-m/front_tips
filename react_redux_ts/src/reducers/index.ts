import { combineReducers, Reducer } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export type GlobalState = {
  todos: Todo[];
  visibilityFilter: string;
};

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const todoApp: Reducer<GlobalState> = combineReducers<GlobalState>({
  todos,
  visibilityFilter
});

export default todoApp;
