import {Switch,Route} from 'react-router-dom';
import React from 'react';

import Auth from './component/Auth/Auth'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Nav from './component/Nav/Nav'
import Post from './component/Post/Post'

export default function Routes(){
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/post/:postid' component={Post} />
        <Route exact path='/new' component={Form} />
    </Switch>
}