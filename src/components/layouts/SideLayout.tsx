import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const SideLayout = () => {
  return (
    <>
      <Box height="calc(100vh - 70px)" display="flex">
        <Sidebar />
        <Outlet />
      </Box>
    </>
  );
};

export default SideLayout;
