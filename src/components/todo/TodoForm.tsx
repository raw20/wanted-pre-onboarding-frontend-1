import useInputs from '@/lib/hooks/useInputs';
import { useState } from 'react';
import { createTodo } from '@/api/todo';

const TodoForm = ({ getTodos }: { getTodos: () => void }) => {
  const [todoData, onChangeTodoData, setTodoData] = useInputs({ todo: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const onCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    createTodo(todoData)
      .then(() => {
        getTodos();
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
      })
      .finally(() => {
        setIsProcessing(false);
        setTodoData({ todo: '' });
      });
  };

  return (
    <form onSubmit={onCreate}>
      <label htmlFor="todo">
        할 일 추가하기
        <input
          data-testid="new-todo-input"
          id="todo"
          name="todo"
          type="text"
          value={todoData.todo}
          onChange={onChangeTodoData}
          disabled={isProcessing}
        />
      </label>
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
};

export default TodoForm;
