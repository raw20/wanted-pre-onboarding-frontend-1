import { createTodoType } from '@/api/todo/types';

export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface ITodoForm {
  submitFn: (todo: createTodoType) => void;
}

export interface ITodoItem {
  submitFn: (todo: createTodoType) => void;
  getTodos: () => void;
  todo: ITodo;
}

export interface ITodoModify extends ITodoItem {
  setIsModify: React.Dispatch<React.SetStateAction<boolean>>;
}
