import { useQuery } from "@tanstack/react-query";
import { PRODUCTS_URL } from "../url";
import { queryKeys } from "../queryKeys";
import axios from "axios";
import { GetProductsApiResponse } from "@/tanstack/types/products";

type GetProductsParams = {
  limit: number;
  skip: number;
  sortBy?: string;
  order?: string;
};

export const useGetAllProductsQuery = ({
  limit,
  skip,
  sortBy,
  order,
}: GetProductsParams) => {
  const fetchProducts = async (params: GetProductsParams) => {
    const response = await axios.get(PRODUCTS_URL.getAllProducts(), {
      params,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data as GetProductsApiResponse;
  };

  return useQuery<GetProductsApiResponse, any>({
    queryKey: queryKeys.productKeys.getProducts(skip, limit, sortBy, order),
    queryFn: () => fetchProducts({ limit, skip, sortBy, order }),
    staleTime: 5 * 60 * 1000, // 5 minutes (Adjust this as needed)
    placeholderData: (prev) => prev, // Use previous data while fetching new data
  });
};
