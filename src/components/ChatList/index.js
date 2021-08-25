import React from 'react';
import { ChatItem } from './ChatItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { AddChat } from './AddChat'

export const ChatList = ({ chatList, onAddChat, onDeleteChat }) => {
    return(
        <>
        <Paper>
            <List>
                {Object.values(chatList).map((item) => (
                    <ChatItem
                        name={item.name}
                        key={item.id}
                        onDelete={onDeleteChat}
                        id={item.id}/>
                ))}
            </List>
        </Paper>
        <AddChat onAddChat={onAddChat} />
        </>
    )
}
