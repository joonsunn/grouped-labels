import { Button } from '@mui/material';
import { useState } from 'react';

export function EditButtonWithModal() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button>Edit</Button>
    </>
  );
}
