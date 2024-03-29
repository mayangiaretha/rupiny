import { createTheme } from "@mui/material/styles";

export const COLORS = {
  WHITE: "#fff",
  BLUE: "#1976d2",
  LIGHT_RED: "#ee475b",
};

export const ONE_REM_TO_PX = 16;

export const CUSTOM_MODAL_MARGIN_IN_REM = 4;

export const FONT = {
  // Define available font-families to be used throughout the app
  FAMILY: {
    POPPINS: ["Poppins", "sans-serif"].join(","),
  },
  LINE_HEIGHT: "136.4%",
  // Define font weights that would be used throughout the app
  WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
  },
  // Define font sizes that would be used throughout the app in rem
  // the numbers on the left indicates the px equivalent of the rem values
  SIZES: {
    48: "3rem",
    36: "2.25rem",
    32: "2rem",
    30: "1.875rem",
    28: "1.75rem",
    24: "1.5rem",
    22: "1.375rem",
    20: "1.25rem",
    18: "1.125rem",
    16: "1rem",
    14: "0.875rem",
    12: "0.75rem",
    10: "0.625rem",
    9: "0.563rem",
    8: "0.5rem",
  },
  LINE_HEIGHTS: {
    49: "3.063rem",
    33: "2.063rem",
    30: "1.875rem",
    27: "1.688rem",
    26: "1.563rem",
    22: "1.375rem",
    19: "1.188rem",
    16: "1rem",
    14: "0.875rem",
    13: "0.813rem",
    12: "0.75rem",
    11: "0.688rem",
  },
  STYLE: {
    ITALIC: "italic",
  },
};
export const theme = createTheme({
  typography: {
    fontFamily: FONT.FAMILY.POPPINS,
    h1: {
      fontSize: FONT.SIZES[30],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.MEDIUM,
    },
    h2: {
      fontSize: FONT.SIZES[24],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.MEDIUM,
      color: COLORS.MEDIUM_RED,
    },
    h3: {
      fontSize: FONT.SIZES[22],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    h4: {
      fontSize: FONT.SIZES[20],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    h5: {
      fontSize: FONT.SIZES[16],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    h6: {
      fontSize: FONT.SIZES[14],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    w1: {
      fontSize: FONT.SIZES[13],
      fontWeight: FONT.WEIGHT.SEMIBOLD,
      lineHeight: FONT.LINE_HEIGHT,
    },
    w2: {
      fontSize: FONT.SIZES[12],
      fontWeight: FONT.WEIGHT.BOLD,
      lineHeight: FONT.LINE_HEIGHT,
    },
  },
});
