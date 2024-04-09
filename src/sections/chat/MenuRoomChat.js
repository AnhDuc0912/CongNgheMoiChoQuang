import { Box, Typography, Stack } from "@mui/material";

export const RoomChatItem = ({ user, content, lastMessage }) => {
    return (
        <Stack sx={{ width: '200px' }}>
            <Box>
                <Typography>
                    {`Phạm Quốc Anh Đức`}
                </Typography>
                <Typography>
                    {`Hello, How are you today?`}
                </Typography>
            </Box>
        </Stack>
    )
}

const MenuRoomChat = ({ rooms }) => {
    return (
        <Stack
            sx={{
                height: '100%',
                width: '400px'
            }}>
            {rooms.map((roomItem) =>
                <RoomChatItem {...roomItem} />)}
        </Stack>
    )
}

export default MenuRoomChat;