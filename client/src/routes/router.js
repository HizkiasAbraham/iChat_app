import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../components/guest/login';
import Signup from '../components/guest/signup';
import ForgotPassword from '../components/guest/forgotPassword';
import NotFound from '../components/notFound';
import UserHome from '../components/user/userHome';

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

                <Route
                    path="/forgotPassword"
                    component={ForgotPassword}
                />

                <Route
                    path="/user"
                    component={UserHome}
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
