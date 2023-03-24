import { Divider, IconButton } from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import React, { useState } from "react";
import { CallLogElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
   return (
     <>
       <div className="flex w-full">
         {/* Left */}
         <div className="h-[100vh] bg-[#F8FAFF] w-[320px] shadow">
           <div className="flex flex-col space-y-4 p-3 max-h-[100vh]">
             <div className="flex flex-col">
               <h1 className="font-semibold text-3xl">Call Logs</h1>
             </div>
             <div className="w-full ml-1 my-3">
               <div className="relative  rounded-xl overflow-hidden my-2 h-fit py-1 mr-2 w-[100%]">
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
             <div className="flex items-center justify-between">
               <p className="text-blue-500 underline hover:cursor-pointer">
                 Start New Conversation
               </p>
               <IconButton
                 onClick={() => {
                   setOpenDialog(true);
                 }}
               >
                 <Plus color="#1D4ED8" />
               </IconButton>
             </div>
             <Divider />
             {/* Call logs */}
             {CallLogs.map((el) => (
               <CallLogElement {...el} />
             ))}
           </div>
         </div>
         {/* Right */}
         {/* // TODO => Reuse Conversation Components */}
       </div>
       {openDialog && (
         <StartCall open={openDialog} handleClose={handleCloseDialog} />
       )}
     </>
   );
};

export default Call;
