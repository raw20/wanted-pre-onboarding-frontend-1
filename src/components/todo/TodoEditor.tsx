import { updateTodo } from '@/api/todo';
import useInputs from '@/lib/hooks/useInputs';
import { ITodo } from '@/pages/TodoPage/types';
import { useState } from 'react';

const TodoEditor = ({
  todo,
  getTodos,
  setIsUpdate,
}: {
  todo: ITodo;
  getTodos: () => void;
  setIsUpdate: (isUpdate: boolean) => void;
}) => {
  const [todoEdit, onChangeTodoEdit] = useInputs(todo);
  const [isProcessing, setIsProcessing] = useState(false);

  const onUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    const { todo, isCompleted, id } = todoEdit;
    updateTodo({ todo, isCompleted, id })
      .then((_) => {
        getTodos();
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
      })
      .finally(() => {
        setIsProcessing(false);
        setIsUpdate(false);
      });
  };

  return (
    <form onSubmit={onUpdate}>
      <label>
        <input type="checkbox" checked={todo.isCompleted} readOnly />
        <input
          data-testid="modify-input"
          name="todo"
          value={todoEdit.todo}
          onChange={onChangeTodoEdit}
          disabled={isProcessing}
        />
      </label>
      <div role="group">
        <button type="submit" data-testid="submit-button">
          제출
        </button>
        <button
          type="button"
          data-testid="cancel-button"
          onClick={() => setIsUpdate(false)}
        >
          취소
        </button>
      </div>
    </form>
  );
};

export default TodoEditor;
