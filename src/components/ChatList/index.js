import { useState } from 'react';
import { ChatListItem } from '../ChatListItem';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export const ChatList = () => {
    const [chatList, setChatList] = useState([{ chatName: 'my chat with bot', chatId: Date.now() }]);

    const handleSetChat = () => {
        const newChat = { chatName: 'new empty chat', chatId: Date.now() }
        setChatList([...chatList, newChat]);
    }

    return(
        <>
        <List component="nav" aria-label="main mailbox folders">
            {chatList.map((item) => (
                <ChatListItem chatName={item.chatName} key={item.chatId}/>
            ))}
        </List>
        <Fab color="primary" aria-label="add" onClick={handleSetChat}>
            <AddIcon/>
        </Fab>
        </>
    )
}
