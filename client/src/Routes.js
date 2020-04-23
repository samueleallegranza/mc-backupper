import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

//Custom routers
import RouteWithLayout from './Components/RouteWithLayout/RouteWithLayout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

//Layouts
import MainLayout from './Layouts/Main/Main';
import MinimalLayout from './Layouts/Minimal/Minimal';

//Views
import BackupsDashboard from './Views/BackupsDashboard/BackupsDashboard';
import NotFoundView from './Views/NotFoundView/NotFoundView';
import AccountsDashboard from './Views/AccountsDashboard/AccountsDashboard';
import LogsDashboard from './Views/LogsDashboard/LogsDashboard';
import AuthorView from './Views/AuthorView/AuthorView';
import SettingsView from './Views/SettingsView/SettingsView';
import LoginView from './Views/LoginView/LoginView';

class Routes extends React.Component{
    render(){
        return(
            <Switch>
                {/* Redirects the user to the dashboard if on '/' */}
                <Redirect
                    exact
                    from='/'
                    to='/dashboard'
                ></Redirect>

                {/* Login Route, doesn't need to be protected */}
                <RouteWithLayout
                    component={LoginView}
                    exact
                    layout={MinimalLayout}
                    path="/login"
                />

                {/* Other routes, need to be protected */}

                <Route path='/dashboard' exact>
                    <PrivateRoute>
                        <MainLayout> 
                            <BackupsDashboard />
                        </MainLayout>
                    </PrivateRoute>
                </Route>

                <Route path='/accounts' exact>
                    <PrivateRoute>
                        <MainLayout>
                            <AccountsDashboard />
                        </MainLayout>
                    </PrivateRoute>
                </Route>
                
                <Route path='/logs' exact>
                    <PrivateRoute>
                        <MainLayout>
                            <LogsDashboard />
                        </MainLayout>
                    </PrivateRoute>
                </Route>

                <Route path='/settings' exact>
                    <PrivateRoute>
                        <MainLayout>
                            <SettingsView />
                        </MainLayout>
                    </PrivateRoute>
                </Route>

                <Route path='/author' exact>
                    <PrivateRoute>
                        <MainLayout>
                            <AuthorView />
                        </MainLayout>
                    </PrivateRoute>
                </Route>

                {/* <RouteWithLayout
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
                /> */}

                {/* Handling the redirection in case of not existing paths */}
                <RouteWithLayout
                    component={NotFoundView}
                    exact
                    layout={MinimalLayout}
                    path="/not-found"
                />
                <Redirect to="/not-found" />
            </Switch>
        );
    }
}

export default Routes;