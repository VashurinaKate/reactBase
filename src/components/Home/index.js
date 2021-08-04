import { useEffect, useCallback } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { ChatList } from '../ChatList';
import './Home.css';
import Grid from '@material-ui/core/Grid';
import { AUTHORS } from '../../constants';

function Home({ chats, setChats }) {
    const { chatId } = useParams();

    const handleSendMessage = useCallback((newMessage) => {
        setChats({
            ...chats,
            [chatId]: {
                ...chats[chatId], 
                messages: [...chats[chatId].messages, newMessage]
            }
        })
    }, [chats, chatId])

    useEffect(() => {
        if (!chatId ||
            !chats[chatId].messages.length ||
            chats[chatId].messages[chats[chatId].messages.length - 1].author === AUTHORS.robot) {
                return
            }
            const timeout = setTimeout(() => {
                const robotMess = {
                    message: 'hello',
                    author: AUTHORS.robot,
                    id: Date.now()
                };
                handleSendMessage(robotMess)
            }, 1000);
            return () => clearTimeout(timeout);
    }, [chats, chatId]);
    
    const handleSetChat = (newChat) => {
        setChats({
            ...chats,
            newChat
        })
    }
    return (
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <ChatList chatList={chats} onSetChats={handleSetChat}/>
            </Grid>
            { !!chatId && <Grid
                item xs={9}
                container
                direction="column"
                justifyContent="space-between"
                style={{ minHeight: '100vh', paddingBottom: '30px' }}>
                    <Grid item><MessageList messageList={chats[chatId].messages}/></Grid>
                    <Grid item><MessageForm onSendMessage={handleSendMessage}/></Grid>
            </Grid>
            }
            { !chats[chatId] && <Redirect to="/nochat" /> }
        </Grid>
    );
}

export default Home;
