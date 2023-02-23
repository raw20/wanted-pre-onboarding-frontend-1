import apiClient from '@/api/apiClient';
import { createTodoType } from '@/api/todo/types';

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
