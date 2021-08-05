import React from 'react';
import { AUTHORS } from "../../constants";
import { ChatListItem } from '../ChatListItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

export const ChatList = ({ chatList, onSetChats }) => {
    const handleSetChat = () => {
        onSetChats({
            name: "New Chat",
            id: Date.now(),
            messages: [{ 
                message: "message from new chat",
                author: AUTHORS.human,
                id: Date.now()
            }]
        })
    }
    
    return(
        <>
        <Paper>
            <List>
                {Object.values(chatList).map((item) => (
                    <ChatListItem name={item.name} id={item.id}/>
                ))}
            </List>
        </Paper>

        <Fab color="primary" aria-label="add" onClick={handleSetChat} style={{ marginTop: '15px' }}>
            <AddIcon/>
        </Fab>
        </>
    )
}
