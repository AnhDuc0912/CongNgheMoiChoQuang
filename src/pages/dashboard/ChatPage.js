import { Box, Typography, Stack, Divider } from "@mui/material";
import React from "react";
import MenuRoomChat from "../../sections/chat/MenuRoomChat";
const Chats = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <MenuRoomChat rooms={[{}, {}]} />
      <Stack>
        
      </Stack>
    </Box>
  );
};

export default Chats;
