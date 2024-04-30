import { Box, Typography, Stack, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ReactSearchBox from "react-search-box";
import CreateGroupChatDialog from "./CreateGroupChatDialog";
import _ from "lodash";
import RoomChatItem from "./RoomChatItem";
import { useState } from "react";
import { filterRoomInfo } from "../../utils/filterRoomInfo";


const MenuRoomChat = ({ rooms, onCreateGroupChat }) => {
  const { user } = useSelector((state) => state.user);
  const [openCreateGroupChat, setOpenCreateGroupChat] = useState(false);

  return (
    <Stack
      sx={{
        overflowX: 'hidden',
        overflowY: 'hidden',
        height: '100vh',
        width: '500px'
      }}>
      <Stack
        direction="row"
        sx={{ paddingX: '15px', paddingY: '10px' }}>
        <Box sx={{ width: '100%' }}>
          <Typography
            fontWeight="1000"
            fontSize="bold"
            variant="h4">
            {`Tin nhắn`}
          </Typography>
        </Box>
        <IconButton
          size="medium"
          onClick={() => setOpenCreateGroupChat(true)}>
          <DriveFileRenameOutlineIcon />
        </IconButton>
      </Stack>
      <Box sx={{ paddingX: '15px', mb: '15px' }}>
        <ReactSearchBox
          inputBorderColor="#0162C4"
          placeholder="Tìm kiếm"
          value="Doe"
          data={[

          ]}
          callback={(record) => console.log(record)}
        />
      </Box>
      <Stack sx={{ height: '100%', overflowY: 'scroll' }}>
        {_.map(rooms, (roomItem) =>
          <RoomChatItem

            {...roomItem}
            {...filterRoomInfo(user._id, roomItem, roomItem.users)}
            members={roomItem.users}
            loggingUserId={user._id} />
        )}
      </Stack>
      <CreateGroupChatDialog
        open={openCreateGroupChat}
        onClose={() => setOpenCreateGroupChat(false)}
        onCreateGroupChat={onCreateGroupChat} />
    </Stack>
  )
}

export default MenuRoomChat;