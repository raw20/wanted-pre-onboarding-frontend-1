import apiClient from '@/api/apiClient';

export const getTodo = async () => {
  return await apiClient.get('todos');
};
