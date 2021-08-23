import React from 'react';
import { ChatListItem } from '../ChatListItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { AddChat } from './AddChat'

export const ChatList = ({ chatList, onAddChat }) => {
    return(
        <>
        <Paper>
            <List>
                {Object.values(chatList).map((item) => (
                    <ChatListItem
                        name={item.name}
                        key={item.id}
                        id={item.id}/>
                ))}
            </List>
        </Paper>
        <AddChat onAddChat={onAddChat} />
        </>
    )
}
