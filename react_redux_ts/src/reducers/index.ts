import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export type GlobalState = {
  todos: Todo[];
  visibilityFilter: string;
}

export type Todo = {
  id: number;
  completed: boolean;
}

export default todoApp
