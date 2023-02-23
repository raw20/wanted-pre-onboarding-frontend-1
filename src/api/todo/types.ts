export interface createTodoType {
  todo: string;
}
export interface updateTodoType extends createTodoType {
  id: number;
  isCompleted: boolean;
}
