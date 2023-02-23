import { getTodos } from '@/api/todo';
import TodoInput from '@/components/TodoPage/TodoInput';
import Todos from '@/components/TodoPage/Todos';
import { Todo } from '@/interface/todo.interface';
import { useState, useEffect } from 'react';

const TodoPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [todosErrorMessage, setTodosErrorMessage] = useState(' ');
  const [todos, setTodos] = useState<Todo[]>([]);

  const TodoInputProps = {
    todos: todos,
    setTodos: setTodos,
    isProcessing: isProcessing,
    setIsProcessing: setIsProcessing,
  };

  useEffect(() => {
    if (!isProcessing) {
      setIsProcessing(true);

      getTodos()
        .then((res) => {
          setTodos(res.data);
          setIsProcessing(false);
        })
        .catch((err) => {
          setTodosErrorMessage(err.response.data.log || err.log);
        });
    }
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <TodoInput {...TodoInputProps} />
      {todosErrorMessage === ' ' && <Todos todos={todos} />}
    </div>
  );
};

export default TodoPage;
