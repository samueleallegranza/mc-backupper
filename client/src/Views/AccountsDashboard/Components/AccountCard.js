import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import megaIcon from './mega-icon.svg';
import LinearProgress from '@material-ui/core/LinearProgress';

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


export default function AccountCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid xs={3} className={classes.iconContainer}>
                        <img src={megaIcon} className={classes.icon}></img>
                    </Grid>
                    <Grid xs>
                        {/* <Typography className={classes.title} variant="h6" color="textPrimary" gutterBottom>
                            MEGA Account
                        </Typography> */}
                        <Typography className={classes.title} variant="subtitle1" color="textSecondary" gutterBottom>
                            samuele.allegranza@gmail.com
                        </Typography>
                        <Typography className={classes.title} variant="subtitle1" color="textSecondary" gutterBottom>
                            Space: 1GB/15GB
                            <LinearProgress />
                        </Typography>
                        <div className={classes.buttonContainer}>
                            <Button aria-label="edit" size="small" >Edit</Button>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

