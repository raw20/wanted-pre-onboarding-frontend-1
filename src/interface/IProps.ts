import { Todo } from './todo.interface';

export interface IPropsTodos {
  todos: Todo[];
}

export interface IPropsTodoInput {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  isProcessing: boolean;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
}
