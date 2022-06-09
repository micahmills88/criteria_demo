import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import CustomTheme from "./theme";
// import Criteria from "./Criteria";
import Desktop from "./Desktop";

function App() {
    return (
        <ThemeProvider theme={CustomTheme} >
            <CssBaseline />
            <Desktop />
            {/* <Criteria /> */}
        </ThemeProvider>
    );
}

export default App;
