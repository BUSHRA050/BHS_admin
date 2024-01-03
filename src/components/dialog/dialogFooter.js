import React from "react";
import { DialogActions, Button } from "@mui/material";
import useStyles from "../../globalStyles";

const DialogFooter = ({ type, handleCreate, handleUpdate, handleClose }) => {
  const classes = useStyles();
  return (
    <DialogActions>
      <Button
        variant="contained"
        size="small"
        onClick={handleClose}
        style={{ textTransform: "none", backgroundColor: "red" }}
      >
        Cancel
      </Button>
      {type === "add" ? (
        <Button
          variant="contained"
          size="small"
          className={classes.globalBtnStyle}
          onClick={handleCreate}
        >
          Create
        </Button>
      ) : type == "edit" ? (
        <Button
          variant="contained"
          size="small"
          className={classes.globalBtnStyle}
          onClick={handleUpdate}
        >
          Update
        </Button>
      ) : null}
    </DialogActions>
  );
};

export default DialogFooter;
