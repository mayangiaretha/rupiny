import React from "react";
import { Container, Grid, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
// import { Logo } from "components/logo";
import {
  EMAIL_REQUIRED,
  INVALID_EMAIL_ADDRESS,
  PASSWORD_REQUIRED,
} from "constants/features/auth";
// import SnackBar from "elements/SnackBar";
// import { loginUser } from "../actions/auth.actions";
import LoginForm from "./loginForm";
import { Stack } from "../auth.styles";
import { login } from "../auth.actions";

export const Login = () => {
  // const navigate = useNavigate();
  // const [error, setError] = useState("");
  // const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const defaultValues = { email: "", password: "" };
  const yupObject = Yup.object({
    email: Yup.string().email(INVALID_EMAIL_ADDRESS).required(EMAIL_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
  });

  const handleSubmit = async (values) => {
    const { email, password } = values;
    const jsonData = {
      email,
      password,
    };
    // eslint-disable-next-line no-console
    dispatch(login(jsonData));
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Please enter your email address and password.
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
