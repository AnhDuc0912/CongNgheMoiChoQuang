import { Box, Typography, Stack, } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link, useParams } from "react-router-dom";
import { getGroupChatTitle } from "../../utils/getGroupChatTitle";

const RoomChatItem = ({
  _id,
  users,
  singleRoom,
  userConfigs,
  createdAt,
  updatedAt,
  lastMsg,
  loggingUserId,
  title
}) => {
  const param = useParams();
  const getDestinationInRoom = () => {

    if (Boolean(singleRoom)) {
      const member = users.find(x => x._id !== loggingUserId);
      return {
        avatar: member.avatar,
        title: member.fullName,
        content: lastMsg.content || '',
      }
    }

    return {
      avatar: '',
      title: title || getGroupChatTitle(users, loggingUserId),
      content: lastMsg?.content || '',
    }
  }

  return (
    <Stack
      component={Link}
      //   onClick={() => readMsg(roomId)}
      to={"/chat/" + _id}
      px="15px"
      py="10px"
      spacing="15px"
      direction="row"
      sx={{
        textDecoration: 'none',
        width: '100%',
        '&:hover': {
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        },
        ...((param.roomId === _id) && {
          backgroundColor: "rgb(1, 98, 196, 0.1)",
          '&:hover': {
            backgroundColor: "rgb(1, 98, 196, 0.1)",
          },
        })
      }}>
      <Avatar
        alt={getDestinationInRoom().title}
        src={getDestinationInRoom().avatar} />
      <Box sx={{ width: '100%' }}>
        <Typography
          sx={{ width: '100%', color: 'black', fontSize: "15px" }}
          variant="subtitle1">
          {getDestinationInRoom().title}
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
              // ...(unreadMsg > 0 && {
              //   fontWeight: "600",
              //   color: '#000',
              // })
            }}
            fontSize="14px"
            variant="body1">
            {getDestinationInRoom().content}
          </Typography>
          {/* {(Boolean(unreadMsg) && unreadMsg > 0)
              && <Chip
                size="small"
                sx={{
                  color: 'white',
                  backgroundColor: '#0162C4'
                }}
                label={unreadMsg} />
            } */}
        </Stack>
      </Box >
    </Stack >
  )
}

export default RoomChatItem;