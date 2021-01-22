import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 350,
    padding: "2rem 1.5rem",
  },
  textfileld: {
    width: 350,
  },
  button: {
    width: 350,
    marginTop: "1rem",
  },
}));
const Login = (props) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper elevation={1} className={classes.paper}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h5">Sign In</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Username"
              fullWidth
              className={classes.textfileld}
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Password"
              fullWidth
              className={classes.textfileld}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              <Typography>LOG IN</Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
