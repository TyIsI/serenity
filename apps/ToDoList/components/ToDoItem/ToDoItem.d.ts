import ToDo from '../../classes/ToDo.class'

export interface ToDoItemProps {
  todo: ToDo;
  onRemove: (id: number) => void;
  onUpdate: (todo: ToDo) => void;
}

export interface ToDoItemState {
    editing: boolean;
    text: string;
    todo: ToDo;
}
