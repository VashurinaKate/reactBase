import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { addChat } from '../../store/chats/actions'

export const AddChat = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) {
            return
        }
        const newId = `chat-${Date.now()}`

        dispatch(addChat(newId, value))
        setValue('')
    }

    return(
        <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off">
            <TextField
                onChange={handleChange}
                value={value}
                id="standard-basic"
                label="Standard" />
            <Fab
                onClick={handleSubmit}
                color="primary"
                aria-label="add"
                style={{ marginTop: '15px' }}>
                <AddIcon/>
            </Fab>
        </form>
    )
}
