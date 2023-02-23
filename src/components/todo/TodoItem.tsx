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

  const onCheckTodo = (selectedTodo: ITodo) => {
    updateTodo({
      todo: selectedTodo.todo,
      isCompleted: !selectedTodo.isCompleted,
      id: selectedTodo.id,
    }).then((_) => {
      getTodos();
    });
  };

  return (
    <li>
      {isUpdate ? (
        <TodoEditor
          todo={todo}
          getTodos={getTodos}
          setIsUpdate={setIsUpdate}
          onCheckTodo={onCheckTodo}
        />
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onCheckTodo(todo)}
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
