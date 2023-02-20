import React from "react";
import { Container, Grid, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  CONFIRM_PASSWORD_REQUIRED,
  EMAIL_REQUIRED,
  USER_NAME_REQUIRED,
  INVALID_EMAIL_ADDRESS,
  PASSWORD_REQUIRED,
} from "constants/features/auth";
import { register } from "../auth.actions";
import { Stack } from "../auth.styles";
import RegistrationForm from "./registrationForm";
// import SnackBar from "../../../elements/SnackBar";

const Registration = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [error, setError] = useState("");
  // const [open, setOpen] = useState(true);
  // const authState = useSelector((state) => state?.authentication);
  // useEffect(() => {
  //   if (authState?.error && Object.keys(authState?.error).length > 0) {
  //     setError(Object.values(authState.error)[0]);
  //     setOpen(true);
  //   } else if (authState?.isAuthenticated) {
  //     navigate("/dashboard");
  //   }
  // }, [authState]);

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const yupObject = Yup.object({
    username: Yup.string().required(USER_NAME_REQUIRED),
    email: Yup.string().email(INVALID_EMAIL_ADDRESS).required(EMAIL_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
    confirmPassword: Yup.string().required(CONFIRM_PASSWORD_REQUIRED),
  });

  const handleSubmit = (values) => {
    const { username, email, password, confirmPassword } = values;
    if (confirmPassword === password) {
      const jsonData = {
        userName: username,
        email,
        password,
      };
      dispatch(register(jsonData));
    } else {
      console.warn("wrong password =====================================>");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Stack mt={20}>
        <Grid container justify="flex-start">
          <Typography variant="h3" />
        </Grid>
        <Grid container justify="flex-start">
          <Typography variant="h2" mt={1}>
            Sign Up
          </Typography>
        </Grid>
        <Typography variant="h6" mt={5} mb={4}>
          Register a new account.
        </Typography>
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <RegistrationForm formik={formik} />}
        </Formik>
      </Stack>
    </Container>
  );
};

export default Registration;
