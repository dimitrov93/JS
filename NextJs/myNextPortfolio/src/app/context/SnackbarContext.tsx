"use client"
import React, { createContext, ReactNode, useContext, useState } from "react";
import CustomSnackbar, { CustomSnackbarProps } from "../../components/SnackBar/SnackBar";

interface SnackbarContextProps {
  showSnackbar: (options: CustomSnackbarProps) => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [snackbarOptions, setSnackbarOptions] = useState<CustomSnackbarProps | null>(null);

  const showSnackbar = (options: CustomSnackbarProps) => {
    setSnackbarOptions(options);

    setTimeout(() => {      
      setSnackbarOptions(null)
    }, 4000);
  };  

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbarOptions && (
        <CustomSnackbar
          alertText={snackbarOptions.alertText}
          severity={snackbarOptions.severity}
        />
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
