import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Login from './app/components/Login/Login.jsx';
import Register from './app/components/Login/Register.jsx';
import ResetPassword from "./app/components/Login/ResetPassword.jsx";
import EnterToken from "./app/components/Login/EnterToken.jsx";
import ActivateAccount from "./app/components/Login/ActivateAccount.jsx";
import UploadResume from "./app/components/candidate/UploadResume.jsx";
import UserDashboard from "./app/components/candidate/UserDashboard.jsx";
import ViewUserResume from "./app/components/candidate/ViewUserResume.jsx";
import JobList from "./app/components/job/JobList.jsx";
import JobDetailPage from "./app/components/job/JobDetailPage.jsx";

import NotFound from "./app/components/NotFound.jsx";
import './app/styles/App.scss';
import './app/styles/modules/login.css';
import './app/styles/modules/headerFooter.css';
import 'antd/dist/antd.css';


class App extends Component {
    render() {
        return (
            <Switch>
                <Redirect to="/login" exact path='/' component={Login}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/reset' component={ResetPassword}/>
                <Route path='/enter-token' component={EnterToken}/>
                <Route path='/activate' component={ActivateAccount}/>
                <Route path='/upload' component={UploadResume}/>
                <Route path='/dashboard' component={UserDashboard}/>
                <Route path='/viewuserresume' component={ViewUserResume}/>
                <Route exact path='/jobs' component={JobList}/>
                <Route exact path='/jobsdetailpage' component={JobDetailPage}/>

                <Route path='*' component={NotFound}/>

            </Switch>
        );
    }
}

export default App;
