import React, { useState } from "react";
import * as Yup from 'yup';
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
import { Alert,Button,IconButton,InputAdornment,Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterForm = () => {
    const [showPassword , setShowPassword] = useState(false);
    
    const RegisterSchema = Yup.object().shape({
        firstName : Yup.string().required("Nhập họ"),
        lastName : Yup.string().required("Nhập tên"),
        email : Yup.string().required("Nhập đúng Email"),
        password:  Yup.string().required("Nhập đúng mật khẩu"),
    });

    const defaultValues = {
        firstName :"",
        lastName:"",
        email: "demo@gmail.com",
        password:"demo123"
    }

    const methods  = useForm({
        resolver : yupResolver(RegisterSchema),
        defaultValues,
    });

    const {reset, setError, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful},
    }= methods;

    const  onSubmit = async (data)=> {
        try{

        }
        catch(error){
            console.log(error);
            reset();
            setError("afterSubmit",{
                ...error,
                message: error.message,
            })

        }
    };
    return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

        <Stack spacing={3}>
            {!!errors.afterSumit && (<Alert severity="error">{errors.afterSumit.message}</Alert>)}

        
            <RHFTextField name="firstName" label="Tên" />
            <RHFTextField name="lastName" label="Họ" />
        <Stack direction={{xs:"column",sm:"row"}} spacing ={2}>
           
            <RHFTextField name="email" label="Email" />
            <RHFTextField name="password"  type={showPassword ? "text" :"password"}  label="Password" InputProps ={{
            endAdornment:(
                <InputAdornment>
                    <IconButton onClick={() => {
                        setShowPassword(!showPassword);
                    }}>
                       {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            )
        }} />
        
        </Stack>
        <Button fullWidth color="inherit" size="large" type="submit" variant="contained" >
            Đăng ký
        </Button>
        </Stack>
        
        
    </FormProvider>
    )
}
export default RegisterForm;