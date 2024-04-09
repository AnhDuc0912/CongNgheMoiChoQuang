import { Box, Typography, Stack, Divider } from "@mui/material";
import React from "react";
import MenuRoomChat from "../../sections/chat/MenuRoomChat";
const Chats = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <MenuRoomChat rooms={[{}, {}]} />
      <Divider
        sx={{
          height: '100%',
          width: '1px'
        }} />
    </Box>
  );
};

export default Chats;
