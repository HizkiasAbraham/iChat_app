import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockUnlockIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './common/header';
import Copyright from './common/copyright';

import { guestFormStyles } from '../../utils/styleSets';

const useStyles = makeStyles(theme => guestFormStyles(theme));

export default function LogIn(props) {
    const classes = useStyles();

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <Header {...props} />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockUnlockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Reset your account
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Reset
                    </Button>

                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );
}
