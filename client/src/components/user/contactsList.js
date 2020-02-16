import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSubAction from '@material-ui/core/ListItemSecondaryAction';

const contacts = [
    {
        name: 'Neba Shahsa',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Yara',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Neba Shahsa',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Yara',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Neba Shahsa',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Yara',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Neba Shahsa',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Yara',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Neba Shahsa',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Yara',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Neba Shahsa',
        lastMessage: 'Yet neh?'
    },
    {
        name: 'Yara',
        lastMessage: 'Yet neh?'
    },
]
export default function ContactsList(props) {
    return (
        <List>
            {
                contacts.map((concact, index) => (
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                {concact.name[0]}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={concact.name} secondary={concact.lastMessage} />
                    </ListItem>
                ))
            }
        </List>
    )
}
