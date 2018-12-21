import React from 'react';
import { Router, Route, hashHistory, Redirect } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import BillingCyle from '../billingCycles/billingCyles';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/billingCycles' component={BillingCyle}/>
        <Redirect from='*' to =''/>
    </Router>  
);
