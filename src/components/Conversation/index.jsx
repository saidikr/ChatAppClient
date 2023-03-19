import { faker } from "@faker-js/faker";
import { Avatar, Divider, IconButton } from "@mui/material";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message";

const Conversation = () => {
  return (
    <div className="flex flex-col h-[100%] max-h-[100vh] w-auto">
      {/* Header */}
      <Header />
      <div className="w-full flex-grow overflow-y-scroll h-[100%]">
        <Message menu="true" />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Conversation;
