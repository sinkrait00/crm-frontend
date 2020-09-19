import React from 'react';
import {Route, Switch} from "react-router-dom";

import MainPage from './pages/MainPage/MainPage'
import './App.css';
import AuthPage from "./pages/Auth/AuthPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import CreateOrEditUserContainer from "./components/Users/CreateOrEditUserContainer";
import ProvidersPage from "./pages/ProvidersPage/ProvidersPage";


const App: React.FC = ()=>{
  return(
<>

  <Route path={'/main'} exact component={MainPage} />
      <Route path={'/'} exact component={AuthPage}/>
      <Route path={'/users'}  component={UsersPage} />
      <Route path={'/chat'} exact component={MainPage} />
      <Route path={'/files'} exact component={MainPage} />
      <Route path={'/providers'}  component={ProvidersPage} />

</>
  )
}

export default App;
