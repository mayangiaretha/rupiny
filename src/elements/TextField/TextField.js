import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { FormControl } from "./TextField.styles";

const TextField = ({
  dataTestId,
  errors,
  helperText,
  name,
  value,
  width,
  ...props
}) => (
  <FormControl width={width}>
    <MuiTextField
      name={name}
      data-testid={dataTestId}
      value={value}
      fullWidth
      error={errors}
      helperText={helperText}
      {...props}
    />
  </FormControl>
);

export default TextField;
