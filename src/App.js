import React from 'react';
import {Route, Switch} from "react-router-dom";

import MainPage from './pages/MainPage/MainPage'
import './App.css';
import AuthPage from "./pages/Auth/AuthPage";
import UsersPage from "./pages/UsersPage/UsersPage";


const App: React.FC = ()=>{
  return(

    <Switch >
  <Route path={'/'} exact component={MainPage} />
      <Route path={'/sign-in'} exact component={AuthPage}/>
      <Route path={'/users'} exact component={UsersPage} />
      <Route path={'/chat'} exact component={MainPage} />
      <Route path={'/files'} exact component={MainPage} />
      <Route path={'/providers'} exact component={MainPage} />
    </Switch>
  )
}

export default App;
