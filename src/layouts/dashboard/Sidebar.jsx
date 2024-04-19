import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Stack,
} from "@mui/material";
import { ChatCircleDots, Users } from "phosphor-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/dist";
import { useState } from "react";
import { PowerSettingsNew, Settings } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import _ from "lodash";
import ProfileModal from "../../dialog/ProfileModal";

const sideBarItems = [
  {
    path: "/chat",
    icon: <ChatCircleDots />,
  },
  {
    path: "/user",
    icon: <Users />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const isSelected = (path) => location.pathname === path;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileDialogOpen = () => {
    
    setOpenDialog();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80vh",
        width: "max-content",
        margin: "0 auto",
      }}
    >
      <Stack spacing={3} direction="Column" alignItems="center">
        {sideBarItems.map((sideBarItem) => (
          <Box
            padding={isSelected(sideBarItem.path) ? 1 : 0}
            sx={
              isSelected(sideBarItem.path) && {
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 1.5,
              }
            }
            key={sideBarItem.path}
          >
            <IconButton
              LinkComponent={Link}
              to={sideBarItem.path}
              sx={{
                width: "max-content",
                color: "black",
              }}
            >
              {sideBarItem.icon}
            </IconButton>
          </Box>
        ))}
        <Divider sx={{ width: "48px" }} />
      </Stack>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          width: "max-content",
          color: "black",
        }}
      >
        <SettingsOutlinedIcon />
      </IconButton>
      <Popover
        style={{ boxShadow: "2px 6px 18px" }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <List>
          <ListItem
            onClick={() => setOpenDialog(true)}
            button
            style={{ margin: "0 6px 0 6px" }}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Thông tin tài khoản" />
           
            {/* {openDialog ? : null} */}
          </ListItem>
          <ListItem button style={{ margin: "0 6px 0 6px", color: "red" }}>
            <ListItemIcon>
              <PowerSettingsNew color="error" />
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" />
          </ListItem>
        </List>
      </Popover>
      <ProfileModal
            onClose={() => setOpenDialog(false)}
             open={openDialog} /> 

    </Box>
  );
};

export default Sidebar;
