import { Box, Typography, Avatar, Button } from "@mui/material";
import { filterRoomInfo } from "../../utils/filterRoomInfo";

const RoomDetail = ({
  room,
  members,
  loggingUserId,
  onDispersedRoom
}) => {
  const info = filterRoomInfo(loggingUserId, room, members);


  return (
    <Box
      sx={{
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
      <Box
        py="30px"
        sx={{
          width: '100%',
          justifyContent: "center",
          alignItems: "center",
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Avatar
          sx={{
            width: '120px',
            height: '120px'
          }}
          alt={info.title}
          src={info.avatar} />
        {room.singleRoom
          ? <Box
            sx={{
              width: '100%',
              justifyContent: "center",
              alignItems: "center",
              display: 'flex',
              flexDirection: 'column'
            }}>
            <Typography
              mt="20px"
              fontSize="18px"
              fontWeight="800">
              {info.title}
            </Typography>
            <Typography
              mt="20px"
              fontSize="16px"
              fontWeight="500">
              {info.email}
            </Typography>
            <Typography
              mt={'5px'}
              fontSize="16px"
              fontWeight="500">
              {info.phoneNumber}
            </Typography>
          </Box>
          : <Box
            sx={{
              width: '100%',
              justifyContent: "center",
              alignItems: "center",
              display: 'flex',
              flexDirection: 'column'
            }}>
            <Typography
              mt="20px"
              fontSize="18px"
              fontWeight="800">
              {info.title}
            </Typography>
            <Typography
              mt="10px"
              fontSize="16px"
              fontWeight="500">
              {info.subtitle}
            </Typography>
          </Box>
        }
        {room.singleRoom &&
          <Button
            variant="outlined">
            Xem trang cá nhân
          </Button>
        }

      </Box>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexGrow: 1,
        }}>
        á
      </Box>
      <Button
        onClick={() => {
          onDispersedRoom(room._id);
        }}
        color="error"
        sx={{ marginX: '15px', marginY: '10px' }}
        variant="contained">
        Giải tán nhóm
      </Button>
    </Box>
  )
}

export default RoomDetail;