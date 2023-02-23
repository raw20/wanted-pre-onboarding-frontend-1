import apiClient from '@/api/apiClient';
import { createTodoType, updateTodoType } from '@/api/todo/types';

export const createTodo = async (todo: createTodoType) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};
export const getTodo = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const updateTodo = async ({ id, todo, isCompleted }: updateTodoType) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${id}`,

    data: {
      todo,
      isCompleted,
    },
  });
};
export const deleteTodo = async (id: number) => {
  return await apiClient({
    method: 'delete',
    url: `/todos/${id}`,
  });
};
