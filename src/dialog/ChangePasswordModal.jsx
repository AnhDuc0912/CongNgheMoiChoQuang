import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);
  const [showNewPasswordConfirm, setNewShowPasswordConfirm] = useState(false);


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
              fullWidth
              id="password"
              label="Mật khẩu hiện tại"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // error={formik.errors.password && formik.touched.password}
              // helperText={formik.errors.password}
              // value={formik.values.password}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              id="newPassword"
              label="Mật khẩu mới"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // error={formik.errors.password && formik.touched.password}
              // helperText={formik.errors.password}
              // value={formik.values.password}
              type={showNewPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={() => {
                        setNewShowPassword(!showNewPassword);
                      }}
                    >
                      {showNewPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              id="newPassword"
              label="Mật khẩu mới"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // error={formik.errors.password && formik.touched.password}
              // helperText={formik.errors.password}
              // value={formik.values.password}
              type={showNewPasswordConfirm ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={() => {
                        setNewShowPasswordConfirm(!showNewPasswordConfirm);
                      }}
                    >
                      {showNewPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
