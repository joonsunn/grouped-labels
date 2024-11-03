import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from './queryKeys';
import { LABELS_URL, USERS_URL } from './url';

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

export const useGetUserByIdQuery = (id: string) => {
  const fetchUser = async () => {
    const response = await axios.get(USERS_URL.getUserById(id));
    return response.data;
  };

  return useQuery({
    queryKey: queryKeys.usersKeys.getUserById(id),
    queryFn: () => fetchUser(),
  });
};

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(USERS_URL.createUser(), data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.usersKeys.getAllUsers(),
      });
    },
  });
};

export const useUpdateUserMutation = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.patch(USERS_URL.updateUser(userId), data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.usersKeys.getAllUsers(),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.usersKeys.getUserById(userId),
      });
    },
  });
};

export const useGetAllLabelGroupsQuery = () => {
  const fetchLabelGroups = async () => {
    const response = await axios.get(LABELS_URL.getAllLabelGroups());
    return response.data;
  };

  return useQuery({
    queryKey: queryKeys.labelsKeys.getAllLabelGroups(),
    queryFn: () => fetchLabelGroups(),
  });
};
