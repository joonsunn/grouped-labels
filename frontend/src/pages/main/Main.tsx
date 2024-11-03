import { Typography, Stack, Button } from '@mui/material';
import { useGetAllUsersQuery } from './api/tanstack';
import { EditButtonWithModal } from './EditButtonWithModal';
import { AddButtonWithModal } from './AddButtonWithModal';

const Main = () => {
  const { data: users } = useGetAllUsersQuery();

  return (
    <>
      <Typography>Hello world</Typography>
      <AddButtonWithModal />
      {users &&
        users.map((user, index) => (
          <Stack direction="row" gap={2} alignItems={'center'} key={index}>
            <Typography key={user.id}>{user.name}</Typography>
            <EditButtonWithModal userId={user.id} />
          </Stack>
        ))}
    </>
  );
};

export default Main;
