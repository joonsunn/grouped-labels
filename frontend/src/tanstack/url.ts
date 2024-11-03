export const POST_URL = {
  // getPosts: "https://jsonplaceholder.typicode.com/posts",
  getPosts: () => "https://dummyjson.com/posts",
  getPost: (id: number) => `https://dummyjson.com/posts/${id}`,
  searchPosts: (query: string) =>
    `https://dummyjson.com/posts/search?q=${query}`,
  updatePost: (id: number) => `https://dummyjson.com/posts/${id}`,
};

export const PRODUCTS_URL = {
  getAllProducts: () => "https://dummyjson.com/products",
  getProduct: (id: number) => `https://dummyjson.com/products/${id}`,
  updateProduct: (id: number) => `https://dummyjson.com/products/${id}`,
  deleteProduct: (id: number) => `https://dummyjson.com/products/${id}`,
  createProduct: () => "https://dummyjson.com/products/add",
  searchProducts: (query: string) =>
    `https://dummyjson.com/products/search?q=${query}`,
  getProductCategories: () => "https://dummyjson.com/products/categories",
  getProductsCategoryList: () => "https://dummyjson.com/products/category-list",
  getProductsByCategory: (category: string) =>
    `https://dummyjson.com/products/category/${category}`,
};
