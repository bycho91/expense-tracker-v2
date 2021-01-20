import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import useStyles from "./styles";
import Main from "./components/Main/Main";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={THEME}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
        className={classes.grid}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <div className={`${classes.circle} ${classes.circle1}`}></div>
      <div className={`${classes.circle} ${classes.circle2}`}></div>
      <div className={`${classes.circle} ${classes.circle3}`}></div>
    </MuiThemeProvider>
  );
};

export default App;
