import { updateTodo } from '@/api/todo';
import useInputs from '@/lib/hooks/useInputs';
import { ITodo } from '@/pages/TodoPage/types';

const TodoEditor = ({
  todo,
  getTodos,
  setIsUpdate,
  onCheckTodo,
}: {
  todo: ITodo;
  getTodos: () => void;
  setIsUpdate: (isUpdate: boolean) => void;
  onCheckTodo: (selectedTodo: ITodo) => void;
}) => {
  const [todoEdit, onChangeTodoEdit] = useInputs(todo);

  const onUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUpdate(false);

    const { todo, isCompleted, id } = todoEdit;
    updateTodo({ todo, isCompleted, id }).then((_) => {
      getTodos();
    });
  };

  return (
    <form onSubmit={onUpdate}>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onCheckTodo(todo)}
        />
        <input
          data-testid="modify-input"
          name="todo"
          value={todoEdit.todo}
          onChange={onChangeTodoEdit}
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
