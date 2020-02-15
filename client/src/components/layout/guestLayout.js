import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../guest/common/header';

export default function GuestLayout({ component, ...rest }) {

    return (
        <React.Fragment>
            <Header {...rest} />
            <Route
                {...rest}
                component={component}
            />
        </React.Fragment>
    )
}
