const usersKeys = {
  getAllUsers: () => ['users'],
  getUserById: (id: string) => ['users', id],
};

const labelsKeys = {
  getAllLabelGroups: () => ['labelGroups'],
};

export const queryKeys = Object.assign({ usersKeys, labelsKeys });
