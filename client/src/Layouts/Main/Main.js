import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BackupIcon from '@material-ui/icons/Backup';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import SettingsIcon from '@material-ui/icons/Settings';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(10),
        padding: theme.spacing(3),
    },
    heading: {
        paddingLeft: theme.spacing(3),
    }
}));

const menuItems = {
    primary: [
        {
            name: 'Dashboard',
            icon: <DashboardIcon />,
            href: '/dashboard'
        },
        {
            name: 'Accounts',
            icon: <AccountCircleIcon />,
            href: '/accounts'
        },
        {
            name: 'Logs',
            icon: <EventNoteIcon />,
            href: '/logs'

        }
    ],
    secondary: [
        {
            name: 'Settings',
            icon: <SettingsIcon />,
            href: '/settings'
        },
        {
            name: 'Author',
            icon: <CreateIcon />,
            href: 'author'
        }
    ]
};    

const Main = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <BackupIcon />
                    <Typography variant="h5" noWrap className={classes.heading}>
                        mc-backupper
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {
                            menuItems.primary.map(item => {
                                return(
                                    <ListItem component={Link} to={item.href} button key={item.name}>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.name} />    
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                    <Divider />
                    <List>
                        {
                            menuItems.secondary.map(item => {
                                return (
                                    <ListItem component={Link} to={item.href} button key={item.name}>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    );
}

export default Main;