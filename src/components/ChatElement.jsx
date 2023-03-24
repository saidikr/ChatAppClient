import { faker } from "@faker-js/faker";
import { Avatar, Badge, IconButton } from "@mui/material";

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  return (
    <div className="hover:bg-gray-100 w-[100%] h-fit p-2 rounded-md bg-white flex">
      <div className="relative">
        {online ? (
          <IconButton>
            <Avatar src={faker.image.avatar()} />
            <div className="text-[#44b700] bg-[#44b700] shadow-lg absolute bottom-2 right-2 w-[10px] h-[10px] rounded-full transition-all ease-in-out border"></div>
          </IconButton>
        ) : (
          <IconButton>
            <Avatar src={faker.image.avatar()} />
          </IconButton>
        )}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600">{msg}</p>
      </div>
      <div className="flex flex-col space-y-4 items-center ml-auto mr-2">
        <p className="font-semibold">{time}</p>
        <Badge color="primary" badgeContent={unread}></Badge>
      </div>
    </div>
  );
};

export default ChatElement;
