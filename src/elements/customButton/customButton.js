import React from "react";
import { StyledButton } from "./customButton.style";

const CustomButton = ({
  children,
  width,
  background,
  fontcolor,
  hoverbackground,
  border,
  ...props
}) => (
  <StyledButton
    width={width}
    background={background}
    hoverbackground={hoverbackground}
    fontcolor={fontcolor}
    border={border}
    {...props}
  >
    {children}
  </StyledButton>
);

export default CustomButton;
