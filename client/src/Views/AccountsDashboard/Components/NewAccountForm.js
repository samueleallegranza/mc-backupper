import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function NewAccountForm(props) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab 
                color="primary" 
                aria-label="add"
                className={classes.button}
                onClick={handleClickOpen} >
                <AddIcon /> 
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Mega account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add informations about your Mega backup account
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="mega-email"
                        margin="dense"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        id="mega-password"
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                        onChange={e => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button 
                        onClick={ () => { 
                                props.onAdd(email, password)    //Add the new account
                                handleClose()                   //Close the prompt automatically
                            }} 
                        color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}