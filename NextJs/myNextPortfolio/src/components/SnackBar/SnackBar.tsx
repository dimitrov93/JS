import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export interface CustomSnackbarProps {
  alertText: string;
  severity?: "success" | "error" | "info" | "warning";
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({alertText, severity = "success"}) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity || "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertText}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;
