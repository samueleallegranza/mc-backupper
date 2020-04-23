import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// Message component
// It takes the following props:
//
//      isOpen = true/false         
//          > The message will be visualized only if true
//
//      type = 'success'/'error'/'warning'/'info'/
//          > Describes the styling of the message
//
//      text = '...'
//          > Sets the text displayed in the message
//
//      onClose = function()
//          > takes a function that will be called when the
//          should be closed.

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Message(props) {
    if(props.isOpen){
        return (
            <div>
                <Snackbar open={props.isOpen} autoHideDuration={6000} onClose={props.onClose}>
                    <Alert onClose={props.onClose} severity={props.type}>
                        {props.text}
                    </Alert>
                </Snackbar>
            </div>        
        );
    } else {
        return <div></div>
    }
}

// Example implementation in general component:
//     const [message, setMessage] = useState({ isOpen: false, type: "", text: "" });
//     return (
//         <Message
//             isOpen={message.isOpen}
//             type={message.type}
//             text={message.text}
//             onClose={() => setMessage({ isOpen: false, type: "", text: "" })}
//         />
//     )
