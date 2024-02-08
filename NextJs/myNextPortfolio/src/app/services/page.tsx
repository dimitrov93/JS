"use client";
import * as React from "react";
import { useSnackbar } from "../context/SnackbarContext";

export default function ServicesPage() {
  const { showSnackbar } = useSnackbar();

  const handleClick = () => {
    showSnackbar({
      alertText: "Hello there!",
      severity: "success",
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Show Snackbar</button>
    </div>
  );
}
