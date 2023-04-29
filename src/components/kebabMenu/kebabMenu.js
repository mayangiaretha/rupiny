import React, { useState } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { FONT } from "styles/theme";
import {
  Box,
  Fade,
  IconButton,
  MenuItem,
  SvgIcon,
  Typography,
} from "@mui/material";
import { StyledMenu } from "./kebabMenu.styles";

const KebabMenu = ({ width, height, color, dataTestId, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick} data-testid={dataTestId}>
        <SvgIcon
          sx={{
            width: width || "1rem",
            height: height || "1rem",
            color,
          }}
        >
          <ExpandCircleDownIcon />
        </SvgIcon>
      </IconButton>
      <StyledMenu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        TransitionComponent={Fade}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              option.onClick();
              handleClose();
            }}
          >
            <Typography
              variant="w10"
              fontWeight={FONT.WEIGHT.MEDIUM}
              color={option.color}
            >
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </Box>
  );
};

export default KebabMenu;
