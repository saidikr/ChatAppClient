import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@mui/material";
import React from "react";
import { shortcutsList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        keepMounted
        sx={{ p: 4 }}
        TransitionComponent={Transition}
      >
        <DialogTitle>Keabord Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <div className="grid grid-cols-2 gap-4">
            {shortcutsList.map(({ key, title, combination }) => (

                <div
                  key={key}
                  className="flex items-center w-full justify-between space-x-6 "
                >
                  <p className="text-sm">{title}</p>
                  <div className="flex space-x-4">
                    {combination.map((el) => (
                      <Button
                        disabled
                        variant="contained"
                        sx={{ color: "#212121" }}
                      >
                        {el}
                      </Button>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" onClick={handleClose} >Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
