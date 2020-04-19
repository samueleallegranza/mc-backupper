import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

//Layouts
import RouteWithLayout from './Components/RouteWithLayout/RouteWithLayout';

//Layouts
import Main from './Layouts/Main/Main';

//Views
import BackupsDashboard from './Views/BackupsDashboard/BackupsDashboard';
import NotFoundView from './Views/NotFoundView/NotFoundView';
import AccountsDashboard from './Views/AccountsDashboard/AccountsDashboard';
import LogsDashboard from './Views/LogsDashboard/LogsDashboard';
import AuthorView from './Views/AuthorView/AuthorView';
import SettingsView from './Views/SettingsView/SettingsView';

class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Redirect
                    exact
                    from='/'
                    to='/dashboard'
                >
                </Redirect>
                <RouteWithLayout
                    component={BackupsDashboard}
                    exact
                    layout={Main}
                    path="/dashboard"
                />
                <RouteWithLayout
                    component={AccountsDashboard}
                    exact
                    layout={Main}
                    path="/accounts"
                />
                <RouteWithLayout
                    component={LogsDashboard}
                    exact
                    layout={Main}
                    path="/logs"
                />
                <RouteWithLayout
                    component={SettingsView}
                    exact
                    layout={Main}
                    path="/settings"
                />
                <RouteWithLayout
                    component={AuthorView}
                    exact
                    layout={Main}
                    path="/author"
                />
                <RouteWithLayout
                    component={NotFoundView}
                    exact
                    layout={Main}
                    path="/not-found"
                />
                <Redirect to="/not-found" />
            </Switch>
        );
    }
}

export default Routes;