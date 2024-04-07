import { useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../../assets/Images/siu.ico";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";


const DashboardLayout = () => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.primary.main,
          boxShadow: " 0px 0px 2px rgba(0, 0, 0, 0.25)",
          width: 100,
          height: "100vh",

        }}>
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent="space-between"
          sx={{ height: "100%" }}
          spacing={3}>
          <Stack alignItems={"center"} spacing={2}>
            <Box
              sx={{
                backgroundColor: theme.palette.background.paper,
                height: 64,
                width: 64,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
              }}>
              <img src={Logo} alt="Logo_IUH" sx={{ borderRadius: "50%" }}></img>
            </Box>
            <Sidebar />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
