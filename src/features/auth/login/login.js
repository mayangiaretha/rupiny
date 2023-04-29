import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
// import { Logo } from "components/logo";
import { PASSWORD_REQUIRED, USER_NAME_REQUIRED } from "constants/features/auth";
import SnackBar from "../../../elements/snackBar/snackBar";
import LoginForm from "./loginForm";
import { Stack } from "../auth.styles";
import { login } from "../auth.actions";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state?.auth);

  useEffect(() => {
    if (authState?.error) {
      setError(authState.error);
    } else if (authState.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);

  const defaultValues = { username: "", password: "" };
  const yupObject = Yup.object({
    username: Yup.string().required(USER_NAME_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
  });

  const handleSubmit = async (values) => {
    const { username, password } = values;
    const jsonData = {
      userName: username,
      password,
    };
    dispatch(login(jsonData));
  };

  return (
    <Container component="main" maxWidth="xs">
      {error.length > 0 && (
        <SnackBar
          message={error}
          open={open}
          setOpen={setOpen}
          setError={setError}
        />
      )}

      <Stack mt={20}>
        <Grid container justify="flex-start">
          <Typography variant="h3">{/* <Logo size="big" /> */}</Typography>
        </Grid>
        <Grid container justify="flex-start">
          <Typography variant="h2" mt={1}>
            Welcome back
          </Typography>
        </Grid>
        <Typography variant="h6" mt={5} mb={4}>
          Please enter your username and password.
        </Typography>
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <LoginForm formik={formik} />}
        </Formik>
      </Stack>
    </Container>
  );
};

export default Login;
