import {
  Avatar,
  Button,
  Dialog,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 8,
    width: 400,
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
}));

function ChangePasswordModal({ open, onClose }) {
  const classes = useStyles();


  return (
    <>
      <Dialog
        //  disableBackdropClick={true}
        open={open}
        scroll={"body"}
        onClose={() => {
          onClose();
        }}
        aria-labelledby="profile-modal-title"
        aria-describedby="profile-modal-description"
        className={classes.modal}
        //   onMouseDown={handleModalClick}
      >
        <form>
          <Stack
            alignItems="center"
            spacing={"20px"}
            className={classes.paper}
            sx={{
              ...classes.paper,
            }}
            direction={"column"}
          >
            <Avatar className={classes.avatar} />
            <Typography variant="h5" align="center" gutterBottom>
              Thông tin tài khoản
            </Typography>
            <TextField
              id="fullName"
              className={classes.formField}
              label="Họ và tên"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="email"
              className={classes.formField}
              label="Email"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="phoneNumber"
              className={classes.formField}
              label="Điện thoại"
              fullWidth
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Cập nhật
            </Button>
          </Stack>
        </form>
      </Dialog>
    </>
  );
}

export default ChangePasswordModal;
