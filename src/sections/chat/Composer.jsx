import { Stack } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import IconButton from "@mui/material/IconButton";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    font-size: 0.875rem;
    font-weight: 500;
    width: 100%;
    font-family: inherit;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 12px 12px;
    color: ${"black"};
    background: white;
    border: none;
    resize: none;
    font-size: 14px;
    &:hover {
      
    }
    &:focus {
      outline: 0;
    }
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);
const Composer = ({ onSubmitMsg }) => {
  const [content, setContent] = useState("");
  const [popEmoji, setPopEmoji] = useState(false);
  const ref = useRef();

  const onEnter = () => {
    if (content.length > 0) {
      onSubmitMsg(content);
      setContent("");
      ref.current?.focus();
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      onEnter(content);
    }
  };

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        backgroundColor: "white",
        paddingY: "10px",
        paddingX: "15px",
        alignItems: "flex-end",
      }}
    >
      <Textarea
        ref={ref}
        autoFocus
        onKeyDown={onKeyDown}
        maxRows="5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Soạn tin nhắn"
      />
      <Stack direction="row">
        <IconButton aria-label="attach-file">
          <AttachFileIcon />
        </IconButton>
        <IconButton aria-label="photos">
          <CropOriginalIcon />
        </IconButton>
        <IconButton
          aria-label="emoji"
          onClick={() => {
            setPopEmoji(true);
          }}
        >
          <TagFacesIcon />
        </IconButton>
        <EmojiPicker open={popEmoji}/>
        {content.length > 0 && (
          <IconButton onClick={onEnter} aria-label="emoji">
            <SendIcon sx={{ color: "#0162C4" }} />
          </IconButton>
        )}
      </Stack>
    </Stack>
  );
};

export default Composer;
