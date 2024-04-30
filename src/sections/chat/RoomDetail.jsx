import { Box, Typography, Stack, Avatar, Divider, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useState } from "react";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

const RoomDetail = ({ info, room }) => {
  return (
    <Box sx={{ width: "350px", height: "100%" }}>
      <Box
        py="30px"
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          sx={{
            width: "120px",
            height: "120px",
          }}
          alt={info.title}
          src={info.avatar}
        />
        {room.singleRoom ? (
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography mt="20px" fontSize="18px" fontWeight="800">
              {info.title}
            </Typography>
            <Typography mt="20px" fontSize="16px" fontWeight="500">
              {info.email}
            </Typography>
            <Typography mt={"5px"} fontSize="16px" fontWeight="500">
              {info.phoneNumber}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography mt="20px" fontSize="18px" fontWeight="800">
              {info.title}
            </Typography>
            <Typography mt="10px" fontSize="16px" fontWeight="500">
              {info.subtitle}
              <IconButton>{info.icon}</IconButton>
            </Typography>
          </Box>
        )}
        {room.singleRoom && (
          <Button sx={{ marginTop: "20px" }} variant="contained">
            Xem trang cá nhân
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default RoomDetail;
