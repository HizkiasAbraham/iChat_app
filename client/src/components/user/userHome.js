import React from 'react';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';

import Header from './common/header';
import ContactsList from './contactsList';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    chatContent: {
        paddingTop: '50%',
        paddingLeft: '35%'
    },
    contactListArea: {
        maxHeight: `${window.innerHeight - 135}px`,
        overflowY: 'auto',
        marginTop: '2%'
    },
    divider: {
        minHeight: `${window.innerHeight - 88}px`
    },
    chatTextArea: {
        position: 'fixed',
        bottom: '20px',
        width: `${(window.innerWidth / 2) - (window.innerWidth / 16)}px`,
        marginRight: '100px'
    },

});

const mapStateToProps = state => {
    return {
        currentChat: state.currentChat
    }
}

function UserHome(props) {

    const classes = useStyle();
    const currentChat = props.currentChat;

    return (
        <React.Fragment>
            <Header {...props} />
            <Box m={1}>
                <Grid
                    spacing={2}
                    container>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextField
                            variant="outlined"
                            fullWidth
                            placeholder="Search"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                            }}
                            size="small"
                        />
                        <div className={classes.contactListArea} >
                            <ContactsList {...props} />
                        </div>
                    </Grid>
                    <Grid item>
                        <Divider className={classes.divider} orientation="vertical" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}>
                        {
                            !currentChat.isSelected &&
                            <div className={classes.chatContent}>
                                Please select a chat to start messaging
                            </div>
                        }
                        {
                            currentChat.isSelected &&
                            <React.Fragment>
                                <div className={classes.chatTextArea}>
                                    <TextField
                                        fullWidth
                                        placeholder="Write a message"
                                        size="medium"
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end"><Button><SendIcon /></Button></InputAdornment>
                                        }}
                                    />
                                </div>
                            </React.Fragment>
                        }
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, null)(UserHome);