import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './queryKeys';
import { USERS_URL } from './url';

export const useGetAllUsersQuery = () => {
  const fetchUsers = async () => {
    const response = await axios.get(USERS_URL.getAllUsers(), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  };

  return useQuery({
    queryKey: queryKeys.usersKeys.getAllUsers(),
    queryFn: () => fetchUsers(),
    staleTime: 5 * 60 * 1000, // 5 minutes (Adjust this as needed)
    placeholderData: (prev) => prev, // Use previous data while fetching new data
  });
};
