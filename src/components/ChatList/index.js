import React from 'react';
import { ChatListItem } from '../ChatListItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { AddChat } from './AddChat'

export const ChatList = ({ chatList }) => {
    return(
        <>
        <Paper>
            <List>
                {Object.values(chatList).map((item) => (
                    <ChatListItem name={item.name} id={item.id} key={item.id}/>
                ))}
            </List>
        </Paper>
        <AddChat />
        </>
    )
}
