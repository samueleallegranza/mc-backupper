import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { newLogin } from '../../Api/Auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Message from '../../Components/Message/Message';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignIn() {
    const classes = useStyles();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState({isOpen: false, type: "" ,text: ""});
    const [redirectPath, redirectStart] = useState('');

    async function login() {
        const status = await newLogin(username, password);
        switch(status){
            case 200:
                setMessage({ isOpen: true, type: 'success', text: 'Logged in!' });
                redirectStart('/');
                break;
            case 403:
                setMessage({ isOpen: true, type: 'error', text: 'Invalid credentials!' });
                break;
            case 400:
                setMessage({ isOpen: true, type: 'error', text: 'Something went wrong (invalid parameters)' });
                break;
            default:
                setMessage({ isOpen: true, type: 'error', text:'Something went wrong'});
        }
    }

    const onLoginClickHandler = (event) => {
        login();
    };

    const onLoginEnterHandler = (event) => {
        if (event.key === 'Enter') {
            login();
        }
    };

    
    if (redirectPath) {
        return <Redirect to={redirectPath} />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onKeyDown={onLoginEnterHandler}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onLoginClickHandler}
                    >   Login
                    </Button>
                    <Message 
                        isOpen={message.isOpen}
                        type={message.type}
                        text={message.text}
                        onClose={() => setMessage({ isOpen: false, type: "", text: "" })}
                    />
                </form>
            </div>
        </Container>
    );
}