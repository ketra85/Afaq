import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PMTable from '../src/components/table/PMTable'
import GDProfile from '../src/GDProfile';

const MainPage = () => {
    return (
        <Switch>
            <Route exact path="/" component={PMTable} />
            <Route exact path="/GDProfile" component={GDProfile} />
        </Switch>
    );
}

export default MainPage;