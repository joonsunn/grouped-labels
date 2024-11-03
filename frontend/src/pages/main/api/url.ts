const baseUrl = 'http://localhost:3000';

export const USERS_URL = {
  getAllUsers: () => `${baseUrl}/user`,
  createUser: () => `${baseUrl}/user`,

  getUserById: (id: string) => `${baseUrl}/user/${id}`,

  updateUser: (id: string) => `${baseUrl}/user/${id}`,
};

export const LABELS_URL = {
  getAllLabelGroups: () => `${baseUrl}/label-group`,
  // createLabel: () => `${baseUrl}/label`,
};
