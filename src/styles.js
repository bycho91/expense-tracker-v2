import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "5%",
    },
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  circle: {
    background:
      "linear-gradient(to right bottom, rgba(255,255,255,0.4), rgba(255,255,255,.1))",
    borderRadius: "50%",
    position: "absolute",
    boxShadow: "2px 2px 2px rgba(0,0,0,.1)",
  },
  circle1: {
    top: "5%",
    left: "15%",
    width: "20rem",
    height: "20rem",
  },
  circle2: {
    bottom: "3%",
    right: "15%",
    width: "16rem",
    height: "16rem",
  },
  circle3: {
    bottom: "5%",
    left: "1%",
    width: "12rem",
    height: "12rem",
  },
}));
