import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PMTable from './Pages/PMPage/PMTable';
import GDProfile from './Pages/GDProfile/GDProfile';
import SLPage from './Pages/SLPage/SLPage';

const MainPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={PMTable} />
      <Route exact path="/GDProfile" component={GDProfile} />
      <Route exact path="/sl" component={SLPage} />
    </Switch>
  );
};

export default MainPage;
