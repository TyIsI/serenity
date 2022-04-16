import ToDo from './classes/ToDo.class'

export interface TodoProps { }

export interface TodoState {
  todolist: ToDo[];
  newTodoText: string;
}
