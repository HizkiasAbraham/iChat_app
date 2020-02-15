import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            iChat
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
