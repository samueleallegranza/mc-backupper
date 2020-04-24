import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

export default function EditAccountForm(props) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('false');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button aria-label="edit" size="small" variant="outlined" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Mega account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Insert updated informations of your account here
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="mega-email"
                        margin="dense"
                        label="New Email Address"
                        type="email"
                        fullWidth
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        id="mega-password"
                        margin="dense"
                        label="New Password"
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
                        onClick={() => {
                            props.onEdit(props.id, email, password)
                            handleClose();
                        }} 
                        color="primary">
                        Edit
                    </Button>
                </DialogActions>
                <Divider />
                <Button 
                    onClick={() => {
                        props.onDelete(props.id);
                        handleClose();
                    }} 
                    variant="contained" color="secondary">
                    Delete
                </Button>
            </Dialog>
        </div>
    );
}