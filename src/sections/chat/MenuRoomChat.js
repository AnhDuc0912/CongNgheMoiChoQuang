import { Box, Typography, Stack } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const RoomChatItem = ({
    roomId,
    user,
    unreadMsgCount,
    lastMsg
}) => {
    const param = useParams();
    const [unreadMsg, setUnreadMsg] = useState(unreadMsgCount);

    const readMsg = (roomId) => {
        setUnreadMsg(0);
    }

    useEffect(() => {
        setUnreadMsg(unreadMsgCount);
    }, [unreadMsgCount])

    return (
        <Stack
            component={Link}
            onClick={() => readMsg(roomId)}
            to={"/chat/" + roomId}
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
                ...((param.roomId === roomId) && {
                    backgroundColor: "rgb(1, 98, 196, 0.1)",
                    '&:hover': {
                        backgroundColor: "rgb(1, 98, 196, 0.1)",
                    },
                })
            }}>
            <Avatar
                alt={user.fullName}
                src={user.avatar} />
            <Box sx={{ width: '100%' }}>
                <Typography
                    sx={{ width: '100%', color: 'black', fontSize: "15px" }}
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
                            ...(unreadMsg > 0 && {
                                fontWeight: "600",
                                color: '#000',
                            })
                        }}
                        fontSize="14px"
                        variant="body1">
                        {lastMsg.content}
                    </Typography>
                    {(Boolean(unreadMsg) && unreadMsg > 0)
                        && <Chip
                            size="small"
                            sx={{
                                color: 'white',
                                backgroundColor: '#0162C4'
                            }}
                            label={unreadMsg} />
                    }
                </Stack>
            </Box >
        </Stack >
    )
}

const MenuRoomChat = ({ rooms }) => {
    return (
        <Stack
            sx={{
                overflowX: 'hidden',
                overflowY: 'auto',
                height: '100%',
                width: '500px'
            }}>
            {rooms.map((roomItem) =>
                <RoomChatItem {...roomItem} />)}
        </Stack>
    )
}

export default MenuRoomChat;