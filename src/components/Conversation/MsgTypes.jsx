import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { Message_options } from "../../data";

const DocMsg = ({ el,menu }) => {
  return (
    <div className={el.incoming ? "flex justify-start" : "flex justify-end"}>
      <div
        className={
          el.incoming
            ? "p-3 bg-white rounded-xl w-max"
            : "p-3 bg-primary-main rounded-xl w-max"
        }
      >
        <div className="flex flex-col space-y-3">
          <div className="flex p-2 space-x-4 items-center bg-white rounded-lg">
            <Image size={48} />
            <p className="text-gray-600">Abstract.png</p>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </div>
          <p className={el.incoming ? "text-gray-800" : "text-white"}>
            {el.message}
          </p>
        </div>
      </div>
      {menu && <MessageOptions />}
    </div>
  );
};

const LinkMsg = ({ el,menu }) => {
  return (
    <div className={el.incoming ? "flex justify-start" : "flex justify-end"}>
      <div
        className={
          el.incoming
            ? "p-3 bg-white rounded-xl w-max"
            : "p-3 bg-primary-main rounded-xl w-max"
        }
      >
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col items-start space-y-6 bg-white rounded-lg">
            <img
              src={el.preview}
              alt={el.message}
              className="max-h-[210px] rounded-lg"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Creating Chat App</p>
              <Link
                className="font-semibold text-primary-main hover:underline"
                to="https://www.youtube.com/"
              >
                www.youtube.com
              </Link>
            </div>
            <p className={el.incoming ? "text-gray-800" : "text-white"}>
              {el.message}
            </p>
          </div>
        </div>
      </div>
      {menu && <MessageOptions />}
    </div>
  );
};

const ReplyMsg = ({ el,menu }) => {
  return (
    <div className={el.incoming ? "flex justify-start" : "flex justify-end"}>
      <div
        className={
          el.incoming
            ? "p-3 bg-white rounded-xl w-max"
            : "p-3 bg-primary-main rounded-xl w-max"
        }
      >
        <div className="flex flex-col space-1">
          <div className="flex flex-col p-2 space-y-6 items-center bg-white rounded-lg">
            <p className="text-gray-800">{el.message}</p>
          </div>
          <p className={el.incoming ? "text-gray-800" : "text-white"}>
            {el.reply}
          </p>
        </div>
      </div>
      {menu && <MessageOptions />}
    </div>
  );
};

const MediaMsg = ({ el,menu }) => {
  return (
    <div className={el.incoming ? "flex justify-start" : "flex justify-end"}>
      <div
        className={
          el.incoming
            ? "p-3 bg-white rounded-xl w-max"
            : "p-3 bg-primary-main rounded-xl w-max"
        }
      >
        <div className="flex flex-col space-y-1">
          <img
            src={el.img}
            alt={el.message}
            className="max-h-[210px] rounded-lg"
          />
          <p className={el.incoming ? "text-gray-800" : "text-white"}>
            {el.message}
          </p>
        </div>
      </div>
      {menu && <MessageOptions />}
    </div>
  );
};

const TextMsg = ({ el,menu }) => {
  return (
    <div className={el.incoming ? "flex justify-start" : "flex justify-end"}>
      <div
        className={
          el.incoming
            ? "p-3 bg-white rounded-xl w-max"
            : "p-3 bg-primary-main rounded-xl w-max"
        }
      >
        <p className={el.incoming ? "text-gray-800" : "text-white"}>
          {el.message}
        </p>
      </div>
      {/* dot thre  */}
      {menu && <MessageOptions />}
    </div>
  );
};

const TimeLine = ({ el }) => {
  return (
    <div className="flex items-center justify-between">
      <Divider width="46%" />
      <p className="text-gray-800">{el.text}</p>
      <Divider width="46%" />
    </div>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
        <DotsThreeVertical
          id="basic-menu"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          size={20}
        />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="flex flex-col space-y-1 px-1">
          {Message_options.map((el) => (
            <MenuItem onClick={handleClick}>{el.title}</MenuItem>
          ))}
        </div>
      </Menu>
    </>
  );
};
export { TimeLine, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
