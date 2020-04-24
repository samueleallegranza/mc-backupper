import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import megaIcon from './mega-icon.svg';
// import LinearProgress from '@material-ui/core/LinearProgress';

import EditAccountForm from './EditAccountForm';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        margin: 12,
    },
    icon: {
        width: "70%",
        verticalAlign: 'middle', 
    },
    iconContainer: {
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
    },
    buttonContainer: {
        textAlign: 'center',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));


export default function AccountCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container >
                    <Grid xs={3} className={classes.iconContainer}>
                        <img src={megaIcon} className={classes.icon} alt='mega-icon'></img>
                    </Grid>
                    <Grid xs>
                        <Typography className={classes.title} variant="subtitle1" color="textSecondary" gutterBottom>
                            {props.email}
                        </Typography>
                        {/* <Typography className={classes.title} variant="subtitle1" color="textSecondary" gutterBottom>
                            Space: 1GB/15GB
                            <LinearProgress />
                        </Typography> */}
                        <div className={classes.buttonContainer}>
                            <EditAccountForm id={props.id} onEdit={props.onEdit} onDelete={props.onDelete} />
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

