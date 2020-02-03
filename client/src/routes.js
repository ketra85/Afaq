import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

import App from './App';
import GDProfile from './GDProfile';
import PMTable from './Pages/GDHomepage/PM/PMTable';
import MainPage from './MainPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/GDProfile" component={GDProfile} />
    <Route path="/PMTable" component={PMTable} />
    <Route path="/PMTable" component={SLPage} />
  </Route>
);
