import { ITodo } from '@/interface/todo';
import React from 'react';

const TodoItem = ({ todo }: { todo: ITodo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isCompleted} />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
