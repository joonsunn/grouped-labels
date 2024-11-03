import { Typography, Stack } from '@mui/material';
import { useGetAllUsersQuery } from './api/tanstack';
import { EditButtonWithModal } from './EditButtonWithModal';

const Main = () => {
  const { data: users } = useGetAllUsersQuery();

  return (
    <>
      <Typography>Hello world</Typography>
      {users &&
        users.map((user) => (
          <Stack direction="row" gap={2}>
            <Typography key={user.id}>{user.name}</Typography>
            <EditButtonWithModal />
          </Stack>
        ))}
    </>
  );
};

export default Main;
