import { Box, Typography, Stack, Drawer } from "@mui/material";
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import Composer from "./Composer";
import IconButton from '@mui/material/IconButton';
import SubjectIcon from '@mui/icons-material/Subject';
import RoomDetail from "./RoomDetail";
import _ from "lodash";
import { LeftMessage, RightMessage } from "./MessageItem";
import { useEffect } from "react";

const user = {
  fullName: "Phạm Quốc Anh Đức",
  avatar: "https://hayugo.edu.vn/storage/image/0cb9d23cfdd77a7869c0e6c073237ad0.png"
}

const Room = () => {
  const { roomId } = useParams();
  const [loading, setLoading] = useState(false);
  const [showRoomInfo, setShowRoomInfo] = useState(false);
  const [messages, setMessages] = useState([]);

  const onEnteredNewMsg = (msg) => {
    setMessages(prevMessages => [...prevMessages, msg])
  }
  useEffect(() => {

  }, [messages]);

  return (
    <Stack
      sx={{
        width: '100%',
        backgroundColor: 'whitesmoke'
      }}>
      <Stack
        px="15px"
        py="10px"
        spacing="15px"
        bgcolor="rgba(255, 255, 255, 0.9)"
        direction="row">
        <Avatar
          alt={user.fullName}
          src={user.avatar} />
        <Box sx={{ width: '100%' }}>
          <Typography
            sx={{ width: '100%', color: 'black', fontSize: "16px" }}
            variant="subtitle1">
            {user.fullName}
          </Typography>
          <Stack
            sx={{ width: '100%' }}
            justifyContent="space-between"
            spacing="10px"
            direction="row">
            <Typography
              sx={{
                fontWeight: "500",
                color: '#696969',
              }}
              fontSize="14px"
              variant="body1">
              {`Online`}
            </Typography>
          </Stack>
        </Box>
        <IconButton
          onClick={() => setShowRoomInfo(!showRoomInfo)}
          aria-label="emoji">
          <SubjectIcon />
        </IconButton>
      </Stack>
      {loading ? (
        <div>loading</div>
      ) : (
          <div style={{ overflowY: 'auto', maxHeight: '80vh', minHeight: '80vh' }}>
            <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
            }}
            >
              
              <LeftMessage
                content="hello, em iu"
                user={user}
              />
              
              <RightMessage
                seen={false}
                sent={false}
                content={"Test not sent"}
              />

              <RightMessage
                seen={false}
                sent={true}
                content={"Test sent not seen"}
              />

              <RightMessage
                seen={true}
                sent={true}
                content={"Test seen icon"}
              />
              

              {_.map(messages, (message, index) => (
                <RightMessage
                  key={index} // Đảm bảo mỗi phần tử trong map có key duy nhất
                  seen={false}
                  sent={false}
                  content={message}
                />
              ))}
            </Stack>
          </div>
      )}

      <Composer
        onSubmitMsg={onEnteredNewMsg}
      />
      <Drawer
        anchor="right"
        open={showRoomInfo}
        onClose={() => setShowRoomInfo(false)}>
        <RoomDetail user={user} />
      </Drawer>
    </Stack>
  )
}


export default Room;