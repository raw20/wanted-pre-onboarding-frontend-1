export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface ITodoForm {
  submitFn: (todo: string) => void;
}
