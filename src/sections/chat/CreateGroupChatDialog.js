import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Divider, Stack, TextField } from '@mui/material';

const CreateGroupChatDialog = ({ open, onClose }) => {
    return (
        <Dialog
            open={open}
            scroll={"body"}
            onClose={() => {
                onClose();
            }}
            maxWidth="md"
            aria-labelledby="profile-modal-title"
            aria-describedby="profile-modal-description">
            <DialogTitle
                sx={{ fontWeight: '800', m: 0, p: 2 }}
                id="customized-dialog-title">
                Tạo nhóm
            </DialogTitle>
            <Divider />
            <IconButton
                aria-label="close"
                //onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}>
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Stack direction="row">
                    <Box sx={{
                        height: '60px',
                        width: '60px',
                        aspectRatio: 1,
                        borderRadius: '200px',
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #d3d3d3'
                    }}>
                    </Box>
                    <TextField
                        fullWidth
                        sx={{ ml: '15px' }}
                        id="standard-basic"
                        label="Tên nhóm"
                        variant="standard" />
                </Stack>
                <TextField
                    size='small'
                    sx={{ mt: '15px', fontSize: '14px' }}
                    fullWidth
                    id="outlined-basic"
                    label="Nhập số điện thoại"
                    variant="outlined" />
                
                <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                    ullamcorper nulla non metus auctor fringilla.
                </Typography>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button variant='contained' color='error' >
                    Hủy
                </Button>
                <Button variant='contained' color='info' autoFocus >
                    Tạo nhóm
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateGroupChatDialog;