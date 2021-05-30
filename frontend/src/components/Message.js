import React from 'react'
//import { Alert } from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Message = ({ variant, children }) => {
    const classes = useStyles();

    return (
      /*  <Alert variant = {variant}>
            {children}
            
        </Alert>*/
        <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>{children}</strong>
</Alert>
    )
}

Message.defaultProps = {
    variant: 'info',
}
export default Message
