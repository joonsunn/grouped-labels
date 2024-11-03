import { Theme } from "@mui/material";

import { Components } from "@mui/material";

export default function TextField(theme: Theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          "&:has(> input:-webkit-autofill)": {
            backgroundColor: "black",
          },
        },
      },
      defaultProps: {
        size: "small",
      },
    },
  } as Components;
}
