import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Topics from './Components/Topics/Topics';
import SignUp from './Components/SignUp';
import Forum from './Components/Forum';
import Welcome from './Components/Welcome';
import Mailer from './Components/Mailer';

export default (
    <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/topics' component={Topics} />
        <Route path='/forum' component={Forum} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/mailer' component={Mailer} />
    </Switch>
)