import { Box, Typography, Stack, Divider } from "@mui/material";
import React, { useState } from "react";
import MenuRoomChat from "../../sections/chat/MenuRoomChat";
import Room from "../../sections/chat/Room";
import { useEffect } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import StartNewChat from "../../sections/chat/StartNewChat";
import axios from "axios";


const Chats = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const { roomId } = useParams();


  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:4000/api/room/last", {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })
      .then((res) => {
        setRooms(res.data.rooms)
      })
      .catch((err) => {
        console.log(err);
      })
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
