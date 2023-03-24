import React from "react";
import { Form } from "formik";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { TextField } from "elements/TextField";

const RegistrationForm = ({ formik }) => (
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
          label="Email Address"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          id="email"
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
          id="password"
          type="password"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          id="confirmPassword"
          type="password"
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" fullWidth variant="contained" sx={{}}>
          Sign Up
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h6">Already have an account? Sign in</Typography>
        </Link>
      </Grid>
    </Grid>
  </Form>
);

export default RegistrationForm;
