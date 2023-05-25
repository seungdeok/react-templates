import { API_PATH } from '@/constants/api';
import { UserService } from '@/services/UserService';
import { useQuery } from 'react-query';

type Filter = 'all' | 'open' | 'done';

export const useCustomQuery = (filter: Filter) => {
  return useQuery([API_PATH.BASE, filter], () => UserService.get());
};
