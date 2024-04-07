
import { Box, Divider, IconButton, Stack } from "@mui/material";
import {
    ChatCircleDots,
    Gear,
    GearSix,
    Phone,
    SignOut,
    User,
    Users,
} from "phosphor-react";
import { useLocation } from 'react-router-dom';
import { Link, Navigate } from "react-router-dom/dist";

const sideBarItems = [
    {
        path: '/chat',
        icon: <ChatCircleDots />,
    },
    {
        path: '/user',
        icon: <Users />,
    },
];


const Sidebar = () => {
    const location = useLocation();
    const isSelected = (path) => location.pathname === path;
    return (
        <Stack
            spacing={3}
            sx={{ width: "max-content" }}
            direction="Column"
            alignItems="Center">
            {sideBarItems.map((sideBarItem) =>
                <Box
                    padding={isSelected(sideBarItem.path) ? 1 : 0}
                    sx={isSelected(sideBarItem.path) && {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: 1.5,
                    }}>
                    <IconButton
                        LinkComponent={Link}
                        href={sideBarItem.path}
                        sx={{
                            width: "max-content",
                            color: "black"
                        }}
                        key={sideBarItem.path}>
                        {sideBarItem.icon}
                    </IconButton>
                </Box>
            )}
            <Divider sx={{ width: "48px" }} />
        </Stack>
    )
}

export default Sidebar;