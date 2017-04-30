import { Action } from 'redux'

let nextTodoId: number = 0;

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */
export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export interface SetVisibilityFilterAction extends Action {
  type: string;
  filter: string;
}

export interface AddTodoAction extends Action {
  type: string;
  id: number;
  text: string;
}

export interface ToggleTodoAction extends Action {
  type: string;
  id: number;
}

/*
 * action creators
 */
export function addTodo(text: string): AddTodoAction {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: text
  }
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TOGGLE_TODO,
    id: id
  }
}

export function setVisibilityFilter(filter: string): SetVisibilityFilterAction {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}
