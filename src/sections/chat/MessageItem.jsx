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
import { enqueueSnackbar } from "notistack";
import { filterMsgSystem } from "../../utils/fitlerMsg";


export const NotificationMessage = ({ user, content, members }) => {

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
              <span style={{ fontWeight: "400" }}>{filterMsgSystem(content)}</span>
            </Typography>
          }
        />
      )}
      {/^add/.test(content) && (
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
              <span style={{ fontWeight: "400" }}>{filterMsgSystem(content, members)}</span>
            </Typography>
          }
        />
      )}
    </Stack>
  );
};

export const LeftMessage = ({ user, content, redeem = false }) => {
  return (redeem
    ? <Stack
      spacing="15px"
      bgcolor="whitesmoke"
      mb="10px"
      direction="row">
      <Avatar alt={user.fullName} src={user.avatar} />
      <Box sx={{
        display: 'flex',
        alignSelf: 'flex-end',
        marginInlineEnd: '15px',
        borderRadius: '15px',
        minWidth: '180px',
        maxWidth: '350px',
        justifyContent: 'flex-end',
        border: '2px solid #d3d3d3',
        paddingX: '7px',
        paddingY: '7px',
        marginBottom: '10px',
      }}>
        <Typography
          color="black"
          fontWeight="500"
          fontStyle="italic"
          fontSize="15px"
          variant="body1">
          {user.fullName} đã thu hồi tin nhắn.
        </Typography>
      </Box>
    </Stack>
    : <Stack
      mb="10px"
      spacing="15px"
      bgcolor="whitesmoke"
      direction="row">
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
          direction="column">
          <Typography
            sx={{ maxWidth: "700px", minWidth: "100px" }}
            color="black"
            fontWeight="500"
            fontSize="15px"
            variant="body1">
            {content}
          </Typography>
          <Typography
            mt="5px"
            color="black"
            fontWeight="500"
            fontSize="12px"
            variant="body1">
            {"20:54"}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export const RightMessage = ({
  content,
  seen = false,
  sent = true,
  onRedeemMsg,
  msgId,
  redeem = false
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        enqueueSnackbar(`Sao chép vào clipboard thành công`, {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });

        handleClose();
      })
      .catch((error) => {
        console.error("Lỗi khi sao chép tin nhắn vào clipboard: ", error);
      });
  };



  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;



  return (redeem
    ? <Box
      sx={{
        marginBottom: '10px',
        display: 'flex',
        alignSelf: 'flex-end',
        borderRadius: '15px',
        width: '180px',
        justifyContent: 'flex-end',
        border: '2px solid #d3d3d3',
        paddingX: '7px',
        paddingY: '7px'
      }}>
      <Typography
        textAlign="center"
        color="black"
        fontWeight="500"
        fontStyle="italic"
        fontSize="15px"
        variant="body1">
        {"Bạn đã thu hồi tin nhắn"}
      </Typography>
    </Box>
    : <Stack
      mb="10px"
      justifyContent="flex-end"
      spacing="15px"
      bgcolor="whitesmoke"
      direction="row">
      <IconButton
        size="small"
        sx={{ aspectRatio: 1 }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}>
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
        }}>
        <List>
          <ListItemButton onClick={() => { copyToClipboard(content) }}>
            <ListItemIcon>
              <ContentCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Sao chép tin nhắn" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => onRedeemMsg(msgId)}>
            <ListItemIcon>
              <ReplayIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Thu hồi tin nhắn" sx={{ color: "red" }} />
          </ListItemButton>
        </List>
      </Popover>
      <Stack
        sx={{
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
        direction="column">
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
              variant="body1">
              {`Sending`}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
