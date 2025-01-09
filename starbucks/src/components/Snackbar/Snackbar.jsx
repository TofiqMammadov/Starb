import * as React from "react";
// MUI Snackbar
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const snackBarColorMapping = {
  error: "#fff09",
  success: "#00754a",
};

export function SimpleSnackbar({
  isOpen,
  handleClose,
  message,
  variant = "success",
}) {
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
        action={action}
        sx={{ background: snackBarColorMapping[variant] }}
      />
    </div>
  );
}
