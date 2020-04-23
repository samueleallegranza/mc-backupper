import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { checkLogin, parseStatus } from '../../Api/Auth';


const PrivateRoute = (props) => {
    const [loggedIn, setLoggedIn] = useState('loading');

    useEffect(() => {
        async function fetchLogin(){
            const status = await checkLogin();
            if (parseStatus(status)) {
                setLoggedIn('authorized');
            } else {
                setLoggedIn('rejected');
            }
        }
        fetchLogin()
    }, [])
    
    switch (loggedIn){
        case 'loading':
            return <CircularProgress />;
        default:
        case 'rejected':
            return <Redirect to='/login' />;
        case 'authorized':
            return(
                <div>
                    {props.children}
                </div>
            )
            
    }


}

export default PrivateRoute;