import React from "react";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import Contact from "../../components/Contact";
import { useSelector } from "../../redux/store";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
  const { sidebar } = useSelector((store) => store.app);
  console.log(sidebar);
  return (
    <div className="flex h-[100vh] w-full">
      <Chats />
      <div
        className={
          sidebar.open
            ? "w-[calc(100vw-740px)] bg-[#F0F4FA]"
            : "w-[calc(100vw-420px)] bg-[#F0F4FA]"
        }
      >
        <Conversation />
      </div>
      {/* Contact */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessages />;
            case "SHARED":
              return <SharedMessages />;
            default:
              return <Contact />;
          }
        })()}
    </div>
  );
};

export default GeneralApp;
