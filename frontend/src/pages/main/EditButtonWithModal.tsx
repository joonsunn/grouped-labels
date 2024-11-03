import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import {
  useGetAllLabelGroupsQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from './api/tanstack';
import { Controller, useForm } from 'react-hook-form';
import { groupBy } from 'lodash';

type EditButtonWithModalProps = {
  userId: string;
};

export function EditButtonWithModal({ userId }: EditButtonWithModalProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: user } = useGetUserByIdQuery(userId);

  const { data: labelGroups } = useGetAllLabelGroupsQuery();

  const useUpdateUser = useUpdateUserMutation(userId);

  const { control, reset, handleSubmit } = useForm();

  const userLabels = useMemo(() => {
    if (!user) return [];

    const innerUserLabels = groupBy(user.userLabels, 'label.labelGroup.name');

    for (const labelGroup in innerUserLabels) {
      innerUserLabels[labelGroup] = innerUserLabels[labelGroup].map(
        (label) => label.labelId,
      );
    }
    return innerUserLabels;
  }, [user]);

  useEffect(() => {
    if (!user) return;
    if (!labelGroups) return;
    reset({ ...user, ...userLabels });
  }, [user, userLabels, labelGroups, reset]);

  const onSubmit = (data) => {
    const userLabelsToBeSubmitted = labelGroups
      .map((labelGroup) => labelGroup.name)
      .map((key) => data[key])
      .flat()
      .map((label) => ({ labelId: label }));

    data.userLabels = userLabelsToBeSubmitted.filter((label) =>
      Object.keys(label).some((key) => label[key] !== undefined),
    );
    if (data.userLabels.length === 0) {
      delete data.userLabels;
    }

    labelGroups.forEach((labelGroup) => {
      delete data[labelGroup.name];
    });
    delete data.id;
    useUpdateUser.mutate(data, {
      onSuccess: () => {
        setDialogOpen(false);
      },
    });
  };

  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Edit</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} id="user-edit-form">
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <>
                  <Typography>Name</Typography>
                  <TextField value={value} onChange={onChange} />
                </>
              )}
            />
            {labelGroups &&
              labelGroups.map((labelGroup, index) => (
                <Controller
                  control={control}
                  key={index}
                  name={labelGroup.name}
                  render={({ field: { value, onChange } }) => (
                    <>
                      <Typography>{labelGroup.name}</Typography>
                      <Select
                        value={value || []}
                        onChange={onChange}
                        sx={{ width: '100%' }}
                        multiple
                      >
                        {labelGroup.labels.map((label) => (
                          <MenuItem key={label.id} value={label.id}>
                            {label.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </>
                  )}
                />
              ))}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
          <Button type="submit" form="user-edit-form">
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
