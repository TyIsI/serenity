import ToDo from './classes/ToDo.class'

export interface ToDoListProps { }

export interface ToDoListState {
  todolist: ToDo[];
  newTodoText: string;
}
