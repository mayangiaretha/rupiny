import React from "react";
import { Form } from "formik";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { TextField } from "elements/TextField";

const LoginForm = ({ formik }) => (
  <Form id="loginForm" onSubmit={formik.handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          id="username"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          type="password"
          id="password"
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" fullWidth variant="contained" color="primary">
          LogIn
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Typography variant="h6" sx={{}}>
            Do not have an account? Sign Up
          </Typography>
        </Link>
      </Grid>
    </Grid>
  </Form>
);

export default LoginForm;
