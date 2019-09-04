import React from 'react';
import App from '../App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Homepage from '../component/homepage/homepage';
export default () => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Homepage} />
            </Route>
        </Router>
    )
}