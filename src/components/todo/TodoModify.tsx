import React from 'react';

const TodoModify = () => {
  const onUpdate = (todos) => {
    updateTodo(todos, isComplete)
      .then(() => getTodos())
      .catch((err) => alert(err.response.data.log || err.log));
    console.log(todo);
  };
  return (
    <div>
      <input data-testid="modify-input" />
      <button data-testid="submit-button">제출</button>
      <button data-testid="cancel-button">취소</button>
    </div>
  );
};

export default TodoModify;
