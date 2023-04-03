import { createContext, useMemo, useState } from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import getTheme from "../utils/theme";

export const ThemeContext = createContext({ toggleMode: () => {} });

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // You can get the user prefers-color-scheme;

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
