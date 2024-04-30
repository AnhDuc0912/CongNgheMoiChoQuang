import { Box, Popover, Stack, Typography } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

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
const DispersedComposer = ({ room }) => {

    const findDispersingMember = () => {
        return room.users.find(x => x._id === room.creatorId);
    }

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                paddingX: '15px',
                paddingY: '10px',
                marginTop: '20px'
            }}>
            <Typography
                fontWeight="600"
                variant="body1"
                color="red"
                sx={{}}>
                {findDispersingMember().fullName + ' đã giải tán nhóm'}
            </Typography>
            <Typography fontSize="14px">
                Bạn không thể tiếp tục cuộc trò chuyện này. Vui lòng tìm hiểu thêm
            </Typography>
        </Box>
    );
};

export default DispersedComposer;
