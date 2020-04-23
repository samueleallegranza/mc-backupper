import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    notFoundNumber: {
        color: '#3a7de8',
        fontSize: '30vw'
    },
    notFoundText: {
        color: '#919191',
        textAlign: 'center',
        fontSize: '6vw',
    },
    takeBack: {
        color: '#919191',
        textAlign: 'center',
        fontSize: '3vw',
    },
    takeBackLink: {
        color: '#3a7de8',
    }

}));

const NotFoundView = () => {
    const classes = useStyles();

    return(
        <div>
            <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={{ minHeight: "90vh" }}
            >
                <Grid item xs={6}>
                    <Typography className={classes.notFoundNumber}>
                        404
                    </Typography>
                    <br></br>
                    <Typography className={classes.notFoundText}>
                        Not found
                    </Typography>
                    <Typography className={classes.takeBack}>
                        Take me back to the&nbsp;
                        <Link to="/" className={classes.takeBackLink}>
                            Dashboard
                        </Link>!
                    </Typography>
                </Grid>
            </Grid>  
        </div>
    );

}

class notFoundView extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="subtitle1" color="inherit">
                            Not found!
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

export default NotFoundView;