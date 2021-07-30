import React, { useState, useRef, useEffect } from "react";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

import { AUTHORS } from "../../constants";

export const MessageForm = ({ onSendMessage }) => {
    const [messageValue, setMessageValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleMessageChange = (e) => {
        setMessageValue(e.target.value);
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (messageValue) {
            onSendMessage({
                author: AUTHORS.human,
                message: messageValue,
                id: Date.now()
            })
        }
        setMessageValue('');
        inputRef.current?.focus()
    }

    return (
        <form noValidate autoComplete="off">
            <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ marginTop: '30px' }}>
                <Grid item xs={8}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Your message</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={messageValue}
                            onChange={handleMessageChange}
                            labelWidth={104}
                            inputRef={inputRef}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        endIcon={<SendRoundedIcon></SendRoundedIcon>}>
                        Send
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
