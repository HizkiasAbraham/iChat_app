import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../components/guest/login';
import Signup from '../components/guest/signup';
import NotFound from '../components/notFound';

export default function CustomRouter(props) {
    console.log('router props: ', props)
    return (
        <Router>
            <Switch>

                <Route
                    path="/login"
                    component={Login}
                />

                <Route
                    path="/signup"
                    component={Signup}
                />
                
                <Redirect
                    path="/"
                    exact
                    to="/login"
                />

                <Route component={NotFound} />

            </Switch>
        </Router>
    )

}
