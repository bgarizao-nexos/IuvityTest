import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";
import useHeader from "../hooks/useHeader";

const Header = () => {
  const { user } = useHeader();

  return (
    <AppBar className="bg-black-alpha-90">
      <Toolbar className="flex justify-content-between gap-2">
        <Typography variant="h6" className="text-xl font-bold flex-1">
          {user?.name || ""}
        </Typography>
        <Typography variant="body2" className="text-sm flex-1 sm:flex-none">
          {user?.location || ""} - {user?.username || ""}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
