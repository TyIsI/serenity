export interface ToDoData {
    id: number
    text: any
}

export default class ToDo implements ToDoData {
  id: number
  text: any

  constructor (text: string) {
    this.id = Date.now()
    this.text = text
  }

  serialize () {
    return {
      id: this.id,
      text: this.text
    }
  }

  static unserialize (data: ToDoData) {
    const todo = new ToDo(data.text)
    todo.id = data.id

    return todo
  }
}
