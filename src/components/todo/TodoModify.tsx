import { updateTodo } from '@/api/todo';
import useInputs from '@/lib/hooks/useInputs';
import { ITodoModify } from '@/pages/TodoPage/types';
import React, { FormEvent } from 'react';

const TodoModify = ({ todo, getTodos, setIsModify, submitFn }: ITodoModify) => {
  const [newTodoData, onChangeTodoData] = useInputs({ todo: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFn(newTodoData.todo);
  };

  const onUpdate = () => {
    setIsModify(false);
    updateTodo({
      id: todo.id,
      todo: newTodoData.todo,
      isCompleted: todo.isCompleted,
    })
      .then(() => getTodos())
      .catch((err) => alert(err.response.data.log || err.log));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="todo"
          name="todo"
          type="text"
          value={newTodoData.todo}
          placeholder={todo.todo}
          data-testid="modify-input"
          onChange={onChangeTodoData}
        />
        <button onClick={onUpdate} data-testid="submit-button">
          제출
        </button>
        <button data-testid="cancel-button" onClick={() => setIsModify(false)}>
          취소
        </button>
      </form>
    </div>
  );
};

export default TodoModify;
