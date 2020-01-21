import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";

export default function Routes() {
    return (
        <Switch>
            {/* TODO: add path for "/signup" */}
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route component={NotFound} />
        </Switch>
    );
}