import React, {useEffect} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";

import MainPage from './pages/MainPage/MainPage'
import './App.css';
import AuthPage from "./pages/Auth/AuthPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ProvidersPage from "./pages/ProvidersPage/ProvidersPage";
import FiltersPage from "./pages/FiltersPage/FiltersPage";
import {authChecker} from "./components/Auth/authChecker";
import {logout} from "./components/Auth/logout";
import withLogIn from "./components/HOC/withLogIn";
import {connect} from "react-redux";
import {toggleAuth} from "./redux/reducers/mainReducer";
import withPreloader from "./components/HOC/withPreloader";


const App: React.FC = (props)=>{
  return(
<>

        <Route path={'/main'} exact component={MainPage} />
      <Route path={'/users'}  component={UsersPage} />
      <Route path={'/chat'} exact component={MainPage} />
      <Route path={'/files'} exact component={MainPage} />
      <Route path={'/providers'}  component={ProvidersPage} />
    <Route path={'/filters'}  component={FiltersPage} />
        <Route path={'/'} exact component={AuthPage}/>
</>

  )
}
const mapStateToProps  = state=>{
    return{
        isAuth: state.main.isAuthorized.isAuth
    }
}
export default connect(mapStateToProps,{toggleAuth})(withRouter(withLogIn(withPreloader(App))));
