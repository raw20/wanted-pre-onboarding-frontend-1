import { IPropsTodos } from '@/interface/IProps';
import React from 'react';

const Todos = ({ todos }: IPropsTodos) => {
  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" />
              <span>{todo.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button">삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
