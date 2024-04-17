import { Box, Typography, Stack, Divider } from "@mui/material";
import React, { useState } from "react";
import MenuRoomChat from "../../sections/chat/MenuRoomChat";
import Room from "../../sections/chat/Room";
import { useEffect } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import StartNewChat from "../../sections/chat/StartNewChat";
import { io } from "socket.io-client";
import connectSocket from "../../utils/socket/connectSocket" ;

const chatData = [
  {
    roomId: 'room1',
    unreadMsgCount: 3,
    user: {
      fullName: "Phạm Quốc Anh Đức",
      avatar: "https://hayugo.edu.vn/storage/image/0cb9d23cfdd77a7869c0e6c073237ad0.png"
    },
    lastMsg: {
      content: "Hello, how are you today?"
    }
  },
  {
    roomId: 'room2',
    unreadMsgCount: 0,
    user: {
      fullName: "Nguyễn Thị Lan Anh",
      avatar: "https://hayugo.edu.vn/storage/image/0cb9d23cfdd77a7869c0e6c073237ad0.png"
    },
    lastMsg: {
      content: "Hello, how are you today?"
    }
  }
]

const Chats = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const { roomId } = useParams();


  useEffect(() => {
    setRooms(chatData)
  }, [])

  return (
    <Stack
      direction="row"
      sx={{ height: '100%' }}>
      <MenuRoomChat
        rooms={rooms} />
      <Divider
        orientation="vertical"
        flexItem />
      {(Boolean(roomId))
        ? <Room />
        : <StartNewChat />
      }
    </Stack>
  );
};

export default Chats;
