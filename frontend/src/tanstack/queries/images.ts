import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetImageQuery = (imageUrl: string) => {
  const fetchImage = async (imageUrl: string) => {
    const response = await axios.get(imageUrl, { responseType: "blob" });
    const blob = response.data;
    const base64 = URL.createObjectURL(blob);
    return base64;
  };

  return useQuery({
    queryKey: ["imgCache", imageUrl],
    // queryFn: () =>
    //   fetch(`${imageUrl}`).then(async (res) => {
    //     const blob = await res.blob();

    //     const base64 = URL.createObjectURL(blob);

    //     return base64;
    //   }),
    queryFn: () => fetchImage(imageUrl),
    enabled: !!imageUrl,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};
