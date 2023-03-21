import { Divider, IconButton } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, &::after": { borderTopStyle: "dashed" },
        }}
      >
        OR
      </Divider>
      <div className="flex justify-center space-x-4 ">
        <IconButton>
          <GoogleLogo color="#DF3E30" />
        </IconButton>
        <IconButton color="inherit" >
          <GithubLogo />
        </IconButton>
        <IconButton>
          <TwitterLogo color="#1C9CEA" />
        </IconButton>
      </div>
    </div>
  );
};

export default AuthSocial;
