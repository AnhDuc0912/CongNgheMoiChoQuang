import React, { useState } from "react";
import * as Yup from 'yup';
import { Button, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

const RegisterForm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [showPassword, setShowPassword] = useState(false);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required("Nhập họ"),
            lastName: Yup.string().required("Nhập tên"),
            phoneNumber: Yup.string().required("Nhập đúng Email"),
            password: Yup.string().required("Nhập đúng mật khẩu"),
        }),
        onSubmit: async values => {
            alert("Đăng ký thành công")
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
                <TextField
                    fullWidth
                    id="firstName"
                    label="Tên"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.firstName && formik.touched.firstName}
                    helperText={formik.errors.firstName}
                    value={formik.values.firstName}
                />
                <TextField
                    fullWidth
                    id="lastName"
                    label="Họ"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.lastName && formik.touched.lastName}
                    helperText={formik.errors.lastName}
                    value={formik.values.lastName}
                />
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                        fullWidth
                        id="phoneNumber"
                        label="Số điện thoại"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.phoneNumber && formik.touched.phoneNumber}
                        helperText={formik.errors.phoneNumber}
                        value={formik.values.phoneNumber}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        label="Mật khẩu"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.password && formik.touched.password}
                        helperText={formik.errors.password}
                        value={formik.values.password}
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                </Stack>
                <Button fullWidth color="inherit" size="large" type="submit" variant="contained" >
                    Đăng ký
                </Button>
            </Stack>


        </form>
    )
}
export default RegisterForm;