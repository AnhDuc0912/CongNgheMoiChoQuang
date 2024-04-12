import Router from "./routes";
import ThemeProvider from './theme';
import ThemeSettings from './components/settings';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import axios from "axios";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // if (token) {
    //   axios
    //     .get("http://localhost:8080/auth/user", {
    //       headers: {
    //         Authorization: 'Bearer ' + token,
    //       }
    //     })
    //     .then(res => {

    //       // dispatch(setUser(res.data.user))
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }, [dispatch]);

  return (
    <ThemeProvider>
      <ThemeSettings>
        <SnackbarProvider>
          <Router />
        </SnackbarProvider>
      </ThemeSettings>
    </ThemeProvider>
  );
}
