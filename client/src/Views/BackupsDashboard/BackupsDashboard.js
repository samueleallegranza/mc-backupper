import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import BackupCard from './Components/BackupCard';

const BackupsDashboard = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="subtitle1" color="inherit">
                        BackupsDashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <BackupCard />
        </div>
    );
}

export default BackupsDashboard;