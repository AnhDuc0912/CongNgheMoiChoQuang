import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slices/auth";
import axios from "axios";
const LoginForm = () => {
  //   const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    //   try {
    //     axios.post("http://localhost:8080/auth/login")
    //         .then(res => {console.log(res.data)})
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    alert("vao`");
  }, []);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Nhập đúng Email"),
    password: Yup.string().required("Nhập đúng mật khẩu"),
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  // const history = useHistory();
  const onSubmit = async () => {
    try {
      //    dispatch(LoginUser(data));
      let data = {}

      return data;
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSumit && (
          <Alert severity="error">{errors.afterSumit.message}</Alert>
        )}

        <RHFTextField name="phoneNumber" label="Số Điện Thoại" />
        <RHFTextField
          name="password"
          label="Mật Khẩu"
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
      <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
        <Link
          component={RouterLink}
          to="/auth/reset-Password"
          varient="body2"
          color="inherit"
          underline="always">
          Quên Mật Khẩu?
        </Link>
      </Stack>
      <Button
        onClick={onSubmit()}
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained">
        Đăng nhập
      </Button>
    </FormProvider>
  );
};
export default LoginForm;
