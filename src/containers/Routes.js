import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import AppliedRoute from "../components/AppliedRoute"

export default function Routes({appProps}) {
    return (
        <Switch>
            {/* TODO: add path for "/signup" */}
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
            {/* finally, catch all unmatched routes */}
            <Route component={NotFound} />
        </Switch>
    );
}