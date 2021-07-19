import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Index from '../pages/App';
import About from '../containers/about';
import FromAPI from '../pages/FromAPI';

function AppRouter() {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" exact component={Index} />
                <Route path="/sobre"exact component={About} />
                <Route path="/from_api"exact component={FromAPI} />
            </Router>
        </Provider>
    );
}

export default AppRouter;