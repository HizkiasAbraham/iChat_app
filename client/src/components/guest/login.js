import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './common/header';
import Copyright from './common/copyright';

import { goto } from '../../routes/routeUtils';
import { guestFormStyles } from '../../utils/styleSets';

const useStyles = makeStyles(theme => guestFormStyles(theme));

export default function LogIn(props) {
    const classes = useStyles();

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <React.Fragment>
            {/* <Header {...props} /> */}
            <Container className={classes.body} component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={handleLogin} className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                    </Button>
                        <Grid container>
                            <Grid item xs>
                                <Button
                                    onClick={() => {goto(props.history, 'forgotPassword')}}
                                    className={classes.noTransform}
                                    variant="text"
                                    color="primary"
                                >
                                    Forgot password?
                                 </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={() => goto(props.history, 'signup')}
                                    className={classes.noTransform}
                                    variant="text"
                                    color="primary"
                                >
                                    {"Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );
}
