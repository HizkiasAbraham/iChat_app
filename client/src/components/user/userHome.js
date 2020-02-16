import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search'

import Header from './common/header'
import ContactsList from './contactsList';

export default function UserHome(props) {
    return (
        <React.Fragment>
            <Header />
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
                        <ContactsList />
                    </Grid>
                    <Grid item><Divider orientation="vertical"/></Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}>
                            content
                    </Grid>

                </Grid>
            </Box>
        </React.Fragment>
    )
}
