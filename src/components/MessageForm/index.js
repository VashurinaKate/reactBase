import React, { useRef, useEffect } from "react";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

import { AUTHORS } from "../../constants";
import { useInput } from "../../utils/useInput";

export const MessageForm = ({ onSendMessage }) => {
    const inputTextRef = useRef(null);
    const { value, handleChange, reset } = useInput('')

    useEffect(() => {
        inputTextRef.current?.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            onSendMessage({
                author: AUTHORS.human,
                text: value,
                id: Date.now()
            })
        }
        inputTextRef.current?.focus()
        reset()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ marginTop: '30px' }}>
                <Grid item xs={8}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Your message</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            inputRef={inputTextRef}
                            value={value}
                            onChange={handleChange}
                            labelWidth={104}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        type="submit"
                        endIcon={<SendRoundedIcon></SendRoundedIcon>}>
                        Send
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
