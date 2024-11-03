const postKeys = {
  getPosts: () => ["posts"],
  getPost: (id: number) => ["posts", id],
};

const userKeys = {
  getUsers: () => ["users"],
  getUser: (id: number) => ["users", id],
};

const productKeys = {
  getProducts: (skip: number, limit: number, sortBy: string, order: string) => [
    "products",
    { skip, limit, sortBy, order },
  ],
  getProduct: (id: number) => ["products", id],
  getProductsByCategory: (category: string) => ["products", category],
  getProductCategories: () => ["products", "categories"],
  getProductsCategoryList: () => ["products", "categories", "list"],
  searchProducts: (query: string) => ["products", "search", query],
};

export const queryKeys = Object.assign(
  { postKeys },
  { userKeys },
  { productKeys }
);
