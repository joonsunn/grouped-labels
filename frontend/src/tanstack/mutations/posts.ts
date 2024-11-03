import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../QueryClient";
import { queryKeys } from "../queryKeys";
import { POST_URL } from "../url";

export const useUpdatePostMutation = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await axios.put(POST_URL.updatePost(id));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.postKeys.getPosts(),
      });
    },
  });
};

export const useDeletePostMutation = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await axios.delete(POST_URL.getPost(id));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.postKeys.getPosts(),
      });
    },
  });
};
