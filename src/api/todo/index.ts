import apiClient from '@/api/apiClient';

export const getTodo = async () => {
  return await apiClient.get('todos');
};

export const createTodo = async (todo: string) => {
  return await apiClient.post('todos', { todo });
};
