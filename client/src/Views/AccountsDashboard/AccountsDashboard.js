import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AccountCard from './Components/AccountCard';
import NewAccountForm from './Components/NewAccountForm';


const AccountsDashboard = () => {
    // React.useEffect(() => {
    //     console.log('fetching');
    //     fetch('/users')
    //         .then(res => res.json())
    //         .then(users => console.log(users));
    // });

    // const onClickHandler = async (event) => {
    //         const settings = {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ username: 'admin', password: 'backup!' })
    //         };
    //         try {
    //             const fetchResponse = await fetch(`/api/auth/login`, settings);
    //             const data = await fetchResponse.json();
    //             const status = await fetchResponse.status;
    //             console.log(data);
    //             console.log(`status: ${status}`);
    //         } catch (e) {
    //             return e;
    //         }
    // };

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
            <NewAccountForm />
        </div>
    );
}

export default AccountsDashboard;