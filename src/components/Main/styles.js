import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardContent: {
    paddingTop: 0,
  },
  divider: {
    margin: "20px 0",
  },
  glass: {
    background:
      "linear-gradient(to right bottom, rgba(255,255,255,.5), rgba(255,255,255,.1))",
    backdropFilter: "blur(1rem)",
  },
}));
