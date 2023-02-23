export interface createTodoType {
  todo: string;
}
export interface updateTodoType extends createTodoType {
  isCompleted: boolean;
}
export interface deleteTodoType {
  id: number;
}
