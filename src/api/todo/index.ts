import apiClient from '@/api/apiClient';
import {
  createTodoType,
  deleteTodoType,
  updateTodoType,
} from '@/api/todo/types';

export const createTodo = async (todo: createTodoType) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};
export const getTodos = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const updateTodo = async ({ todo, isCompleted }: updateTodoType) => {
  return await apiClient({
    method: 'put',
    url: '/todos',
    data: {
      todo,
      isCompleted,
    },
  });
};
export const deleteTodo = async (id: deleteTodoType) => {
  return await apiClient({
    method: 'delete',
    url: `/todos/${id}`,
  });
};
