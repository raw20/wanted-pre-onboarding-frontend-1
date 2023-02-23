import { updateTodo } from '@/api/todo';
import { ITodo } from '@/pages/TodoPage/types';
import { useState } from 'react';
import TodoEditor from './TodoEditor';

const TodoItem = ({
  todo,
  getTodos,
}: {
  todo: ITodo;
  getTodos: () => void;
}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const onCheckTodo = (selectedTodo: ITodo) => {
    const { todo, isCompleted, id } = selectedTodo;
    setIsProcessing(true);
    updateTodo({
      todo,
      isCompleted: !isCompleted,
      id,
    })
      .then((_) => {
        getTodos();
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <li>
      {isUpdate ? (
        <TodoEditor todo={todo} getTodos={getTodos} setIsUpdate={setIsUpdate} />
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onCheckTodo(todo)}
              disabled={isProcessing}
            />
            <span>{todo.todo}</span>
          </label>
          <div role="group">
            <button
              type="button"
              data-testid="modify-button"
              onClick={() => setIsUpdate(true)}
            >
              수정
            </button>
            <button type="button" data-testid="delete-button">
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
