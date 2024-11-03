import { useQuery } from "@tanstack/react-query";
import { POST_URL } from "../url";
import { queryKeys } from "../queryKeys";
import axios from "axios";
import { PostsResponse } from "../types/posts";

export const useGetPostsQuery = () => {
  const fetchPosts = async () => {
    const response = await axios.get(POST_URL.getPosts());
    return response.data as PostsResponse;
  };

  return useQuery({
    queryKey: queryKeys.postKeys.getPosts(),
    // queryFn: () => fetch(POST_URL.getPosts()).then((res) => res.json()),
    queryFn: () => fetchPosts(),
  });
};
