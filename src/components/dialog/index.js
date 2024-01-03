import React from "react";
import { Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";

const GlobalDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    background: "#fff",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    boxShadow:
      "0 0.46875rem 2.1875rem rgb(90 97 105 / 10%), 0 0.9375rem 1.40625rem rgb(90 97 105 / 10%), 0 0.25rem 0.53125rem rgb(90 97 105 / 12%), 0 0.125rem 0.1875rem rgb(90 97 105 / 10%)",
  },
  "&.MuiDialog-root .MuiDialog-container .MuiPaper-root": {
    width: "500px",
  },
}));

const BootstrapDialog = ({ children, handleClose, open }) => {
  return (
    <GlobalDialog onClose={handleClose} open={open} scroll="body">
      {children}
    </GlobalDialog>
  );
};

export default BootstrapDialog;
