import React from "react";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from "./MsgTypes";

const Message = ({menu}) => {
  return (
    <div className="p-3">
      <div className="flex flex-col space-y-6">
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //TimeLine
              return <TimeLine el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  //img
                  return <MediaMsg el={el} menu={menu} />;
                case "doc":
                  //document
                return <DocMsg el={el} menu={menu} />;                  
                case "link":
                  //Link
                    return <LinkMsg el={el} menu={menu} />;
                case "reply":
                  //replyMessage
                  return <ReplyMsg el={el} menu={menu} />;
                default:
                  //text message
                  return <TextMsg el={el} menu={menu} />;
              }
              break;
            default:
              return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default Message;
