import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface ErrorDialogProps {
  errorMessage: string;
  onClose: () => void;
}

export default function ErrorDialog(props: ErrorDialogProps) {
  return (
    <Dialog open={true} onClose={props.onClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <p>{props.errorMessage}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};