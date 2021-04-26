import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  registerForm: {
    width: "100%",
    marginTop: theme.spacing(1),
    overflowY: "scroll",
    flexWrap: "nowrap",
    maxHeight: "100vh",
    paddingBottom: "20rem",
  },

  settingsForm: {
    display: "block",
    width: "100%",
    marginTop: theme.spacing(1),
    overflowY: "scroll",
    flexWrap: "nowrap",
    maxHeight: "100vh",
    paddingBottom: "15rem",
  },

  loginForm: {
    width: "100%",
    marginTop: theme.spacing(1),
    overflowY: "scroll",
    flexWrap: "nowrap",
    maxHeight: "100vh",
    paddingBottom: "15rem",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  iconLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  newMatches: {
    display: "flex",
    overflowX: "auto",
  },

  cardImage: {
    height: "50vh",
  },

  cardContent: {
    padding: "0 10px 10px",
  },

  cardDetail: {
    padding: "10px 0 30vh",
    lineHeight: 2,
    borderTop: "0.5px solid rgba(223, 224, 223, 0.3)",
  },

  matchesScreen: {
    overflowY: "scroll",
    maxHeight: "100vh",
    maxWidth: "768px",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: "10rem",
  },

  // MessageHeader

  messageHeader: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    borderBottom: "1px solid #f6f6f6",
    backgroundColor: "#fff",
    zIndex: "1",
    height: "8rem",
  },

  messageHeader__icon: {
    height: "5rem !important",
    width: "5rem !important",
  },
}));

export default useStyles;
