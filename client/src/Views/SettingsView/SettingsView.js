import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class SettingsView extends React.Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="subtitle1" color="inherit">
                            SettingsView
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

export default SettingsView;