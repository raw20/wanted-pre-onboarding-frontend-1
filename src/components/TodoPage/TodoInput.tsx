import { postCreateTodo } from '@/api/todo';
import { IPropsTodoInput } from '@/interface/IProps';
import useInputs from '@/lib/hooks/useInputs';
import React, { useState } from 'react';

const TodoInput = ({
  todos,
  setTodos,
  isProcessing,
  setIsProcessing,
}: IPropsTodoInput) => {
  const [todoUpdata, onChangeInputTodo] = useInputs({
    todo: '',
  });
  const [feedbackMessage, setFeedbackMessage] = useState(' ');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isProcessing) {
      setIsProcessing(true);

      postCreateTodo(todoUpdata)
        .then((res) => {
          setFeedbackMessage(res.statusText);
          setTodos([...todos, res.data]);
          setIsProcessing(false);
        })
        .catch((err) => {
          setFeedbackMessage(err.response.data.log || err.log);
        });
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할일을 입력해주세요"
          name="todo"
          value={todoUpdata.todo}
          onChange={onChangeInputTodo}
          data-testid="new-todo-input"
        />
        {feedbackMessage && <div>{feedbackMessage}</div>}
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
