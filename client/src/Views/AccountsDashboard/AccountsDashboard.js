import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AccountCard from './Components/AccountCard';

const AccountsDashboard = () => {

    React.useEffect(() => {
        console.log('fetching');
        fetch('/users')
            .then(res => res.json())
            .then(users => console.log(users));
    });

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="subtitle1" color="inherit">
                        AccountsDashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <AccountCard />
        </div>
    );
}

export default AccountsDashboard;