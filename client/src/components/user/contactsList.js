import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';
import { selectChat } from '../../state/actionCreators';

const mapStateToProps = state => {
    return {
        contacts: state.contactsList,
        currentChat: state.currentChat
    }
}

function ContactsList(props) {
    const openChat = user => {
        props.history.push('/user?uname=' + user.username);
        props.selectChat(user);
    }
    return (
        <List>
            {
                props.contacts.map((contact, index) => (
                    
                    <React.Fragment>
                        <ListItem
                            key={index}
                            button
                            selected = {props.currentChat.user !== null && (props.currentChat.user.username === contact.username)}
                            onClick={() => openChat(contact)}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    {contact.firstName[0]}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={contact.firstName} secondary={contact.lastMessage} />
                        </ListItem>
                        <Divider key={`${index}d`} />
                    </React.Fragment>
                ))
            }
        </List>
    )
}

export default connect(mapStateToProps, { selectChat })(ContactsList);
