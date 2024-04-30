import {
  Typography,
  Stack,
  Avatar,
  Box,
  Chip,
  Tooltip,
  IconButton,
  Popover,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReplayIcon from "@mui/icons-material/Replay";

export const NotificationMessage = ({ user, content, newMember }) => {
  console.log(newMember);
  const filterMsgSystem = () => {
    if (content === "created this room.") {
      return " đã tạo phòng.";
    }
  };

  return (
    <Stack
      px="15px"
      py="10px"
      justifyContent="center"
      spacing="15px"
      bgcolor="whitesmoke"
      direction="row"
    >
      {content === "created this room." && (
        <Chip
          sx={{
            fontSize: "12px",
            justifyContent: "flex-start",
            color: "rgb(1,98,196)",
            fontWeight: "600",
          }}
          avatar={<Avatar src={user.avatar} />}
          label={
            <Typography fontSize="14px" fontWeight="600">
              {user.fullName}
              <span style={{ fontWeight: "400" }}>{filterMsgSystem()}</span>
            </Typography>
          }
        />
      )}

      {newMember && (
        <Chip
          sx={{
            fontSize: "12px",
            justifyContent: "flex-start",
            color: "rgb(1,98,196)",
            fontWeight: "600",
          }}
          avatar={<Avatar src={user.avatar} />}
          label={
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              {user.fullName}
              <span style={{ fontWeight: "400" }}> đã thêm </span>
              {newMember.fullName}
              <span style={{ fontWeight: "400" }}> vào phòng.</span>
            </Typography>
          }
        />
      )}
    </Stack>
  );
};

export const LeftMessage = ({ user, content }) => {
  return (
    <Stack
      px="15px"
      py="10px"
      spacing="15px"
      bgcolor="whitesmoke"
      direction="row"
    >
      <Avatar alt={user.fullName} src={user.avatar} />
      <Box>
        <Typography sx={{ fontSize: "13px", mb: "5px" }}>
          {user.fullName}
        </Typography>
        <Stack
          sx={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
          direction="column"
        >
          <Typography
            sx={{ maxWidth: "700px", minWidth: "100px" }}
            color="black"
            fontWeight="500"
            fontSize="15px"
            variant="body1"
          >
            {content}
          </Typography>
          <Typography
            mt="5px"
            color="black"
            fontWeight="500"
            fontSize="12px"
            variant="body1"
          >
            {"20:54"}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export const RightMessage = ({ content, seen = false, sent = true }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Stack
      px="15px"
      py="10px"
      justifyContent="flex-end"
      spacing="15px"
      bgcolor="whitesmoke"
      direction="row"
    >
      <IconButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ContentCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Sao chép tin nhắn" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <ReplayIcon color="error"/>
            </ListItemIcon>
            <ListItemText primary="Thu hồi tin nhắn" sx={{ color: "red" }}/>
          </ListItemButton>
        </List>
      </Popover>
      <Stack
        sx={{
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
        direction="column"
      >
        <Typography
          sx={{ maxWidth: "700px", minWidth: "100px" }}
          color="black"
          fontWeight="500"
          fontSize="15px"
          variant="body1"
        >
          {content}
        </Typography>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
          direction="row"
        >
          <Typography
            mt="5px"
            mr="5px"
            color="black"
            fontWeight="500"
            fontSize="12px"
            variant="body1"
          >
            {"20:54"}
          </Typography>
          {sent ? (
            seen ? (
              <DoneAllIcon fontVariant="small" sx={{ color: "#0162C4" }} />
            ) : (
              <DoneIcon fontSize="small" sx={{ color: "#0162C4" }} />
            )
          ) : (
            <Typography
              color="#0162C4"
              fontWeight="500"
              fontSize="10px"
              variant="body1"
            >
              {`Sending`}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
