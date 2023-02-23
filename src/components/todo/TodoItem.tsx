import { deleteTodo, updateTodo } from '@/api/todo';
import { ITodoItem } from '@/pages/TodoPage/types';
import React, { useState } from 'react';
import TodoModify from './TodoModify';

const TodoItem = ({ submitFn, todo, getTodos }: ITodoItem) => {
  const [isComplete, setIsComplete] = useState(todo.isCompleted);
  const [isModify, setIsModify] = useState(false);

  const onDelete = (id: number) => {
    deleteTodo(id)
      .then(() => getTodos())
      .catch((err) => alert(err.response.data.log || err.log));
  };
  // eslint-disable-next-line no-shadow
  const onCheck = (todo: string, id: number) => {
    updateTodo({ id, todo, isCompleted: !isComplete })
      .then(() => getTodos())
      .catch((err) => alert(err.response.data.log || err.log));
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={() => setIsComplete((curr) => !curr)}
          onClick={() => onCheck(todo.todo, todo.id)}
        />
        {isModify ? (
          <TodoModify
            todo={todo}
            getTodos={getTodos}
            setIsModify={setIsModify}
            submitFn={submitFn}
          />
        ) : (
          <span
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none',
            }}
          >
            {todo.todo}
          </span>
        )}
      </label>
      {!isModify && (
        <button
          data-testid="modify-button"
          onClick={() => {
            setIsModify(true);
          }}
        >
          수정
        </button>
      )}
      {!isModify && (
        <button data-testid="delete-button" onClick={() => onDelete(todo.id)}>
          삭제
        </button>
      )}
    </li>
  );
};

export default TodoItem;
