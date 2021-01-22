import logo from "./logo.svg";
import "./App.css";
import Login from "./Containers/login";
import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import NavBar from "./Components/navbar";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundColor: theme.palette.primary.light,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </div>
    </Router>
  );
}

export default App;
