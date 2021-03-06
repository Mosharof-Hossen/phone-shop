import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuthenticated } from '../../utils/auth'

export default function PrivateRoute({ children, ...rest }) {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}
