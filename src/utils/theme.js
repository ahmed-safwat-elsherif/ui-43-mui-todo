import { createTheme } from "@mui/material/styles";

/** @param {"dark" | "light"} mode */
const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
    typography: {
      h1: {
        fontSize: 50,
      },
      h2: {
        fontSize: 40,
      },
      h3: {
        fontSize: 30,
      },
      h5: {
        fontWeight: 500,
      },
    },
  });

export default getTheme;
