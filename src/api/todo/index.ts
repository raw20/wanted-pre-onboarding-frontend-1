import apiClient from '../apiClient';
import { TodosParams } from './param';

export const postCreateTodo = async ({ todo }: TodosParams) => {
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
