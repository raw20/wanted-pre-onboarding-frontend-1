import { getTodo } from '@/api/todo';
import TodoItem from '@/components/todo/TodoItem';
import { ITodo } from '@/interface/todo';
import { useCallback, useEffect, useState } from 'react';

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = useCallback(() => {
    getTodo()
      .then((res) => setTodos(res.data))
      .catch((err) => alert(err.response.data.log || err.log));
  }, []);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoPage;
