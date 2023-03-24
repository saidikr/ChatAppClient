import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { MembersList } from "../../data";

//TODO => Create a reusable component
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      {/* Title */}
      <DialogTitle variant="h5" sx={{ mb: 2 }}>
        Start Call
      </DialogTitle>

      {/* Content */}
      <DialogContent>
        <div className="flex flex-col space-y-6">
          <div className=" ml-1 ">
            <div className="relative border rounded-xl overflow-hidden my-2 h-fit py-1 mr-2 w-[100%]">
              <div className="absolute left-2 right-2 flex my-2 items-center justify-start">
                <MagnifyingGlass color="#709CE6" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="px-8 py-1 w-fit focus:outline-none"
              />
            </div>
          </div>
          {/* Call List */}
          {MembersList.map((el) => (
            <CallElement {...el} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
