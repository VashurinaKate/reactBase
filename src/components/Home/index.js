import { useCallback, useEffect, useState } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { ChatList } from '../ChatList';
import './Home.css';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux'
// import { sendMessageWithReply } from '../../store/chats/actions';

import { selectAbbreviatedName } from '../../store/profile/selectors';
import { selectChats } from "../../store/chats/selectors.js";
import { selectMessages } from "../../store/messages/selectors";

import {
    connectChatsToFB,
} from "../../store/chats/actions";
import firebase from "firebase";
import {
    connectMessagesToFB,
    sendMessageWithFB,
} from "../../store/messages/actions";

function Home() {
    const { chatId } = useParams();
    const abbreviatedName = useSelector(selectAbbreviatedName)
    const dispatch = useDispatch();
    const chats = useSelector(selectChats);
    const messages = useSelector(selectMessages);

    useEffect(() => {
        dispatch(connectChatsToFB());
        dispatch(connectMessagesToFB());
    }, [])

    const handleSendMessage = useCallback((newMessage) => {
        dispatch(sendMessageWithFB(chatId, { ...newMessage, author: abbreviatedName }))
    }, [chatId, abbreviatedName, dispatch])
    
    return (
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <ChatList
                    chatList={chats}
                    // onAddChat={addChat} 
                    // onDeleteChat={removeChat}
                    />
            </Grid>
            { !!chatId &&
            <Grid
                item xs={9}
                container
                direction="column"
                justifyContent="space-between"
                style={{ minHeight: '100vh', paddingBottom: '30px' }}>
                    <Grid item>
                        {/* <MessageList messages={chats[chatId].messages} abbreviatedName={abbreviatedName}/> */}
                        <MessageList messages={messages[chatId] || []} abbreviatedName={abbreviatedName}/>
                    </Grid>
                    <Grid item><MessageForm onSendMessage={handleSendMessage}/></Grid>
            </Grid>
            }
        </Grid>
    );
}

export default Home;
