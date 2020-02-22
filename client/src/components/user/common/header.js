import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';

import { connect } from 'react-redux';

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
    chatInfoBar: {
        position: 'relative',
        marginRight: `${window.innerHeight - (window.innerHeight/2.5)}px`,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    noTransform: {
        textTransform: 'none'
    }
}));

const mapStateToProps = state => {
    return {
        currentChat: state.currentChat
    }
}

function Header(props) {
    const currentChat = props.currentChat;

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
                    {
                        currentChat.isSelected &&
                        <div className={classes.chatInfoBar}>
                            <Typography variant="subtitle1">
                                {`${currentChat.user.firstName} ${currentChat.user.lastName}`}
                            </Typography>
                            <Typography variant="subtitle2">
                                online
                            </Typography>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default connect(mapStateToProps)(Header);