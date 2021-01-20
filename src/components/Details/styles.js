import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0,255,0,.5)",
  },
  expense: {
    borderBottom: "10px solid rgba(255,0,0,.5)",
  },
  glass: {
    background:
      "linear-gradient(to right bottom, rgba(255,255,255,.3), rgba(255,255,255,.1))",
    backdropFilter: "blur(1rem)",
  },
  josefin: {
    fontFamily: "'Josefin Sans', sans-serif",
  },
}));
