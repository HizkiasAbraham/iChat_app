import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';

import { goto } from '../../../routes/routeUtils';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
    },
    noTransform: {
        textTransform: 'none'
    }
}));

export default function Header(props) {

    console.log('History ', props.history)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <Button
                            startIcon={<ChatIcon />}
                            color="inherit"
                            onClick={() => goto(props.history, '')}
                            variant="text"
                            style={{ textTransform: 'none' }}
                        >
                            <Typography variant="h5">
                                iChat
                            </Typography>
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
