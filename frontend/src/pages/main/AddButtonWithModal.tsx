import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useCreateUserMutation } from './api/tanstack';
import { Controller, useForm } from 'react-hook-form';

export function AddButtonWithModal() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const useCreateUser = useCreateUserMutation();

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    useCreateUser.mutate(data, {
      onSuccess: () => {
        setDialogOpen(false);
      },
    });
  };

  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Add</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} id="add-user-form">
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <>
                  <Typography>Name</Typography>
                  <TextField {...field} variant="outlined" />
                </>
              )}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
          <Button type="submit" form="add-user-form">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
