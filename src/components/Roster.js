import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import User from './User';

const Roster = () => (
    <Switch>
        <h2>This is a Roster page!</h2>
        <Route exact path='/roster' component={FullRoster}/>
        <Route path='/roster/:number' component={User}/>
    </Switch>
);

export default Roster;